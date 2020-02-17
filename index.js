// Write your solution in this file!

const driver = {};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function updateDriverWithKeyAndValue(driver, key, value){
  const newObj = Object.assign({}, driver, { [key]: value } )
  return newObj
}

