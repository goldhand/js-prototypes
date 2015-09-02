function Car() {  // constructor
  this.driverCount = 0;  // this refers to the newly created object
}

Car.prototype.incrementDriverCount = function() {
  // increments the driverCount of the instance of the new object invoking this method
  this.driverCount++;  // this still refers to the object who is invoking this function
  return this.driverCount;
};

var myCar = new Car();
var myOtherCar = new Car();
var myWeekendCar = new Car();