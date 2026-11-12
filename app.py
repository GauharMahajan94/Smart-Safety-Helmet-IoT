
import streamlit as st
import pandas as pd
import plotly.express as px
import sqlite3
import random
from io import BytesIO
from pathlib import Path
from datetime import datetime, date
from streamlit_autorefresh import st_autorefresh
from helmet_component import smart_helmet

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4, landscape
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle


# =====================================================
# PAGE CONFIGURATION
# =====================================================

st.set_page_config(
    page_title="Smart Safety Helmet - Worker Monitoring",
    page_icon="⛑️",
    layout="wide"
)


# =====================================================
# DATABASE CONFIGURATION
# =====================================================

BASE_DIR = Path(__file__).parent
DATA_DIR = BASE_DIR / "data"
DATA_DIR.mkdir(exist_ok=True)

DB_PATH = DATA_DIR / "safety_helmet.db"


def get_connection():
    return sqlite3.connect(DB_PATH)


def create_tables():

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
                   CREATE TABLE IF NOT EXISTS sensor_readings (
                                                                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                                                                  worker_id TEXT,
                                                                  temperature REAL,
                                                                  humidity REAL,
                                                                  gas_level REAL,
                                                                  helmet_status TEXT,
                                                                  movement TEXT,
                                                                  tilt_angle REAL DEFAULT 0,
                                                                  risk_level TEXT,
                                                                  created_at TEXT
                   )
                   """)

    cursor.execute("""
                   CREATE TABLE IF NOT EXISTS incidents (
                                                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                                                            worker_id TEXT,
                                                            incident TEXT,
                                                            risk_level TEXT,
                                                            created_at TEXT
                   )
                   """)

    # Migrate older sensor table
    sensor_columns = {
        row[1] for row in cursor.execute(
            "PRAGMA table_info(sensor_readings)"
        ).fetchall()
    }

    sensor_required = {
        "worker_id": "TEXT",
        "temperature": "REAL",
        "humidity": "REAL",
        "gas_level": "REAL",
        "helmet_status": "TEXT",
        "movement": "TEXT",
        "tilt_angle": "REAL DEFAULT 0",
        "risk_level": "TEXT",
        "created_at": "TEXT"
    }

    for column, column_type in sensor_required.items():
        if column not in sensor_columns:
            cursor.execute(
                f"ALTER TABLE sensor_readings "
                f"ADD COLUMN {column} {column_type}"
            )

    # Migrate older incidents table
    incident_columns = {
        row[1] for row in cursor.execute(
            "PRAGMA table_info(incidents)"
        ).fetchall()
    }

    incident_required = {
        "worker_id": "TEXT",
        "incident": "TEXT",
        "risk_level": "TEXT",
        "created_at": "TEXT",
        "status": "TEXT DEFAULT 'OPEN'",
        "acknowledged_at": "TEXT",
        "resolved_at": "TEXT"
    }

    for column, column_type in incident_required.items():
        if column not in incident_columns:
            cursor.execute(
                f"ALTER TABLE incidents "
                f"ADD COLUMN {column} {column_type}"
            )

    conn.commit()
    conn.close()


create_tables()


# =====================================================
# DATABASE FUNCTIONS
# =====================================================

def save_reading(data):

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
                   INSERT INTO sensor_readings (
                       worker_id,
                       temperature,
                       humidity,
                       gas_level,
                       helmet_status,
                       movement,
                       tilt_angle,
                       risk_level,
                       created_at
                   )
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
                   """, (
                       data["worker_id"],
                       data["temperature"],
                       data["humidity"],
                       data["gas_level"],
                       data["helmet_status"],
                       data["movement"],
                       data["tilt_angle"],
                       data["risk"],
                       datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                   ))

    conn.commit()
    conn.close()


def save_incident(worker_id, incident, risk):

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
                   INSERT INTO incidents (
                       worker_id,
                       incident,
                       risk_level,
                       created_at
                   )
                   VALUES (?, ?, ?, ?)
                   """, (
                       worker_id,
                       incident,
                       risk,
                       datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                   ))

    conn.commit()
    conn.close()


def update_incident_status(incident_id, new_status):

    conn = get_connection()
    cursor = conn.cursor()

    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    if new_status == "ACKNOWLEDGED":
        cursor.execute("""
                       UPDATE incidents
                       SET status = ?, acknowledged_at = ?
                       WHERE id = ? AND status = 'OPEN'
                       """, (new_status, now, incident_id))

    elif new_status == "RESOLVED":
        cursor.execute("""
                       UPDATE incidents
                       SET status = ?, resolved_at = ?
                       WHERE id = ?
                         AND status IN ('OPEN', 'ACKNOWLEDGED')
                       """, (new_status, now, incident_id))

    conn.commit()
    conn.close()


def get_readings(worker_id=None):

    conn = get_connection()

    if worker_id:
        df = pd.read_sql_query("""
                               SELECT *
                               FROM sensor_readings
                               WHERE worker_id = ?
                               ORDER BY id DESC
                                   LIMIT 100
                               """, conn, params=(worker_id,))

    else:
        df = pd.read_sql_query("""
                               SELECT *
                               FROM sensor_readings
                               ORDER BY id DESC
                                   LIMIT 300
                               """, conn)

    conn.close()
    return df


def get_incidents(worker_id=None):

    conn = get_connection()

    if worker_id:
        df = pd.read_sql_query("""
                               SELECT *
                               FROM incidents
                               WHERE worker_id = ?
                               ORDER BY id DESC
                                   LIMIT 100
                               """, conn, params=(worker_id,))

    else:
        df = pd.read_sql_query("""
                               SELECT *
                               FROM incidents
                               ORDER BY id DESC
                                   LIMIT 200
                               """, conn)

    conn.close()
    return df


# =====================================================
# AUTOMATIC REPORT DATA
# =====================================================

def get_report_data(report_date):

    day_text = report_date.strftime("%Y-%m-%d")
    conn = get_connection()

    readings = pd.read_sql_query("""
                                 SELECT *
                                 FROM sensor_readings
                                 WHERE substr(created_at, 1, 10) = ?
                                 ORDER BY id DESC
                                 """, conn, params=(day_text,))

    incidents = pd.read_sql_query("""
                                  SELECT *
                                  FROM incidents
                                  WHERE substr(created_at, 1, 10) = ?
                                  ORDER BY id DESC
                                  """, conn, params=(day_text,))

    conn.close()

    if "status" not in incidents.columns:
        incidents["status"] = "OPEN"

    return readings, incidents


def create_safety_report_pdf(report_date, readings, incidents):

    buffer = BytesIO()

    document = SimpleDocTemplate(
        buffer,
        pagesize=landscape(A4),
        rightMargin=15 * mm,
        leftMargin=15 * mm,
        topMargin=14 * mm,
        bottomMargin=14 * mm
    )

    styles = getSampleStyleSheet()
    story = []

    story.append(Paragraph(
        "Smart Safety Helmet - Daily Safety Report",
        styles["Title"]
    ))

    story.append(Paragraph(
        "MIT Vishwaprayag University",
        styles["Heading2"]
    ))

    story.append(Paragraph(
        f"Report date: {report_date.strftime('%d %B %Y')}",
        styles["Normal"]
    ))

    story.append(Spacer(1, 8))

    total_readings = len(readings)
    total_incidents = len(incidents)

    open_count = (
        int((incidents["status"] == "OPEN").sum())
        if total_incidents else 0
    )

    acknowledged_count = (
        int((incidents["status"] == "ACKNOWLEDGED").sum())
        if total_incidents else 0
    )

    resolved_count = (
        int((incidents["status"] == "RESOLVED").sum())
        if total_incidents else 0
    )

    summary_data = [
        [
            "Sensor Readings",
            "Total Incidents",
            "Open",
            "Acknowledged",
            "Resolved"
        ],
        [
            str(total_readings),
            str(total_incidents),
            str(open_count),
            str(acknowledged_count),
            str(resolved_count)
        ]
    ]

    summary_table = Table(
        summary_data,
        colWidths=[42 * mm] * 5
    )

    summary_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#1E293B")),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("BACKGROUND", (0, 1), (-1, 1), colors.HexColor("#E8EEF5")),
        ("TEXTCOLOR", (0, 1), (-1, 1), colors.HexColor("#111827")),
        ("GRID", (0, 0), (-1, -1), 0.5, colors.grey),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("PADDING", (0, 0), (-1, -1), 7)
    ]))

    story.append(summary_table)
    story.append(Spacer(1, 12))

    story.append(Paragraph(
        "Worker Sensor Summary",
        styles["Heading2"]
    ))

    if not readings.empty:

        sensor_summary = readings.groupby("worker_id").agg(
            Readings=("id", "count"),
            Avg_Temperature=("temperature", "mean"),
            Max_Temperature=("temperature", "max"),
            Avg_Gas=("gas_level", "mean"),
            Max_Gas=("gas_level", "max")
        ).reset_index()

        sensor_data = [[
            "Worker",
            "Readings",
            "Avg Temp (C)",
            "Max Temp (C)",
            "Avg Gas",
            "Max Gas"
        ]]

        for _, row in sensor_summary.iterrows():

            sensor_data.append([
                str(row["worker_id"]),
                str(int(row["Readings"])),
                f"{row['Avg_Temperature']:.1f}",
                f"{row['Max_Temperature']:.1f}",
                f"{row['Avg_Gas']:.1f}",
                f"{row['Max_Gas']:.1f}"
            ])

        sensor_table = Table(
            sensor_data,
            repeatRows=1
        )

        sensor_table.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#0F766E")),
            ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
            ("GRID", (0, 0), (-1, -1), 0.4, colors.grey),
            ("ROWBACKGROUNDS", (0, 1), (-1, -1), [
                colors.white,
                colors.HexColor("#F1F5F9")
            ]),
            ("ALIGN", (1, 1), (-1, -1), "CENTER"),
            ("PADDING", (0, 0), (-1, -1), 6)
        ]))

        story.append(sensor_table)

    else:
        story.append(Paragraph(
            "No sensor readings were recorded on this date.",
            styles["Normal"]
        ))

    story.append(Spacer(1, 12))

    story.append(Paragraph(
        "Incident Details",
        styles["Heading2"]
    ))

    if not incidents.empty:

        incident_data = [[
            "ID",
            "Worker",
            "Incident",
            "Risk",
            "Status",
            "Reported At"
        ]]

        for _, row in incidents.iterrows():

            incident_data.append([
                str(row.get("id", "")),
                str(row.get("worker_id", "")),
                Paragraph(
                    str(row.get("incident", ""))[:180],
                    styles["BodyText"]
                ),
                str(row.get("risk_level", "")),
                str(row.get("status", "OPEN")),
                str(row.get("created_at", ""))
            ])

        incident_table = Table(
            incident_data,
            repeatRows=1,
            colWidths=[
                12 * mm,
                28 * mm,
                88 * mm,
                24 * mm,
                30 * mm,
                42 * mm
            ]
        )

        incident_table.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#991B1B")),
            ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
            ("GRID", (0, 0), (-1, -1), 0.4, colors.grey),
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("ROWBACKGROUNDS", (0, 1), (-1, -1), [
                colors.white,
                colors.HexColor("#FEF2F2")
            ]),
            ("PADDING", (0, 0), (-1, -1), 5)
        ]))

        story.append(incident_table)

    else:
        story.append(Paragraph(
            "No incidents were recorded on this date.",
            styles["Normal"]
        ))

    story.append(Spacer(1, 10))

    story.append(Paragraph(
        "Note: All sensor readings and safety events in this student project "
        "are simulated. This report is for demonstration purposes and is "
        "not a certified industrial safety record.",
        styles["Italic"]
    ))

    document.build(story)

    buffer.seek(0)
    return buffer.getvalue()


# =====================================================
# WORKER DEFAULT DATA
# =====================================================

def create_worker(worker_id):

    return {
        "worker_id": worker_id,
        "temperature": round(random.uniform(28, 33), 2),
        "humidity": round(random.uniform(40, 60), 2),
        "gas_level": round(random.uniform(100, 180), 2),
        "helmet_status": "Worn",
        "movement": "Normal",
        "tilt_angle": 0.0,
        "risk": "NORMAL",
        "alerts": []
    }


WORKER_IDS = [
    "WORKER_001",
    "WORKER_002",
    "WORKER_003"
]


if "workers" not in st.session_state:

    st.session_state.workers = {
        worker_id: create_worker(worker_id)
        for worker_id in WORKER_IDS
    }


if "selected_worker" not in st.session_state:
    st.session_state.selected_worker = "WORKER_001"

if "last_component_timestamp" not in st.session_state:
    st.session_state.last_component_timestamp = None

if "last_saved_signatures" not in st.session_state:
    st.session_state.last_saved_signatures = {}

if "previous_alerts" not in st.session_state:
    st.session_state.previous_alerts = {}

if "latest_messages" not in st.session_state:

    st.session_state.latest_messages = {
        worker_id: "Worker is ready."
        for worker_id in WORKER_IDS
    }

if "latest_message_types" not in st.session_state:

    st.session_state.latest_message_types = {
        worker_id: "normal"
        for worker_id in WORKER_IDS
    }

if "auto_sensor" not in st.session_state:
    st.session_state.auto_sensor = True


# =====================================================
# SAFETY DETECTION
# =====================================================

def analyze_safety(data):

    alerts = []

    if data["helmet_status"] == "Removed":
        alerts.append("Helmet removed: PPE compliance warning.")

    if data["temperature"] >= 40:
        alerts.append("High temperature detected.")

    if data["gas_level"] >= 400:
        alerts.append("High gas level detected.")

    if data["movement"] == "Possible Fall":
        alerts.append("Possible worker fall detected.")

    elif data["movement"] in ["Tilt Left", "Tilt Right"]:
        alerts.append("Worker tilt detected.")

    if data["movement"] == "Possible Fall":
        risk = "EMERGENCY"

    elif (
            data["gas_level"] >= 400
            or data["temperature"] >= 40
    ):
        risk = "HIGH RISK"

    elif (
            data["helmet_status"] == "Removed"
            or data["movement"] in ["Tilt Left", "Tilt Right"]
    ):
        risk = "CAUTION"

    else:
        risk = "NORMAL"

    return risk, alerts


def update_worker_safety(worker_id):

    data = st.session_state.workers[worker_id]

    risk, alerts = analyze_safety(data)

    data["risk"] = risk
    data["alerts"] = alerts

    st.session_state.workers[worker_id] = data


# =====================================================
# AUTOMATIC SENSOR SIMULATION
# =====================================================

def update_all_worker_sensors():

    for worker_id in WORKER_IDS:

        data = st.session_state.workers[worker_id].copy()

        data["temperature"] = round(
            max(
                20,
                min(
                    50,
                    data["temperature"] + random.uniform(-1, 1)
                )
            ),
            2
        )

        data["humidity"] = round(
            max(
                20,
                min(
                    90,
                    data["humidity"] + random.uniform(-2, 2)
                )
            ),
            2
        )

        data["gas_level"] = round(
            max(
                50,
                min(
                    600,
                    data["gas_level"] + random.uniform(-12, 12)
                )
            ),
            2
        )

        st.session_state.workers[worker_id] = data

        update_worker_safety(worker_id)


# =====================================================
# SAVE WORKER DATA
# =====================================================

def save_worker_data(worker_id):

    data = st.session_state.workers[worker_id]

    signature = (
        data["temperature"],
        data["humidity"],
        data["gas_level"],
        data["helmet_status"],
        data["movement"],
        data["tilt_angle"],
        data["risk"]
    )

    if (
            signature !=
            st.session_state.last_saved_signatures.get(worker_id)
    ):

        save_reading(data)

        st.session_state.last_saved_signatures[worker_id] = signature

    current_alerts = set(data["alerts"])

    previous_alerts = set(
        st.session_state.previous_alerts.get(worker_id, [])
    )

    new_alerts = current_alerts - previous_alerts

    for alert in new_alerts:
        save_incident(worker_id, alert, data["risk"])

    st.session_state.previous_alerts[worker_id] = data["alerts"].copy()


# =====================================================
# CUSTOM CSS
# =====================================================

st.markdown("""
<style>

.stApp {
    background-color: #101827;
    color: white;
}

h1 {
    color: #38BDF8 !important;
}

h2, h3 {
    color: #E2E8F0 !important;
}

div[data-testid="stMetric"] {
    background-color: #1E293B;
    padding: 16px;
    border-radius: 12px;
    border: 1px solid #334155;
}

section[data-testid="stSidebar"] {
    background-color: #172033;
}

</style>
""", unsafe_allow_html=True)


# =====================================================
# HEADER
# =====================================================

st.title("⛑️ Smart Safety Helmet Monitoring System")

st.subheader("MIT Vishwaprayag University")

st.caption(
    "Multiple Worker Monitoring | Interactive 3D | Software-only IoT Simulation"
)

st.info(
    "All worker sensor readings and safety events are simulated."
)


# =====================================================
# SIDEBAR
# =====================================================

st.sidebar.title("🏗️ Site Control Panel")

selected_worker = st.sidebar.selectbox(
    "Select Worker",
    WORKER_IDS,
    index=WORKER_IDS.index(
        st.session_state.selected_worker
    )
)

st.session_state.selected_worker = selected_worker

st.session_state.auto_sensor = st.sidebar.toggle(
    "Automatic Sensor Updates",
    value=st.session_state.auto_sensor
)

st.sidebar.caption(
    "When enabled, all three workers receive new simulated "
    "sensor readings every three seconds."
)

if st.session_state.auto_sensor:

    st_autorefresh(
        interval=3000,
        limit=None,
        key="multi_worker_refresh"
    )

    update_all_worker_sensors()


# =====================================================
# UPDATE SAFETY AND SAVE ALL WORKERS
# =====================================================

for worker_id in WORKER_IDS:

    update_worker_safety(worker_id)
    save_worker_data(worker_id)


# =====================================================
# ALL WORKER OVERVIEW
# =====================================================

st.divider()

st.header("👷 Site Worker Overview")

overview_columns = st.columns(3)

for index, worker_id in enumerate(WORKER_IDS):

    data = st.session_state.workers[worker_id]

    with overview_columns[index]:

        st.subheader(worker_id)

        st.metric(
            "Temperature",
            f'{data["temperature"]} °C'
        )

        st.metric(
            "Helmet",
            data["helmet_status"]
        )

        if data["risk"] == "EMERGENCY":
            st.error("EMERGENCY")

        elif data["risk"] == "HIGH RISK":
            st.error("HIGH RISK")

        elif data["risk"] == "CAUTION":
            st.warning("CAUTION")

        else:
            st.success("NORMAL")

        if st.button(
                f"Monitor {worker_id}",
                key=f"monitor_{worker_id}",
                use_container_width=True
        ):

            st.session_state.selected_worker = worker_id
            st.rerun()


# =====================================================
# INTERACTIVE 3D WORKER
# =====================================================

worker_id = st.session_state.selected_worker
data = st.session_state.workers[worker_id]

st.divider()

st.header(f"🧍 Interactive 3D Worker: {worker_id}")

st.caption(
    "Use the controls in the 3D view to simulate helmet removal, "
    "worker movement and falls."
)

component_action = smart_helmet(
    key=f"smart_helmet_{worker_id}"
)


# =====================================================
# PROCESS 3D COMPONENT ACTIONS
# =====================================================

if isinstance(component_action, dict):

    timestamp = component_action.get("timestamp")
    action = component_action.get("action")

    if (
            timestamp is not None
            and timestamp != st.session_state.last_component_timestamp
    ):

        st.session_state.last_component_timestamp = timestamp

        data = st.session_state.workers[worker_id].copy()

        message = "Worker is ready."
        message_type = "normal"

        if action == "remove":

            data["helmet_status"] = "Removed"
            data["movement"] = "Normal"
            data["tilt_angle"] = 0

            message = "ALERT: HELMET REMOVED!"
            message_type = "warning"

        elif action == "wear":

            data["helmet_status"] = "Worn"

            message = "NORMAL: HELMET WORN."

        elif action == "left":

            data["movement"] = "Tilt Left"
            data["tilt_angle"] = 25

            message = "CAUTION: WORKER TILTED LEFT."
            message_type = "warning"

        elif action == "right":

            data["movement"] = "Tilt Right"
            data["tilt_angle"] = -25

            message = "CAUTION: WORKER TILTED RIGHT."
            message_type = "warning"

        elif action == "fall":

            data["movement"] = "Possible Fall"
            data["tilt_angle"] = 90

            message = "EMERGENCY: POSSIBLE WORKER FALL!"
            message_type = "emergency"

        elif action == "mouse_tilt":

            tilt = float(component_action.get("tilt", 0))

            data["tilt_angle"] = tilt

            if tilt >= 20:

                data["movement"] = "Tilt Left"
                message = f"CAUTION: TILT {tilt:.1f}°"
                message_type = "warning"

            elif tilt <= -20:

                data["movement"] = "Tilt Right"
                message = f"CAUTION: TILT {tilt:.1f}°"
                message_type = "warning"

            else:

                data["movement"] = "Normal"
                message = f"Worker tilt: {tilt:.1f}°"

        elif action == "reset":

            data = create_worker(worker_id)

            message = "NORMAL: WORKER RESET."

        st.session_state.workers[worker_id] = data

        st.session_state.latest_messages[worker_id] = message
        st.session_state.latest_message_types[worker_id] = message_type

        update_worker_safety(worker_id)
        save_worker_data(worker_id)


# Refresh selected worker data after processing actions
data = st.session_state.workers[worker_id]


# =====================================================
# SELECTED WORKER ALERT
# =====================================================

st.divider()

st.header("🔔 Selected Worker Alert")

message = st.session_state.latest_messages[worker_id]
message_type = st.session_state.latest_message_types[worker_id]

if message_type == "emergency":
    st.error(message)

elif message_type == "warning":
    st.warning(message)

else:
    st.success(message)


# =====================================================
# WORKER INFORMATION
# =====================================================

st.header("Worker Information")

c1, c2, c3, c4 = st.columns(4)

c1.metric("Worker ID", data["worker_id"])
c2.metric("Helmet Status", data["helmet_status"])
c3.metric("Movement", data["movement"])
c4.metric("Tilt Angle", f'{data["tilt_angle"]:.1f}°')


# =====================================================
# SENSOR MONITORING
# =====================================================

st.divider()

st.header("📊 Selected Worker Sensor Monitoring")

c1, c2, c3 = st.columns(3)

c1.metric(
    "Temperature",
    f'{data["temperature"]} °C'
)

c2.metric(
    "Humidity",
    f'{data["humidity"]} %'
)

c3.metric(
    "Gas Level",
    data["gas_level"]
)


# =====================================================
# SAFETY STATUS
# =====================================================

st.divider()

st.header("🛡️ Worker Safety Status")

if data["risk"] == "EMERGENCY":

    st.error("🚨 EMERGENCY: Possible worker fall detected!")

elif data["risk"] == "HIGH RISK":

    st.error("⚠️ HIGH RISK: Environmental hazard detected!")

elif data["risk"] == "CAUTION":

    st.warning("⚠️ CAUTION: Worker safety condition needs attention.")

else:

    st.success("✅ NORMAL: No detected hazards.")


# =====================================================
# CURRENT ALERTS
# =====================================================

st.header("🚨 Current Worker Alerts")

if data["alerts"]:

    for alert in data["alerts"]:
        st.warning(alert)

else:

    st.success("No hazards detected for this worker.")


# =====================================================
# MANUAL HAZARD TESTING
# =====================================================

st.divider()

st.header("🎮 Manual Safety Testing")

hazard = st.selectbox(
    "Choose a test scenario",
    [
        "Normal Working",
        "High Temperature",
        "High Gas Level",
        "Multiple Hazards"
    ]
)

if st.button("Run Selected Safety Test"):

    data = st.session_state.workers[worker_id].copy()

    if hazard == "Normal Working":

        data["temperature"] = 30
        data["humidity"] = 50
        data["gas_level"] = 150
        data["helmet_status"] = "Worn"
        data["movement"] = "Normal"
        data["tilt_angle"] = 0

    elif hazard == "High Temperature":

        data["temperature"] = 45

    elif hazard == "High Gas Level":

        data["gas_level"] = 450

    elif hazard == "Multiple Hazards":

        data["temperature"] = 45
        data["gas_level"] = 450
        data["helmet_status"] = "Removed"

    st.session_state.workers[worker_id] = data

    st.session_state.latest_messages[worker_id] = (
        f"Simulated test activated: {hazard}"
    )

    st.session_state.latest_message_types[worker_id] = "warning"

    update_worker_safety(worker_id)
    save_worker_data(worker_id)

    st.rerun()


# =====================================================
# ALL WORKER COMPARISON
# =====================================================

st.divider()

st.header("📊 All Worker Safety Comparison")

comparison = []

for wid in WORKER_IDS:

    item = st.session_state.workers[wid]

    comparison.append({
        "Worker": wid,
        "Temperature": item["temperature"],
        "Humidity": item["humidity"],
        "Gas Level": item["gas_level"],
        "Helmet": item["helmet_status"],
        "Movement": item["movement"],
        "Risk": item["risk"]
    })

comparison_df = pd.DataFrame(comparison)

st.dataframe(
    comparison_df,
    use_container_width=True,
    hide_index=True
)


# =====================================================
# SELECTED WORKER SENSOR HISTORY
# =====================================================

st.divider()

st.header(f"📈 Sensor History: {worker_id}")

readings = get_readings(worker_id)

if not readings.empty:

    readings = readings.sort_values("id")

    chart1, chart2 = st.columns(2)

    with chart1:

        fig_temp = px.line(
            readings,
            x="id",
            y="temperature",
            title="Temperature History",
            markers=True
        )

        st.plotly_chart(
            fig_temp,
            use_container_width=True
        )

    with chart2:

        fig_gas = px.line(
            readings,
            x="id",
            y="gas_level",
            title="Gas Level History",
            markers=True
        )

        st.plotly_chart(
            fig_gas,
            use_container_width=True
        )

    st.dataframe(
        readings.head(20),
        use_container_width=True,
        hide_index=True
    )

else:

    st.info("No sensor history available for this worker.")


# =====================================================
# EMERGENCY ALERT MANAGEMENT
# =====================================================

st.divider()

st.header("🚨 Emergency Alert Management")

st.caption(
    "Alerts are displayed in a table with a maximum of 10 alerts per page. "
    "Acknowledge an alert after reviewing it and resolve it after it is handled."
)

incidents = get_incidents()

if not incidents.empty:

    if "status" not in incidents.columns:
        incidents["status"] = "OPEN"

    active_incidents = incidents[
        incidents["status"].isin(["OPEN", "ACKNOWLEDGED"])
    ].copy()

    open_count = int(
        (active_incidents["status"] == "OPEN").sum()
    )

    acknowledged_count = int(
        (active_incidents["status"] == "ACKNOWLEDGED").sum()
    )

    resolved_count = int(
        (incidents["status"] == "RESOLVED").sum()
    )

    alert_col1, alert_col2, alert_col3 = st.columns(3)

    alert_col1.metric("Open Alerts", open_count)
    alert_col2.metric("Acknowledged", acknowledged_count)
    alert_col3.metric("Resolved Incidents", resolved_count)

    # ACTIVE ALERTS TABLE
    if not active_incidents.empty:

        st.subheader("Active Alerts")

        active_display = active_incidents[[
            "id",
            "worker_id",
            "incident",
            "risk_level",
            "created_at",
            "status"
        ]].copy()

        active_display.columns = [
            "Alert ID",
            "Worker",
            "Alert Description",
            "Risk Level",
            "Reported At",
            "Status"
        ]

        active_pages = max(
            1,
            (len(active_display) + 9) // 10
        )

        active_page_col, active_info_col = st.columns([1, 3])

        active_page = active_page_col.number_input(
            "Active alert page",
            min_value=1,
            max_value=active_pages,
            value=1,
            step=1,
            key="active_alert_page"
        )

        active_info_col.caption(
            f"Showing up to 10 alerts per page · "
            f"{len(active_display)} active alerts total"
        )

        active_start = (int(active_page) - 1) * 10

        st.dataframe(
            active_display.iloc[active_start:active_start + 10],
            use_container_width=True,
            hide_index=True
        )

        # ACKNOWLEDGE AND RESOLVE
        st.markdown("**Manage an active alert**")

        active_ids = active_incidents["id"].astype(int).tolist()

        selected_alert_id = st.selectbox(
            "Select alert ID",
            active_ids,
            format_func=lambda alert_id: (
                f"#{alert_id} — "
                f"{active_incidents.loc[active_incidents['id'] == alert_id, 'worker_id'].iloc[0]} — "
                f"{active_incidents.loc[active_incidents['id'] == alert_id, 'incident'].iloc[0]}"
            ),
            key="selected_alert_to_manage"
        )

        selected_alert = active_incidents[
            active_incidents["id"] == selected_alert_id
            ].iloc[0]

        manage_col1, manage_col2 = st.columns(2)

        if selected_alert["status"] == "OPEN":

            if manage_col1.button(
                    "Acknowledge Selected Alert",
                    key="acknowledge_selected_alert",
                    use_container_width=True
            ):

                update_incident_status(
                    int(selected_alert_id),
                    "ACKNOWLEDGED"
                )

                st.success(
                    f"Alert #{selected_alert_id} acknowledged."
                )

                st.rerun()

        else:

            manage_col1.button(
                "Already Acknowledged",
                disabled=True,
                key="already_acknowledged_alert",
                use_container_width=True
            )

        if manage_col2.button(
                "Resolve Selected Alert",
                key="resolve_selected_alert",
                use_container_width=True
        ):

            update_incident_status(
                int(selected_alert_id),
                "RESOLVED"
            )

            st.success(
                f"Alert #{selected_alert_id} resolved."
            )

            st.rerun()

    else:

        st.success(
            "There are no active alerts. All incidents are handled."
        )

    # COMPLETE INCIDENT HISTORY
    st.subheader("Complete Incident History")

    history_display = incidents[[
        "id",
        "worker_id",
        "incident",
        "risk_level",
        "created_at",
        "status"
    ]].copy()

    history_display.columns = [
        "Alert ID",
        "Worker",
        "Alert Description",
        "Risk Level",
        "Reported At",
        "Status"
    ]

    history_pages = max(
        1,
        (len(history_display) + 9) // 10
    )

    history_page_col, history_info_col = st.columns([1, 3])

    history_page = history_page_col.number_input(
        "History page",
        min_value=1,
        max_value=history_pages,
        value=1,
        step=1,
        key="incident_history_page"
    )

    history_info_col.caption(
        f"Showing up to 10 incidents per page · "
        f"{len(history_display)} incidents total"
    )

    history_start = (int(history_page) - 1) * 10

    st.dataframe(
        history_display.iloc[history_start:history_start + 10],
        use_container_width=True,
        hide_index=True
    )

else:

    st.info(
        "No incidents recorded yet. Simulate a worker fall "
        "to test the emergency alert system."
    )


# =====================================================
# AUTOMATIC SAFETY REPORTS
# =====================================================

st.divider()

st.header("📑 Automatic Safety Reports")

st.caption(
    "A daily report is prepared from saved SQLite sensor readings "
    "and incident records. Select a date and download the report."
)

report_date = st.date_input(
    "Select report date",
    value=date.today(),
    key="safety_report_date"
)

report_readings, report_incidents = get_report_data(report_date)

report_total_incidents = len(report_incidents)

report_open = (
    int((report_incidents["status"] == "OPEN").sum())
    if report_total_incidents else 0
)

report_acknowledged = (
    int((report_incidents["status"] == "ACKNOWLEDGED").sum())
    if report_total_incidents else 0
)

report_resolved = (
    int((report_incidents["status"] == "RESOLVED").sum())
    if report_total_incidents else 0
)

report_metric1, report_metric2, report_metric3, report_metric4 = st.columns(4)

report_metric1.metric(
    "Sensor Readings",
    len(report_readings)
)

report_metric2.metric(
    "Total Incidents",
    report_total_incidents
)

report_metric3.metric(
    "Open Incidents",
    report_open
)

report_metric4.metric(
    "Resolved Incidents",
    report_resolved
)


# DAILY WORKER SUMMARY
if not report_readings.empty:

    st.subheader("Daily Worker Summary")

    daily_worker_summary = report_readings.groupby("worker_id").agg(
        Total_Readings=("id", "count"),
        Average_Temperature=("temperature", "mean"),
        Maximum_Temperature=("temperature", "max"),
        Average_Gas_Level=("gas_level", "mean"),
        Maximum_Gas_Level=("gas_level", "max")
    ).reset_index()

    daily_worker_summary["Average_Temperature"] = (
        daily_worker_summary["Average_Temperature"].round(2)
    )

    daily_worker_summary["Maximum_Temperature"] = (
        daily_worker_summary["Maximum_Temperature"].round(2)
    )

    daily_worker_summary["Average_Gas_Level"] = (
        daily_worker_summary["Average_Gas_Level"].round(2)
    )

    daily_worker_summary["Maximum_Gas_Level"] = (
        daily_worker_summary["Maximum_Gas_Level"].round(2)
    )

    st.dataframe(
        daily_worker_summary,
        use_container_width=True,
        hide_index=True
    )

else:

    st.info(
        "No sensor readings are available for the selected date. "
        "The report can still be downloaded."
    )


# DAILY INCIDENT SUMMARY
if not report_incidents.empty:

    st.subheader("Daily Incident Summary")

    report_incident_display = report_incidents[[
        "id",
        "worker_id",
        "incident",
        "risk_level",
        "status",
        "created_at"
    ]].copy()

    report_incident_display.columns = [
        "Alert ID",
        "Worker",
        "Incident",
        "Risk Level",
        "Status",
        "Reported At"
    ]

    st.dataframe(
        report_incident_display,
        use_container_width=True,
        hide_index=True
    )


# DOWNLOAD REPORTS
pdf_report = create_safety_report_pdf(
    report_date,
    report_readings,
    report_incidents
)

report_csv = report_incidents.to_csv(
    index=False
).encode("utf-8-sig")

report_download_col1, report_download_col2 = st.columns(2)

report_download_col1.download_button(
    "📄 Download Daily PDF Report",
    data=pdf_report,
    file_name=f"safety_report_{report_date.strftime('%Y_%m_%d')}.pdf",
    mime="application/pdf",
    use_container_width=True
)

report_download_col2.download_button(
    "📊 Download Incident CSV",
    data=report_csv,
    file_name=f"safety_incidents_{report_date.strftime('%Y_%m_%d')}.csv",
    mime="text/csv",
    use_container_width=True
)


# =====================================================
# PROJECT INFORMATION
# =====================================================

st.divider()

st.header("ℹ️ Project Information")

c1, c2 = st.columns(2)

with c1:

    st.markdown("""
    **Project:** Smart Safety Helmet

    **Institution:** MIT Vishwaprayag University

    **Implementation:** Software-only IoT simulation

    **Workers:** 3 simulated workers
    """)

with c2:

    st.markdown("""
    **3D Model:** Three.js

    **Dashboard:** Streamlit

    **Database:** SQLite

    **Charts:** Plotly
    """)


# =====================================================
# FOOTER
# =====================================================

st.divider()

st.caption(
    "All readings, worker states and safety events are simulated. "
    "This is a student demonstration prototype, not a certified "
    "industrial safety system."
)
