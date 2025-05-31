//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;//undefined

const id = Symbol('123')// symbol returned unique id even if we passed the same string
const anotherId = Symbol('123')

//console.log(id === anotherId);

// const bigNumber = 3456543576654356754n// by writing n at end we are telling that we taking it as Big Int



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);//symbol
console.table([...heros]);
 console.table(myObj);//object
// console.log(typeof heros);//array
// console.log(typeof myFunction);//function
// https://262.ecma-international.org/5.1/#sec-11.4.3
