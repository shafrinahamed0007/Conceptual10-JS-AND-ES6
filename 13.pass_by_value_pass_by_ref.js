// pass by value (pass by primitive value)
const name = "Shakib";

const myFunc = (value) =>{
    console.log("Inside func ->", value)
}

// myFunc(name)

// pass by reference (pass by non primitive or referential data type)

const obj = {
    color:'red',
    model: "1j"
}

const myFunc2 = (params)=>{
    params.color = "black",
    console.log("Inside funct ->", params);
}

myFunc2(obj)
console.log(obj)