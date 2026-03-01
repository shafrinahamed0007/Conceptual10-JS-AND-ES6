// array destructure

let arr = [10, 20, 30, 40, 50, 60, 70];
// let ten = arr[0];
// let four = arr[3];
// let fith = arr[4];
let [one, two, three, , , six] = arr;

// console.log(ten, four, fith)

// console.log(one,two, three,six )

// object dectrucuture

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

// let name = person.name;
// let roll = person.roll;

let {
  roll: rollNumber,
  name,
  address: { city, country: nationality, street:{roadNumber} },

} = person;

console.log(name, rollNumber, city, nationality, roadNumber);
