// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {// for of loops , give the direct values 
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")//.set to insert values 
map.set('USA', "United States of America")
map.set('Fr', "France")
//map.set('IN', "Indi") //if i again put any other value at that key then it refrencing to that value not the previous one 
//also map not takes duplicates
//console.log(map.get("Fr"));  //.get to access its values at that key
//map keys can be(functions ,obejcts,or any primitive)
 //console.log(map);//prints the whole key value pair values in map

// for (const [key, value] of map) {//destructure the key value pair[key,value] values (but it not works in for..in loops )
//     console.log(key, ':-', value);
// }

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key,values] of myObject) { //objects not iteratable in for for of loops 
//     console.log(key);
    
// }