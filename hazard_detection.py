
def detect_hazards(data):

    hazards = []

    if data["temperature"] >= 40:
        hazards.append("High Temperature Detected")

    if data["gas_level"] >= 400:
        hazards.append("High Gas Level Detected")

    if data["helmet_status"] == "Removed":
        hazards.append("Helmet Removed")

    return hazards
