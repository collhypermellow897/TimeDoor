class Car {
    constructor(type, color) {
      this.type = type;
      this.color = color;
      this.display = function () {
        console.log(this.color + " " + this.type);
      };
    }
  } //create object
  var car1 = new Car("Tesla", "White");
  var car2 = new Car("BMW", "Grey");
  var car3 = new Car("Mercedes", "Black"); //print
  
  car3.display();

class student {
  constructor(name,hobby) {
    this.name = name
    this.hobby = hobby
    this.display = function () {
      console.log("Hi, my name is "+ this.name + " And like " + this.hobby)
    }
  }
}

var student1 = new student("Andra", "reading")
var student2 = new student("Bella", "cooking")
var student3 = new student("Caka", "gaming")
var student4 = new student("Davina", "coding")
var student5 = new student("Evan", "basketvball")

student1.display(); //?