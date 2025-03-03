// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan": ///there is strict checking(===) between key and value 
        console.log("January");
        break;//just to stop there not exexute next lines if this case condition matches
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;
    //if we not use break then all statements will print that value matches with key 
    default:
        console.log("default case match");// if not any condition matches then default case runs
        break;
}