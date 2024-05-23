def calculateIntervalMMC(min: int, max: int) -> int:
    result = min
    for i in range(min+1, max+1):
        result = calculateMMC(result, i)
    return result

def calculateMMC(min: int, max: int) -> int:
    return abs(min*max) // calculateMDC(min, max)
    
def calculateMDC(min: int, max: int) -> int:
    while max != 0:
        rest = min % max
        min = max
        max = rest
    return min