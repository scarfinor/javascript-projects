let num = 1001;
if (String(num).includes('.')) {
    console.log(String(num).length-1);
    } else {
    console.log(String(num).length);
    }
//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let num1 = 123.45;
if (String(num1).includes('.')) {
    console.log(String(num1).length-1);
    } else {
    console.log(String(num).length);
    } 
//Experiment! Wh2at if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases