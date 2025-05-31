const marvel_heros=["thor","Ironman","spiderman"];
const dc_heros=["superman","flash","batman"];
//marvel_heros.push(dc_heros);// it pushes array as element inside the array [..,..,[,,]..]like that
console.log(marvel_heros);
//concat
//const allheros=marvel_heros.concat(dc_heros);// it concatinate the dc_heros's elements at the end of marvel heros and return another array it not do any changes in the existing array
//console.log(allheros);
//[...,...] but what if we need to add many arrays in one array for that
const all_new_heros=[...marvel_heros,...dc_heros];
console.log(all_new_heros);
//now to make an array flat to an specific depth 
const Anarray=[101,102,103,104,[105,106,[107,108]],109];
const real_another_array=Anarray.flat(Infinity);//here we can give till which nesting we wants its fllatting
console.log(real_another_array);
// to check if an array or not
console.log(Array.isArray("hitesh"));
// to retuning converting  array to it
console.log(Array.from("hitesh"));
console.log(Array.from({name:"hemant"}));// currently not returning any data only [] this bractes but we need to tell which value we needed key or value
// to make an array from set of elements 
console.log(Array.of(101,102,103));
// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]

// // marvel_heros.push(dc_heros)

// // console.log(marvel_heros);
// // console.log(marvel_heros[3][1]);

// // const allHeros = marvel_heros.concat(dc_heros)
// // console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]

// // console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "hitesh"})) // interesting

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));
//concat, flat, isArray, from, of
// concat() is used to merge two or more arrays. It returns a new array without changing the existing arrays.
// flat() creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. If no depth is specified, it defaults to 1.
//Array.isArray() checks if a value is an array. It returns true if the value is an array, otherwise false.
// Array.from() creates a new array from an array-like or iterable object. It can also take a map function as a second argument to apply to each element.
// Array.of() creates a new array instance with a variable number of arguments, regardless of the number or type of arguments passed.
// It is useful for creating arrays from a set of elements.
// [...array1, ...array2] is a spread operator syntax that creates a new array by combining elements from array1 and array2.
// It is a concise way to merge arrays without using the concat() method.
// The spread operator can also be used to create shallow copies of arrays or to pass array elements as individual arguments to functions.