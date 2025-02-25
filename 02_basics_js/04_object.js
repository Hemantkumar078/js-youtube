// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {//here are the objects inside object nested objects
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

 //const obj3 = { obj1, obj2 }
 //const obj3 = Object.assign( obj1, obj2, obj4) it assign function put all objects key value pairs inside first object1(its added other objects  in orignal obj1 too ) and return new object
 //console.log(obj1===obj3);//true;
// const obj3 = Object.assign({}, obj1, obj2, obj4)// it assign 

//const obj3 = {...obj1, ...obj2}// like in array similiarly its spread out the objects  and return one combined object
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));// to get all keys of an object as array 
// console.log(Object.values(tinderUser));//to get all values of an object as array
 //console.log(Object.entries(tinderUser));//to get all values of an object as entries  as [['key','values'],[],[],..]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));// just to check is there any key exits of this name

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course// here we de-structuring the course and from there i
//  am taking courseInstructor so again and again i dont need to use course. before that i can directly write that key name 
// and also  using ':' after that i can give them another name(or short name )that i going to use futher in that case (courseInstructor we cant use futher only instructor works)
//const {key : newname}=obejct_name
 //console.log(courseInstructor);
console.log(instructor);

// { //json file  this is the way json (javascript noatation) files written there key in string format("")
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
