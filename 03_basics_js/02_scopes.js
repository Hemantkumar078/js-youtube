var c = 300
let a = 300
if (true) {
    c++;
    console.log(c);
    c++;
     var c=100
     c++;
     console.log(c);
    let a = 10
    const b = 20
     console.log("INNER: ", a);
    
}

c++;

console.log(a);
//console.log(b);
 console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        var website = "youtube"
        console.log(username);
    }
     //console.log(website);//error because website is not defined in this scope

     two()
     //console.log(website)//error because website is not defined in this scope
}

 // one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
         console.log(username + website);
    }
     //console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5));

function addone(num){//this type of function declaration we can call/access anytime above or bellow it (if its defination defined before to call it)
    return num + 1
}


//addTwo(5)   
const addTwo = function(num){//but this type of function declaration we can only access/call below the function defination or declaration
    return num + 2
}