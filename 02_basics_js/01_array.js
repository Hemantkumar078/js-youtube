let myarr1=[1,2,3,4,5,"mohan"];// i can declare an array using initializations i can store of any type number string boolen etc
let myarr2=[];//or i can declare an empty array using []
let myarr3=new Array();
let myarr4=new Array(2,6,7,8);//aqnother way of declaring array
myarr2.push(2);// to insert an element at end
//console.log(myarr1);
//console.log(myarr4);
myarr2.push(3);
myarr2.push(4);
//console.log(myarr2);
myarr2.pop();//to remove an element at end
//console.log(myarr2);
//unshift or shift
myarr1.unshift(0);// to insert an element at start (but its not prefrable because its take o(n) time to do that)
//console.log(myarr1);
myarr1.shift();// to remove an element at start 
// console.log(myarr1);
// console.log(myarr1.length);
// console.log(myarr1.indexOf("mohan"));// indexOf to find particular element//if not present it return -1
// console.log(myarr1.indexOf(2));
// console.log(myarr1.includes(5));//chk if particulare element present in the array or not return true or false
 let myarr5=myarr1.join();// it return a string by joining all the elements of the array with a comma by default("a,b,c,d,e")//it does not change the original array
 //we can also pass a separator inside it like myarr1.join('-') it will return a string with '-' as separator
console.log( myarr5);
// console.log(typeof myarr1);
let myarr6=myarr1.slice(1,3);// it return elements from index of [x,y) (y excluded)(not do manipulation on orignal array)
console.log(myarr6);
console.log(myarr1);
let myarr7=myarr1.splice(2,3,-1,-2);// it extract elements from index  splice(x,y,x1,x2,x3..xy) it extract y number fom undex x to x+y or if we want want we can replace it with other numbers

console.log(myarr7);
console.log(myarr1);
// // array

// const myArr = [0, 1, 2, 3, 4, 5]
// const myHeors = ["shaktiman", "naagraj"]

// const myArr2 = new Array(1, 2, 3, 4)
// // console.log(myArr[1]);

// // Array methods

// // myArr.push(6)
// // myArr.push(7)
// // myArr.pop()

// // myArr.unshift(9)
// // myArr.shift()

// // console.log(myArr.includes(9));
// // console.log(myArr.indexOf(3));

// // const newArr = myArr.join()

// // console.log(myArr);
// // console.log( newArr);


// // slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


//const myn2 = myArr.splice(2, 3)
 //console.log("C ", myArr);
 //console.log(myn2);
//push, pop, shift, unshift, indexOf, includes, join, slice, splice
//push() inserts one or more elements at the end of an array and returns the new length of the array.
//pop() removes the last element from an array and returns that element. This method changes the length of the array.
//shift() removes the first element from an array and returns that removed element. This method changes the length of the array.
//unshift() adds one or more elements to the beginning of an array and returns the new length of the array.
//indexOf() returns the first index at which a given element can be found in the array, or -1 if it is not present.
//includes() determines whether an array includes a certain element, returning true or false as appropriate.
//join() joins all elements of an array into a string, separated by a specified separator (default is comma).
//slice() returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
//splice() changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It returns an array containing the deleted elements, if any.

