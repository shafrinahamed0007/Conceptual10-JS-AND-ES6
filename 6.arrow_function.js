// Traditioanl function is hoisted, but arrow function not not hoisted
// console.log("Multipication ->", multiply(10, 5));
let multiplyFunc = function multiply(a, b) {
  // Named Function Expression
  return a * b;
};

// console.log("Multipication ->", multiplyFunc(10, 5));

// arrow function

const sum = (a, b) => a + b; // Implicitly return

const sqrt = a => a*a;

console.log(sum(5, 6));
console.log(sqrt(5));

function myFuncNormal(){
    // console.log(this);
}

myFuncNormal();

const myFuncArrow = () =>{
    // console.log(this)
}

let person  = {
    name: "Shakib",
    age: 26,
    showMyInfo: function(){
        console.log(this.name)
    },
};

person.showMyInfo();
