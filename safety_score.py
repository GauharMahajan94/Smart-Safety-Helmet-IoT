

def classify_risk(data, hazards, fall_detected):

    if fall_detected:
        return "EMERGENCY"

    if len(hazards) >= 2:
        return "HIGH RISK"

    if len(hazards) == 1:
        return "CAUTION"

    return "NORMAL"
