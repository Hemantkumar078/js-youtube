const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);// toString() for to convert number to string 
// console.log(balance.toFixed(1));// to fixed the number of digits after decimal
//Variables and functions usually start with a lowercase letter (camelCase).
//Classes and constructor functions start with a capital letter (PascalCase).
const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));// gives precision means only 4 digits from left (may include after decimal also)

const hundreds = 1000000
 console.log( hundreds.toLocaleString('en-IN'));// to convert that number in indian standard (if 'en-IN' not provided than it convert it to default US standard)
//type after toLocaleString is string

// +++++++++++++ Maths +++++++++++++++++++++++++++++

 console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));//5
// console.log(Math.ceil(4.2));//5
// console.log(Math.floor(4.9));//4
// console.log(Math.min(4, 3, 6, 8));
const arr=[1,2,3,6,8.2,4,5];
console.log(Math.max(...arr));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());//[0,1)
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)// to get random number between min and max
