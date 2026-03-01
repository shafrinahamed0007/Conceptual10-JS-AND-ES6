// Rest operator

function myFunc(a,b,c,d, ...otherParamters){
    console.log(a,b,c,d, otherParamters);
}

// myFunc(1,2,3,4,5,6,7,8);

// spread operator
// array
let arr = [10,20,30];
// console.log(...arr);

let arr2 = [...arr];
console.log(Math.max(...arr));

// Object
const obj = {
    name: "Shafrin Ahamed",
    roll: 20
};



const obj2 = {...obj}
obj.name = "Ahamed Shafrin";

console.log(obj2)