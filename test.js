//Write a function named countVowels that takes a single string as input and returns the number of vowels present in the
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can be either uppercase or lowercase.

const readline = require('readline');

function countVowels(str) {
    const vowels = /[aeiouAEIOU]/g;
    const matches = str.match(vowels);
    return matches ? matches.length : 0;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter a string to count vowels: ', (userInput) => {
    console.log(`The number of vowels in "${userInput}" is: ${countVowels(userInput)}`);
    rl.close();
});
 

//to run - node test.js