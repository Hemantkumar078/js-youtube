// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


 console.log("2" > 1);//true  if one operand is a string and the other is a number, JavaScript tries to convert the string to a number before comparing.
console.log("02" > 1);// true here >= ,> ,<,<= comparison operators converts string to number and  then compares 

// console.log(null > 0);
// console.log(null == 0);// but == operators works diffrently it not converts null to number
// console.log(null >= 0);// here > ,>= comparison operator converts null to 0(means number )

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);// so undefined is undefined not convertable(or not comparable) to anything so it gives false

// // === 

 console.log("2" === 2);// so here triple equal(===) sign also compares datatype with value of both sides if datatype not same it gave false