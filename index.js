// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (array, string) {
    let newNames = array.filter (driverName => driverName.toUpperCase() === string.toUpperCase())
    return newNames
  }


  function fuzzyMatch (array, char) {
    let fuzzyDriver = array.filter (driver => driver.charAt(0) === char.charAt(0))
    return fuzzyDriver
  }


  function matchName (array, string) {
    return array.filter (array => array.name === string)
  }  

