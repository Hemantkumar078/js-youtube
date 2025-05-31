// Dates

let myDate = new Date()
console.log(myDate.toString());//Sat May 31 2025 05:05:41 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Sat May 31 2025
console.log(myDate.toLocaleString());//5/31/2025, 5:05:41 AM
console.log(typeof myDate);//object

let myCreatedDate = new Date(2023, 0, 23)//1/23/2023, 12:00:00 AM
 // let myCreatedDate = new Date(2023, 0, 23, 5, 3)//1/23/2023, 5:03:00 AM
  //let myCreatedDate = new Date("2023-01-14")//1/14/2023, 12:00:00 AM
 //let myCreatedDate = new Date("01-14-2023")//1/14/2023, 12:00:00 AM
//console.log(myCreatedDate.toLocaleString());

 let myTimeStamp = Date.now()//gives times in ms 1748668495679

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
console.log(newDate.getMonth() + 1);//it gives month in 0-indexing
console.log(newDate.getDay());// it gives day of week like today is saturday so it gives 6

// // `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
   // weekday:'long',
    //dateStyle:'medium',
    //month:'2-digit',
    //year:'numeric',
    dateStyle:'short',
    timeZone:"Asia/Kolkata"
}));
// let mydate=new Date();
// console.log(Date.now());//Date.now() gives time from 1970 in ms 
// console.log(mydate);// gives current time
// console.log(mydate.toLocaleString())
// console.log(mydate.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));