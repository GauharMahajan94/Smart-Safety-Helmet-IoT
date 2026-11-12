
SCENARIOS = {
    "Normal Working": {
        "temperature": 30,
        "humidity": 50,
        "gas_level": 150,
        "helmet_status": "Worn",
        "movement": "Normal"
    },

    "Helmet Removed": {
        "temperature": 30,
        "humidity": 50,
        "gas_level": 150,
        "helmet_status": "Removed",
        "movement": "Normal"
    },

    "High Temperature": {
        "temperature": 42,
        "humidity": 50,
        "gas_level": 150,
        "helmet_status": "Worn",
        "movement": "Normal"
    },

    "Gas Hazard": {
        "temperature": 30,
        "humidity": 50,
        "gas_level": 450,
        "helmet_status": "Worn",
        "movement": "Normal"
    },

    "Possible Fall": {
        "temperature": 30,
        "humidity": 50,
        "gas_level": 150,
        "helmet_status": "Worn",
        "movement": "Sudden Movement"
    },

    "Multiple Hazards": {
        "temperature": 42,
        "humidity": 50,
        "gas_level": 450,
        "helmet_status": "Removed",
        "movement": "Normal"
    }
}
