let name = "Shafrin Ahamed";
let age = 27;

// Ternary Operator -> condition ? true : false
let aboutMe = `I am ${name}.


I'm ${age} years old and I'm a WebDeveloper
${age > 18 ? "I am adult" : "I am not adult"}
${age || 100}

`;

console.log(aboutMe);
