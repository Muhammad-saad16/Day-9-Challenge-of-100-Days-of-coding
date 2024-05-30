//                               🚀 Day 8 Challenge: Start Coding! 🚀

//Question 22: 
//Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.

let arr: number[] = [1, 2, 3, 4, 5];
console.log(arr[10]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.

let array: number[] = [1, 2, 3, 4, 5];
 console.log(array[4]);  // Correcting the error by accessing a valid index.
  

 //Question 23:
 // Conditional Tests: Write a series of conditional tests. Predict the results of each test.

let car = 'subaru';

//test 01
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

//test 02

console.log("Is car == 'toyota'? I predict False.")
console.log(car == 'toyota' )

// test 03
console.log("Is car === 'subaru'? I predict True");
console.log(car === 'subaru');

//test 04
console.log("Is car === 'subaru'? I predict false");
console.log(car === 'subaru');

//test 05

console.log("Is car.length > 0? I predict True");
console.log(car.length > 0);

//test 06

console.log("Is car.length < 5? I predict False");
console.log(car.length < 5);

// test 07
console.log("Is car.toUpperCase()  === 'SUBARU' ? I predict True");
console.log(car.toUpperCase() === 'SUBARU');

// test 08
console.log("Is car.toUpperCase()  === 'Subaru' ? I predict True");
console.log(car.toUpperCase() === 'Subaru');

// test 09
console.log("Is car.toLowerCase()  === 'subaru' ? I predict True");
console.log(car.toLowerCase() === 'subaru');

// test 10
console.log("Is car.includes('u')? I predict True");
console.log(car.includes('u'));


//Question 24:
//Test for equality and inequality with String

const string1: string = "Hello";
const string2: string = "World";
console.log(string1 === string2); //false
console.log(string1 !== string2); //true

//Test using lower case  function
const upperCase: string = "HELLO";
const lowerCase: string = "hello";

console.log(upperCase.toLowerCase() === lowerCase); //true


//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
// and less than or equal to

const num1: number = 5;
const num2: number = 5;
console.log(num1 == num2); //true
console.log(num1 != num2); //false
console.log(num1 > num2); //false
console.log(num1 < num2); //false
console.log(num1 >= num2); //true
console.log(num1 <= num2); //true

//Tests using "and" and "or" operators
const x: number = 5;
const y: number = 10;
const z: number = 15;
console.log(x < y && y > z); //false
console.log(x < y || y > z); //true

//Test whether an item is in a array

const array1: Number[] = [1,2,3,4,5];
const itemToFind: number= 3;
console.log(array1.indexOf(itemToFind) !== -1); //true

//Test whether an item is not in a array

console.log(array1.indexOf(10) === -1); //true

