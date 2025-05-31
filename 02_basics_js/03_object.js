// singleton
// Object.create

// object literals

const mySym = Symbol("key1")
let obj=new Object({name:"shubham"});
console.log(obj);
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
//delete jsUser.email // it will delete the email property from the JsUser object;
// Object.freeze(JsUser)//it will not allow to change the existing properties or add new properties or remove existing properties
//Object.seal(JsUser) // it will not allow to add or remove new properties but allow to change the existing properties
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());