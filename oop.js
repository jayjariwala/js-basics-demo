// Object Literal Syntax
// var person = {
//   firstname: 'Jay',
//   age: 27,
//   behavior: function() {
//     console.log("He is cool!");
//   }
// }

// var arr1 = [12,2,3,2,2,2];


// console.log(person);   // obj -> BaseObj
// console.log(arr1); // arr -> baseArray -> baseObj

// console.log(person.firstname);
// console.log(person['age']);

// var person2 = {
//   firstname: 'Gopal',
//   age: 26
// }

// Object factory method - create object dynamically

// function person(firstname, age) {
//   return {
//     firstname: firstname,
//     age: age,
//     behavior: function() {
//       console.log("he is cool");
//     }
//   }
// }

// var person1 = person('Jay', 27);
// var person2 = person('Gopal', 26);
// console.log(person1);
// console.log(person2);


// Constructor function

// function Person(firstname, lastname) {
//   console.log(this);
//   this.firstname = firstname;
//   this.lastname = lastname;
//   this.behaviour = function() {
//     console.log("!!!!!");
//   }
// }

// // // Person();
// const person1 = new Person('Divyesh', 'Rana');
// // const person2 = new Person('Gopal', 'Kotwal');
// const keys = Object.keys(person1);
// console.log(keys);
// for(let key in person1) {
//   console.log(key + person1[key]);
// }

// console.log(person1.hasOwnProperty());

// {}