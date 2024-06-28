// Primitive

// 7 types : String, Nunber, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34565436271634362718346327n


//Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "hardik",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros);