console.log("Chapter 9: Repeating with Loops");
console.log("===========================");
console.log("example 1: For loop syntax");
for (let i = 0; i < 51; i++) {
    console.log(i);
 }
console.log("==========================");
console.log("example 2: Iterating Over Strings");
let name1 = "LaunchCode";

for (let i = 0; i < name1.length; i++) {
   console.log(name1[i]);
}
console.log("==========================");
console.log("example 3:")
let  name2 = "Richard";
for (let i = 0; i <name2.length; i++) {
    console.log(name2[i]);
}
console.log("==========================");
console.log("example 4: Iterating Over Arrays");
let languages = ["JS", "Java", "C#", "Python"];
for (let i = 0; i < languages.length; i++) {
   console.log(languages[i]);
}
console.log("==========================");
console.log("example 5: ")
let family = ["Richard", "Jordan", "Giovanni", "Isabella"];
for (let i = 0; i < family.length; i++) {
    console.log(family[i]);
}
console.log("==========================");
console.log("example 6: Initial Expression");
for (let i = 3; i < 10; i++) {
    console.log(i);
 }
 console.log("-------------------------");
 let name3 = "LaunchCode";
 for (let i = 6; i < name3.length; i++) {
    console.log(name3[i]);
 }
console.log("==========================");
console.log("Note 1: For loop without loop variable")
for (let i = 0; i < 42; i++) {
    console.log("LaunchCode");
 }
console.log("==========================");
console.log("example 7: Loop Condition(False)");
for (let i = 0; i < -1; i++) {
    console.log("LaunchCode");
 }
console.log("DO NOT WRITE A INFINITE LOOP! USE (CRTL+C) IN TERMINAL TO STOP!");
console.log("==========================");
console.log("example 8: Update Expression");
for (let i = 0; i < 51; i = i + 2) {
    console.log(i);
 }
console.log("==========================");
console.log("Question 1: How many times does the loop body execute?");
let phrase = "Chili Cook-off";
for (let i = 0; i < phrase.length - 1; i = i + 3) {
   console.log(phrase[i]);
}
console.log("Answer: 5");
console.log("Question 2: Which set of characters is printed by the loop? (We have placed characters for the choices below on the same line, but they would be on separate lines in the actual program output.)");
console.log("Answer: ClCkf");
console.log("==========================");
console.log("example 9: Adding1...n");
let n = 6;
let total = 0;
for (let i = 1; i <= n; i++) {
   total += i;
}
//The Variable "total" is a accumulator pattern. it represents the running total.
console.log(total);
console.log("==========================");
console.log("example 10: summing an Array");
let numbers1 = [2, -5, 13, 42];
let total1 = 0;

for (let i = 0; i < numbers1.length; i++) {
   total1 += numbers1[i];
}
console.log(total1);
console.log("==========================");
console.log("While Loops");
console.log("example 11: While Loop Syntax");
console.log("while (boolean expression) {\nbody\n}");
console.log("==========================");
console.log("Question 3: True/False: You can rewrite any for loop as a while loop.\nAnswer: True");
console.log("==========================");
console.log("Question 4: The following code contains an infinite loop. Which is the best explanation for why the loop does not terminate?");
console.log("Answer: n starts at 10 and is incremented by 1 each time through the loop, so it will always be positive.");
console.log("==========================");
console.log("example 12: Terminating A Loop With Break");
for (let i = 0; i < 42; i++) {
console.log(i);
    if (i > 10) {
       break;
    }
 }
console.log("--------------------------");
console.log("example 13: ");
let numbers = [2, 10, 22, 33, 41, 42, 44];
let searchVal = 42;
let i = 0;
while (i < numbers.length) {
   if (numbers[i] === searchVal) {
      break;
   }
   i++;
}
if (i < numbers.length) {
   console.log("The value", searchVal, "was located at index", i);
} else {
   console.log("The value", searchVal, "is not in the array.");
}
console.log("==========================");
console.log("Question 5: Which type of loop should you use to write the program?\nAnswer: While Loop");
console.log("Which type of loop should you use to write the program?\nAnswer: For Loop");
console.log("==========================");