let str = 'In space, no one can hear you code.';
console.log(str);
console.log("===========================================================================================================");
let arr = ['B', 'n', 'n', 5];
console.log(arr);
console.log("===========================================================================================================");

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log("split method strings");
console.log("example" + str);
console.log("===========================================================================================================");
console.log(str.split());
console.log("===========================================================================================================");
console.log(str);
console.log("===========================================================================================================");
console.log(str.split('e'));
console.log("===========================================================================================================");
console.log(str);
console.log("===========================================================================================================");
console.log(str.split(' '));
console.log("===========================================================================================================");
console.log(str);
console.log("===========================================================================================================");
console.log(str.split(''));
console.log("===========================================================================================================");
console.log(str);
console.log("===========================================================================================================");
//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log("join array method");
console.log("example " + arr);
console.log("===========================================================================================================");
console.log(arr.join());
console.log("===========================================================================================================");
console.log(arr);
console.log("===========================================================================================================");
console.log(arr.join('a'));
console.log("===========================================================================================================");
console.log(arr);
console.log("===========================================================================================================");
console.log(arr.join(' '));
console.log("===========================================================================================================");
console.log(arr);
console.log("===========================================================================================================");
console.log(arr.join(''));
console.log("===========================================================================================================");
console.log(arr);
console.log("===========================================================================================================");
//3) Do split or join change the original string/array?
console.log("No, split and join method do not change the string or the array in this case.\n'split' returned the string as an array in diffrent ways.\n'join' retuned the array as a string in diffrent ways.");
console.log("===========================================================================================================");
//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
console.log(cargoHold.split(',').sort().join(','));
console.log("===========================================================================================================");
console.log(cargoHold)
console.log("===========================================================================================================");