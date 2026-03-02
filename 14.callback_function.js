const greet = (name, message, cb) =>{
    console.log(`Hi, ${name}`)
    cb(message)
}

const sayGreeings = (messsage) =>{
    console.log(messsage)
}
greet("Shakib", "Good Morning", sayGreeings)