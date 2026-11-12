
import random

def get_sensor_data():
    return {
        "worker_id": "WORKER_001",
        "temperature": round(random.uniform(25, 45), 2),
        "humidity": round(random.uniform(30, 80), 2),
        "gas_level": round(random.uniform(100, 500), 2),
        "helmet_status": random.choice(["Worn", "Removed"]),
        "movement": random.choice(["Normal", "Sudden Movement"])
    }
