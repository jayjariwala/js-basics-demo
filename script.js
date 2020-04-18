// 1 // default binding rule
// 2 // inplicit binding rule
// 3 // explicit bingind rule - hard binging
// 4 // new binding rule

// var person = {
//   firstname: "Jay",
//   age: 27,
//   behavior: function() {
//     console.log("He is cool!");
//   }
// };
// function foo() {
//   console.log(this.a);
// }

// const obj = {
//   a: "abc",
//   baz: foo
// };

// const obj2 = {
//   a: "xyz"
// };

// var a = 10;

// foo(); // default biding

// obj.baz(); // inplicit binding
// person.behavior();

// foo.call(obj2); // explict binding

// obj.baz.call(obj2); // explicit binding

// call, bind

// function Foo() {
//   console.log(this);
// }

// const foo = new Foo();

// const obj = {
//   foo: () => {
//     console.log(this);
//   }
// };

// obj.foo();
