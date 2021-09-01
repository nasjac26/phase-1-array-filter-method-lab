// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(driverNamesArray, inputString) {
    return driverNamesArray.filter
    (driverName => driverName.toUpperCase() == inputString.toUpperCase())

}

findMatching(drivers)



function fuzzyMatch(driverNamesArray, inputString) {
    return driverNamesArray.filter(drivername => drivername.charAt(0) ===
    inputString.charAt(0))
}

function matchName(driverNamesArrayobj, inputString) {
    return driverNamesArrayobj.filter(driverName => driverName.name === inputString)
}



