//  map, filter, find. foreach, reduce

let arr = [10, 20, 30, 40];

// loop through
// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i])
// }

// for(let elem of arr){
//     console.log(elem)
// }

// map -> updatre element of an array

let updateArr = arr.map((element, index, array) => {
  console.log(element, " ->", index, array);
  return element * 2;
});
console.log(updateArr);

let updateArr1 = arr.map((element1, index1, array1) => element1 * 2);

console.log(updateArr1);

// filter method --- filter multiples elemetns
let overEighteen = arr.filter((element) => {
  return element > 18;
});

console.log(overEighteen);

// find method --> find a single element

const findThitry = arr.find((elem) => elem == 30);
console.log(findThitry);

const phones = [
  { name: "iPhone 15 Pro Max", price: 165000 },
  { name: "Samsung Galaxy S24 Ultra", price: 155000 },
  { name: "Google Pixel 8 Pro", price: 105000 },
  { name: "OnePlus 12", price: 95000 },
  { name: "Xiaomi 14 Ultra", price: 140000 },
  { name: "Vivo X100 Pro", price: 110000 },
  { name: "Nothing Phone (2)", price: 65000 },
  { name: "Redmi Note 13 Pro+", price: 55000 },
  { name: "Realme GT 5", price: 60000 },
  { name: "Asus ROG Phone 8 Pro", price: 135000 },
];

// using filter method

let richPhone = phones.filter(element => element.price>100000 || element.name.includes("Realme"));
const findRichPhone = phones.find(element => element.price > 100000);
console.log(richPhone);
console.log(findRichPhone);


// foreach
phones.forEach((elem, ind, arr)=>{
    console.log(elem);
});

// reduce method ***

let summation = phones.reduce((accumulator, elemetns)=>{
    return accumulator + elemetns.price;

}, 0);

console.log(summation)