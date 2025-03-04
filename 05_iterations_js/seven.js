const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})
//using .map we can able to return modified value(means we can able modified the current value)
const newNums = myNumers
                .map((num) => num * 10 )//in that first .map return an modified array
                .map( (num) => num + 1)//now that second .map performs on modified array and then it return second modified array
                .filter( (num) => num >= 40)//now that using filter we filtering values from second modified array (so totally it becomes o(n+n+n)=o(n))

console.log(newNums);