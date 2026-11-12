
import sqlite3
from pathlib import Path

DB_PATH = Path(__file__).parent / "data" / "safety_helmet.db"


def get_connection():
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    return sqlite3.connect(DB_PATH)


def create_tables():
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
                   CREATE TABLE IF NOT EXISTS workers (
                                                          worker_id TEXT PRIMARY KEY,
                                                          worker_name TEXT
                   )
                   """)

    cursor.execute("""
                   CREATE TABLE IF NOT EXISTS sensor_readings (
                                                                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                                                                  worker_id TEXT,
                                                                  temperature REAL,
                                                                  humidity REAL,
                                                                  gas_level REAL,
                                                                  helmet_status TEXT,
                                                                  movement TEXT,
                                                                  risk_level TEXT,
                                                                  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                   )
                   """)

    cursor.execute("""
                   CREATE TABLE IF NOT EXISTS incidents (
                                                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                                                            worker_id TEXT,
                                                            incident_type TEXT,
                                                            risk_level TEXT,
                                                            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                   )
                   """)

    conn.commit()
    conn.close()


def save_reading(data, risk):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
                   INSERT OR IGNORE INTO workers
        (worker_id, worker_name)
        VALUES (?, ?)
                   """, (data["worker_id"], "Demo Worker"))

    cursor.execute("""
                   INSERT INTO sensor_readings
                   (worker_id, temperature, humidity, gas_level,
                    helmet_status, movement, risk_level)
                   VALUES (?, ?, ?, ?, ?, ?, ?)
                   """, (
                       data["worker_id"],
                       data["temperature"],
                       data["humidity"],
                       data["gas_level"],
                       data["helmet_status"],
                       data["movement"],
                       risk
                   ))

    conn.commit()
    conn.close()


def save_incident(worker_id, incident, risk):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
                   INSERT INTO incidents
                       (worker_id, incident_type, risk_level)
                   VALUES (?, ?, ?)
                   """, (worker_id, incident, risk))

    conn.commit()
    conn.close()


def get_readings():
    conn = get_connection()

    cursor = conn.cursor()
    cursor.execute("""
                   SELECT id, temperature, humidity, gas_level,
                          risk_level, created_at
                   FROM sensor_readings
                   ORDER BY id DESC
                       LIMIT 50
                   """)

    rows = cursor.fetchall()
    conn.close()

    return rows


def get_incidents():
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
                   SELECT worker_id, incident_type, risk_level, created_at
                   FROM incidents
                   ORDER BY id DESC
                       LIMIT 50
                   """)

    rows = cursor.fetchall()
    conn.close()

    return rows
