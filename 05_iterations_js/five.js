const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )
//forEach loops tooks (value,key,whole array value) .forEach(callbackfunction)
coding.forEach( (item) => {
    //console.log(item); //here inside forEach loop i can only able to iterate there not able to change
} )
//console.log(coding);
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)//just write the callback function (don't need to write as executable code ())

// coding.forEach( (item, index, arr)=> {//it took(or give) three values (item ,index and whole array)
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach( (item) => {//here item is object
    console.log(item.languageName);
} )
