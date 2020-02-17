// Write your solution in this file!

const driver = {};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function updateDriverWithKeyAndValue(driver, key, value){
  const newObj = Object.assign({},driver)
  newObj[key] = value;
  return newObj
}

const returnedTarget = Object.assign(target, source);