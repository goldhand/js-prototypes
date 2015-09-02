function myCar() {}  // create a new car function object

myCar.driverCount = 0;  // add a property to keep track of how many drivers are in myCar

myCar.incrementDriverCount = function() {
  // increment the driver count of myCar by 1
  myCar.driverCount++;
  return myCar.driverCount;  // return the driverCount of myCar for convenience
};

function myOtherCar() {}  // create a new car function object

myOtherCar.driverCount = 0;

myOtherCar.incrementDriverCount = function() {
  myOtherCar.driverCount++;
  return myOtherCar.driverCount;
};

function myWeekendCar() {}

myWeekendCar.driverCount = 0;

myWeekendCar.incrementDriverCount = function() {
  myWeekendCar.driverCount++;
  return myWeekendCar.driverCount;
};


// tests
// after you refactor you should still get these outputs
console.log(myCar.driverCount, myOtherCar.driverCount, myWeekendCar.driverCount);  // 0, 0, 0

myCar.incrementDriverCount();  // 1
myCar.incrementDriverCount();  // 2
myOtherCar.incrementDriverCount();  // 1
myWeekendCar.incrementDriverCount();  // 1