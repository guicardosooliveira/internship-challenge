def calculateIntervalMMC(min: int, max: int) -> int:
    result = min
    for i in range(min+1, max+1):
        result = calculateMMC(result, i)
    return result

def calculateMMC(min: int, max: int) -> int:
    return abs(min*max) // calculateMDC(min, max)

def calculateMDC(min: int, max: int) -> int:
    if max == 0:
        return min
    else:
        return calculateMDC(max, (min % max))