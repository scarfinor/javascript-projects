let str = "blue";
let reversed = "";

for (let i = 0; i < str.length; i++) {
    reversed = str[i] +reversed;
}

console.log(reversed);
console.log("----------------------");
console.log("question 1: What happens if you reverse the order of the assignment statement within the for loop, so that reversed = reversed + str[i];?");
for (let i = 0; i < str.length; i++) {
    reversed = reversed +str[i];
}
console.log("Answer: " + reversed);
console.log("======================");