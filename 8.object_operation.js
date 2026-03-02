let person = {
  name: "Shakib",
  roll: 29,
  address: {
    city: "Dhaka",
    country: "Bangladesh",
    street: {roadNumber:" 3/a", test: null}
  },
  isMarried: false,
  isKutipoti: false,
  homeTown: null,
};

// Access property's value

// Dot notation
console.log(person.name);
console.log(person.age);

// bracket notation
// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["name"]);

// let name = "name";
// console.log(person.name) // dynamic

// Nested Object
// console.log(person.address.street.roadNumber);

let person2 = {
  name: "Babu",
  roll: 29,
  address: {
    city: "Dhaka",
    country: "Bangladesh",
    street: null,
  },
  isMarried: false,
  isKutipoti: false,
  homeTown: null,
};

// console.log(person2.address.street.roadNumber);
console.log(person2?.address?.street?.roadNumber); // optioanl chaning
// console.log("Hello")

// Object.keys, object.value

let keys = Object.keys(person);
let values=  Object.values(person);
let entries=  Object.entries(person);

// console.log(keys);
// console.log(values);
// console.log(entries);

// for in an array method after Object.keys
// for(let property in person){
//     console.log(property, "->", person[property]);
// }

// for(let key of keys){
//     console.log(person[key])
// }


// freeze, seal, delete
let car = {
    brand: "Toyota",
    color: "Black",
    model: "ABC"
}

// delete car color
//  delete car.color;

// freeze
// Object.freeze(car); // precent insert, delete , update
// car.color = "white";
// delete car.brand;
// car.engine = "Test"

Object.seal(car); // prevent insert , delete
car.engine  ="Text";
delete car.color;
car.color = "red";

 console.log(car);

//  copy obj independently

let car2 = {...car2}



