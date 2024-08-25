/*a function named filterEvenNumbers that takes an array of numbers as input and returns a new array containing
only the even numbers.*/


const readline = require('readline');

function filterEvenNumbers(arr) {
    const evenNumbers = arr.filter(number => number % 2 === 0);
    return evenNumbers;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter a list of numbers separated by commas (e.g., 1,2,3,4,5): ', (input) => {

    const numberArray = input.split(',').map(num => parseFloat(num.trim()));
    
    console.log(`The even numbers are: [${filterEvenNumbers(numberArray)}]`);
    
    rl.close();
});
//node test3.js - to run