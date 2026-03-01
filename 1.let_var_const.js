// var hoisted (bad practice)
// let and const hoisted but in Temporal Dead Zone

// Defference 2 -----

// redeclare with same name by var
var name = "Utsho";
var name = "Ahasan Habib"

// can't redeckare with same name by let and const
// let roll = 29;
// let roll = 20;
// const age = 20;
// const age = 23;


// Difference 3 ---
// reassign allowed by var and let but const
var nationality = "Bangladesh";
nationality = "American";
console.log(nationality);

let age = 26;
age = 30;
console.log(age)

const fullName = "Shafrin Ahamed";
fullName = "ahamed Shafrin";
console.log(fullName);

// Difference 4
// scope
// var maintains only function scope, but not block scope or global scope
// let and const maintain all scope
