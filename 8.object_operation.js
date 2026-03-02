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
console.log("Hello")



