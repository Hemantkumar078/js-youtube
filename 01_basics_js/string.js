const name = "hitesht"
const repoCount = 50
//console.log(name[0]);
// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

 const gameName = new String('hitesh-hc-com')
console.log(name.slice(-4,4));//[)//slice() extracts a section of a string and returns it as a new string.
console.log(name.slice(0,4));
//The slice() method takes two arguments: start and end.
//If start is negative, it counts from the end of the string.
//If end is positive, it counts from the start.
console.log(name);
console.log(gameName[0]);
console.log(gameName.__proto__);//it will give the prototype of the gameName object in browser console


// // console.log(gameName.length);
 //console.log(gameName.toUpperCase());//not change the original string
console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));//gives the index of the first occurrence of 't' in the string

const newString = gameName.substring(0, 4)//substring() extracts characters from index 0 to index 4 (not including index 4)
// console.log(gameName);
// console.log(newString);

 const anotherString = gameName.slice(-8, 4)
 console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
 console.log(newStringOne.trim());//trim() removes whitespace from both ends of a string
 //  not from the middle
 //trim() does not change the original string, it returns a new string with the whitespace removed
 console.log(newStringOne.trim());
console.log(newStringOne);
 const url = "https://hitesh.com/hitesh%20choudhary"

 console.log(url.replace('%20', '-'))//it replaces the first '%20' (or whatever given ) with '-' (or whatever given that side) 
 //replace() does not change the original string, it returns a new string with the replacement made
 console.log(url);

// console.log(url.includes('sundar'))//check if that string present inside it or not

console.log(gameName.split('-'));//return an array based on split of ('') what we give inside it
//split() does not change the original string, it returns a new array with the split values
//replace() and split() are used to manipulate strings in JavaScript
//includes() is used to check if a string contains a substring
//slice() and substring() are used to extract parts of a string
//charAt() is used to get a character at a specific index
//toUpperCase() is used to convert a string to uppercase
//toLowerCase() is used to convert a string to lowercase
//trim() is used to remove whitespace from both ends of a string
//indexOf() is used to get the index of the first occurrence of a substring
//lastIndexOf() is used to get the index of the last occurrence of a substring
//startsWith() is used to check if a string starts with a specific substring
//endsWith() is used to check if a string ends with a specific substring