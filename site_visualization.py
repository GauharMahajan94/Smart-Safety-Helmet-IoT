
import streamlit as st
import plotly.graph_objects as go


def show_construction_site(workers):

    fig = go.Figure()

    # ---------------------------------------
    # CONSTRUCTION SITE GROUND
    # ---------------------------------------

    fig.add_trace(go.Mesh3d(
        x=[0, 100, 100, 0],
        y=[0, 0, 70, 70],
        z=[0, 0, 0, 0],
        i=[0, 0],
        j=[1, 2],
        k=[2, 3],
        color="#334155",
        opacity=0.8,
        name="Construction Ground",
        hoverinfo="skip"
    ))

    # ---------------------------------------
    # BUILDING CREATION FUNCTION
    # ---------------------------------------

    def add_building(x, y, width, depth, floors, name):

        floor_height = 8

        for floor in range(floors):

            z = floor * floor_height

            fig.add_trace(go.Mesh3d(
                x=[
                    x, x + width, x + width, x,
                    x, x + width, x + width, x
                ],
                y=[
                    y, y, y + depth, y + depth,
                    y, y, y + depth, y + depth
                ],
                z=[
                    z, z, z, z,
                    z + floor_height,
                    z + floor_height,
                    z + floor_height,
                    z + floor_height
                ],
                i=[
                    0, 0, 0, 1, 1, 2, 2, 3, 4, 4, 4, 5
                ],
                j=[
                    1, 2, 3, 2, 5, 3, 6, 0, 5, 6, 7, 6
                ],
                k=[
                    2, 3, 1, 5, 6, 6, 7, 4, 6, 7, 5, 4
                ],
                color="#64748B",
                opacity=0.85,
                name=f"{name} Floor {floor + 1}",
                showlegend=(floor == 0),
                hovertemplate=(
                    f"{name}<br>"
                    f"Floor: {floor + 1}<extra></extra>"
                )
            ))

    # ---------------------------------------
    # BUILDINGS
    # ---------------------------------------

    add_building(10, 10, 25, 20, 3, "Building A")
    add_building(55, 10, 25, 20, 2, "Building B")
    add_building(35, 45, 25, 15, 2, "Building C")

    # ---------------------------------------
    # SAFETY ZONES
    # ---------------------------------------

    zones = [
        {
            "name": "Safe Zone",
            "x": 5,
            "y": 45,
            "color": "green"
        },
        {
            "name": "Caution Zone",
            "x": 70,
            "y": 45,
            "color": "yellow"
        },
        {
            "name": "Danger Zone",
            "x": 85,
            "y": 5,
            "color": "red"
        }
    ]

    for zone in zones:

        fig.add_trace(go.Scatter3d(
            x=[zone["x"]],
            y=[zone["y"]],
            z=[0.5],
            mode="markers+text",
            marker=dict(
                size=16,
                color=zone["color"],
                opacity=0.8
            ),
            text=[zone["name"]],
            textposition="top center",
            name=zone["name"]
        ))

    # ---------------------------------------
    # WORKER LOCATIONS
    # ---------------------------------------

    positions = {
        "WORKER_001": [5, 15, 3],
        "WORKER_002": [45, 20, 3],
        "WORKER_003": [85, 50, 3]
    }

    worker_colors = {
        "NORMAL": "green",
        "CAUTION": "yellow",
        "HIGH RISK": "orange",
        "EMERGENCY": "red"
    }

    for worker_id, data in workers.items():

        x, y, z = positions[worker_id]

        risk = data["risk"]

        color = worker_colors.get(risk, "green")

        fig.add_trace(go.Scatter3d(
            x=[x],
            y=[y],
            z=[z],
            mode="markers+text",
            marker=dict(
                size=13,
                color=color,
                symbol="diamond"
            ),
            text=[worker_id],
            textposition="top center",
            name=f"{worker_id} - {risk}",
            hovertemplate=(
                f"{worker_id}<br>"
                f"Risk: {risk}<br>"
                f"Helmet: {data['helmet_status']}<br>"
                f"Temperature: {data['temperature']} °C"
                "<extra></extra>"
            )
        ))

    # ---------------------------------------
    # CHART DESIGN
    # ---------------------------------------

    fig.update_layout(
        title="3D Construction Site Digital Twin",
        height=650,
        paper_bgcolor="#101827",
        plot_bgcolor="#101827",
        font=dict(color="white"),
        scene=dict(
            bgcolor="#101827",
            xaxis=dict(
                title="Site Length",
                backgroundcolor="#172033",
                gridcolor="#334155",
                range=[0, 100]
            ),
            yaxis=dict(
                title="Site Width",
                backgroundcolor="#172033",
                gridcolor="#334155",
                range=[0, 70]
            ),
            zaxis=dict(
                title="Building Height",
                backgroundcolor="#172033",
                gridcolor="#334155",
                range=[0, 35]
            ),
            aspectmode="manual",
            aspectratio=dict(x=1.4, y=1, z=0.55)
        ),
        legend=dict(
            bgcolor="#172033"
        ),
        margin=dict(l=0, r=0, t=60, b=0)
    )

    st.plotly_chart(
        fig,
        use_container_width=True,
        key="construction_site_3d"
    )
