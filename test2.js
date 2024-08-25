/* Write a function named reverseString that takes a single string as input and returns a new string with the characters in
reverse order.*/


const readline = require('readline');

function reverseString(str) {
    const charArray = str.split('');
    const reversedArray = charArray.reverse();
    const reversedString = reversedArray.join('');
    return reversedString;
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter a string to reverse: ', (userInput) => {
    
    console.log(`The reversed string is: "${reverseString(userInput)}"`);

    
    rl.close();
});
//node test2.js -to run