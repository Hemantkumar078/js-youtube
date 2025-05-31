// Immediately Invoked Function Expressions (IIFE)  (function defination inside it (named or unnamed ))(parameters passed from there); then semicolon to stop

(function chai(){ //named iife// not call outside it
    // named IIFE 
    console.log(`DB CONNECTED`);
})();// semicolon there to prevent from potential errors

( (name) => {//unnamed iife 
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');

