let fileLogger = function(msg) {

}
function logError(msg, logger) {
  let errorMsg = 'ERROR: ' + msg;
  logger(errorMsg);
}
console.log(logError('Something broke!', fileLogger));

const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}
// TODO 1: write a validator 
// that ensures input starts with "a"
let isEven = function(n) {
  return Number(n) % 2 === 0;
};
console.log(getValidInput('Enter an even number:', isEven));
console.log("=====================================");
let startWithA = function(a) {
  return ; 
};
console.log(getValidInput('Enter a String That Starts With A: ', startWithA));

// TODO 2: write a validator 
// that ensures input is a vowel

// Be sure to test your code!
