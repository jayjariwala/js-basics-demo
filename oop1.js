// Inheritance - Prototypical Inheritance
// If the object doesn't have _prototype property its a base object

// defination of prototypical inheritance
// when accessing the property or method on an object, JavaSceipt Engine walks up the prototype chain on parent object until it find the method or property.
// every object has prototype method except the root object

// myArray -> ArrayBase -> ObjectBase // it is called multilevel inheritance
// object create by a given constructor will have a same prototype
// circle -> circleBase -> Objectbase

//Property Descriptor
// let person = { name: "Jay" };

// for (let key in person) {
//   console.log(key);
// }

// Object.keys(person);

// // constructor
// function Circle() {
//   this.radius = 10;
// }

// const c1 = new Circle();

// console.log(Circle.prototype);

// // prototype
// Circle.prototype.draw = function() {
//   console.log("Draw the Circle");
// };
