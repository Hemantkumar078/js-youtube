const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)//here after comma this is the value of accumulator(acc)

const myTotal = myNums.reduce( (acc, curr) => acc+ curr, 0)
//so here at the end we return a single value from the loop (and other map and filter returning arrays)
//here .reduce((acc,curr)=>{
// function defination
// return something },0); what we returning is become the accumulator (acc) for next iteration and the end we returning the single value(which is our answer)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);