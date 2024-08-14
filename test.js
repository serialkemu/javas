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
//node test.js to run