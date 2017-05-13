/**
 * OOPs Terminology First let us see few terminologies that we use in
 * object-oriented programming.
 * 
 * Class: Defines the characteristics of the Object.
 * 
 * Constructor: A method called at the moment of instantiation.
 * 
 * Object: An Instance of a Class.
 * 
 * Method: An Object capability as walk.
 * 
 * Property: An Object characteristic, such as color.
 * 
 * Inheritance: A Class can inherit characteristics from another Class.
 * 
 * Encapsulation: A Class defines only the characteristics of the Object, a
 * method defines only how the method executes.
 * 
 * Abstraction: The conjunction of complex inheritance, methods, properties of
 * an Object must be able to simulate a reality model.
 * 
 * 
 * Polymorphism: Different Classes might define the same method or property.
 */

'use strict'

// Below code defines the Car class
// There is no need to define the constructor explicitly in JS. The function
// defined for the class acts as a Constructor
function CarOne() {
	console.log('CarOne class instantiated : ',this);
	this.speed = 30;
}

//Below code creates 2 instances (objects) of the Car class
//var car1 = new CarOne();
//var car2 = new CarOne();

//Accessing the property speed of both the objects
//console.log('car1 speed = ',car1.speed);
//console.log('car2 speed = ',car2.speed);

// For inheritance to work correctly, the Properties should be set in the prototype property of the class (function)
// Thus the above example becomes as below
function Car() {
	console.log('Car class instantiated : ',this);
}

//Defining a method to set the name of the car in the Car class
//1. Define the setter method that sets the name property of the Car class
//2. Declare the property 'name' of the Car class using the prototype object model.

//Below is the optimal approach to define the Class members
Car.prototype.name = 'Car Name';

//Defining methods of the class
//Use the below approach to define the methods of the class
Car.prototype.setName = function setName(name) {
	this.name = name;
}

//Below is the optimal approach to define the Class members
Car.prototype.speed = 'Car speed';
Car.prototype.setSpeed = function setSpeed(speed) {
	this.speed = speed;
}

var car3 = new Car();
car3.setName('Maruti 800');
car3.setSpeed(100);

var car4 = new Car();
car4.setName('Maruti Swift');
car4.setSpeed(200);

console.log('Car 3 name : ',car3.name);
console.log('Car 3 speed = ',car3.speed);

console.log('Car 4 name : ',car4.name);
console.log('Car 4 speed = ',car4.speed);

// INHERITANCE IN JAVASCRIPT
// JavaScript supports Single Class Inheritance.
// To create a child class that inherit parent class, we first create a Parent Class object and assign it to Child Class.
// Below is an example.
console.log('##########     INHERITANCE EXAMPLE      #################');
function Ferrari() {}
Ferrari.prototype = new Car();

// The Ferrari class should execute its own constructor.
// So pointing the constructor to the Ferrari() method
Ferrari.prototype.constructor = Ferrari;

var car5 = new Ferrari();
car5.setName('Ferrari');
car5.setSpeed(200);

console.log('Car5 name : ',car5.name);
console.log('Car5 speed : ',car5.speed);









