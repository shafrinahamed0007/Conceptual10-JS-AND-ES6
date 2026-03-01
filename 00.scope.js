/**
 * Scope --> সীমানা
 *  3 types of scopre --> 1. global scope, 2. block scope, 3. function scope or local scope
 *
 */

// global scope
let test = "test";

if (true) {
  console.log(test);
}

// block scope
// var not maintains block scope
// let and const maintains block scope
{
  var test1 = "test1";
  let test2 = "test2";
}

// console.log(test1);
// console.log(test2);

// function and local scope
// var, let and const all are maintaining function scope
function myFunc(){
    var test3 = "test3";
    let test4 = "test4";
    const test5 = "test5"
}

myFunc();
// console.log(test3)
// console.log(test4)
// console.log(test5)
