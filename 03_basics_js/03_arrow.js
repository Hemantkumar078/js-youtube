const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website `);//here the keys inside the object access only by this.keyname or(object_name.keyname)
        console.log(this);
    }

}

//user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

 //console.log(this);//it gives empty object but if i do the same thing in browsers's console so there global object is window so properties and methods of windowa's returned in console of browser

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);//gives undefined because there no object and no key inside function accessing any key gives undefined
// }

//chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this);// in this case we are printing global object inside a function and gives some diffrent kind of properties and methods which are currently no use of us may that are embedded code default 
// }
// chai()

// const chai =  () => {// here instead of using can use the arrows
//     let username = "hitesh"
//     console.log(this);//but in arrow function case its prints an empty global object{}
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2//explicit return in that case need to write return what we are returning 
// }

// const addTwo = (num1, num2) =>  num1 + num2//in case of explicit return where one line of code no need to write return 

// const addTwo = (num1, num2) => ( num1 + num2 )//also can use that bracacts in implicit return 

// const addTwo = (num1, num2) => ({username: "hitesh"})// we can also able to returnobjects in explicit but there need of that small bracats ('(' ')') outside the object braces 


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()