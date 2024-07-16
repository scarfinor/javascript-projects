console.log("Strings And Arrays");
console.log(
  "================================================================================"
);
console.log("Chapeter 7: 'Stringing Characters Together'");
console.log(
  "--------------------------------------------------------------------------------"
);
console.log(
  "Question 1: 'What happens if we try to access an index that doesn’t exist, for example -1 or an index larger than the length of the string?'"
);
let jsCreator = "Brendan Eich";
console.log("Answer:");
console.log(jsCreator[-1]);
console.log(jsCreator[42]);
console.log(
  "--------------------------------------------------------------------------------"
);
console.log(
  "Question 2: What does an expression using bracket notation evaluate to when the index is invalid (the index does not correspond to a character in the string)?"
);
console.log("Answer: 'Undefined'");
console.log(
  "--------------------------------------------------------------------------------"
);
console.log(
  "Question 3: 'If phrase = 'Code for fun', then phrase[2] evaluates to:'"
);
let phrase = "code for fun";
phrase[2];
console.log("Answer: ");
console.log(phrase[2]);
console.log(
  "--------------------------------------------------------------------------------"
);
console.log(
  "Question 4: Which of the following returns true given myStr = 'Index'? Choose all correct answers."
);
let myStr = "Index";
console.log(myStr[2]);
console.log(myStr[4]);
console.log(myStr[6]);
console.log(myStr[0]);
console.log("Answer: 2. myStr[4] === 'x';");
console.log(" Answer: 4. myStr[0] === 'I';");
console.log(
  "--------------------------------------------------------------------------------"
);
console.log(
  "Question 5: What is printed by the following code? let phrase = javascript rocks! console.log(phrease[phrase.length - 8])"
);
let Phrase = "JavaScript rocks!";
console.log(Phrase[phrase.length - 8]);
console.log("Answer: Retunred S");
console.log(
  "--------------------------------------------------------------------------------"
);
console.log(
  "Question 6: 'Given word = 'Rutabaga', why does word.length return the integer 8, but word[8] is undefined?'"
);
let word = "Rutabaga";
console.log(word.length);
console.log(word[8]);
console.log(
  "Answer: 'word.length is returning the nuber of characters in the string defiened by the variable Rutabage and word[8) is showing the 8th character in a string that only has 4 charaters.'"
);
console.log(
  "--------------------------------------------------------------------------------"
);
console.log("Question 7: 'What is the length of location?'");
let cityName = "Vienna";
let stateName = "Virginia";
let location = cityName + ", " + stateName;

console.log(location.length);
console.log("Answer: '1. 16'");
console.log(
  "--------------------------------------------------------------------------------"
);
console.log(
  "Question 8: 'Given pet = 'cat', why do the statements console.log(pet + 's'); and pet += 's'; NOT violate the immutability of strings?'"
);
let pet = "cat";
console.log(pet + "s");
console.log((pet += "s"));
console.log(
  "these examples do not change the value of the string 'pet' rather it adds the value of the charater 's' to the string."
);
console.log(
  "--------------------------------------------------------------------------------"
);
console.log(
  "Question 9: 'String methods can be combined in a process called method chaining. Given word = 'JavaScript';, word.toUpperCase() returns JAVASCRIPT. What would word.slice(4).toUpperCase() return?.'"
);
word = "JavaScript";
console.log(word.slice(4).toLocaleUpperCase());
console.log("Answer: SCRIPT");
console.log(
  "--------------------------------------------------------------------------------"
);
console.log(
  "Question 10: 'What is printed by the following code? let language = 'JavaScript'; language.replace('J', 'Q'); language.slice(0,5); console.log(language)'"
);
let language = "JavaScript";
language.replace("J", "Q");
language.slice(0, 5);
console.log(language);
console.log("Answer: 1. 'JavaScript'");
console.log(
  "Question 11: 'Given language = 'JavaScript';, what does language.slice(1,6) return?"
);
language = "JavaScript";
console.log(language.slice(1, 6));
console.log("Answer: 3. 'avaSc'");
console.log(
  "--------------------------------------------------------------------------------"
);
console.log(
  "Question 12: 'What is the value of the string printed by the following program? let org = 'The LaunchCode Foundation'; let trimmed = org.trim(); console.log(trimmed);'"
);
let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();
console.log(trimmed);
console.log("Answer: 2. 'The LaunchCode Foundation'");
console.log(
  "--------------------------------------------------------------------------------"
);
console.log(
  "Question 13: 'Which of the options below prints 'Launch' and 'Code' on separate lines?'"
);
console.log("Launch\nCode");
console.log("Answer: 1.");
console.log(
  "--------------------------------------------------------------------------------"
);
console.log(
  "Question 14: 'Mad Libs are games where one player asks the group to supply random words (e.g. “Give me a verb,” or, “I need a color”). The words are substituted into blanks within a story, which is then read for everyone’s amusement. In elementary school classrooms, giggles and hilarity often ensue. TRY IT! Refactor the following code to replace the awkward string concatenation with template literals."
);
let pluralNoun = "conditionals";
let name = "progamers";
let verb = "work";
let adjective = "arrays";
let color = "powerfull";
console.log("Answer:");
console.log(
  "JavaScript provides a " +
    color +
    " collection of tools — including " +
    adjective +
    " syntax and " +
    pluralNoun +
    " — that allows " +
    name +
    " to " +
    verb +
    " with strings."
);
console.log(
  "================================================================================"
);
console.log("Chapter 8: 'Arrays Keep Things In Order.'");
console.log(
  "================================================================================"
);
console.log("Question 1: 'What is the length of the two arrays?'");
let classes = ["science, computer, art"];
let teachers = ["Jones", "Willoughby", "Rhodes"];
console.log("Answer Part 1:");
console.log(classes.length);
console.log(teachers.length);
console.log(
  "Answer Part 2: 'How can you change the classes array declaration to have the same number of items as the teachers array?'"
);
console.log("let classes = ['science', 'computers', 'art']");
console.log(
  "--------------------------------------------------------------------------------"
);
console.log("Question 2: 'What is printed by the following code? ");
let charles = ["coder", "Tech", 47, 23, 350];
charles.sort();
console.log(charles);
console.log("Answer: 4. '[23, 350, 47, 'Tech', 'coder'");
console.log(
  "--------------------------------------------------------------------------------"
);
console.log(
  "Question 3: 'Which statement converts the string str = 'LaunchCode students rock!' into the array ['LaunchCode', 'students', 'rock!']?"
);
let str = "LaunchCode students rock!";
console.log(str.split(" "));
console.log("Answer: 1.");
console.log(
  "--------------------------------------------------------------------------------"
);
console.log(
  "Question: 4.'let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];"
);
let groceryBag = [
  "bananas",
  "apples",
  "edamame",
  "chips",
  "cucumbers",
  "milk",
  "cheese",
];
let selectedItems = [];

selectedItems = groceryBag.slice(2, 5).sort();
console.log(selectedItems);
console.log("Answer: 2. '['chips', 'cucumbers', 'edamame', 'milk']'");
console.log(
  "--------------------------------------------------------------------------------"
);
console.log("Question 5: 'What are the two dimensional indexes for 'Jones'?'");
let school = [
  ["science", "computer", "art"],
  ["Jones", "Willoughby", "Rhodes"],
];
school[0].push("dance");
school[1].unshift("Holmes");
console.log(school);
console.log("Answer: [1],[0]");
console.log("Answer part 2: 'school[0].push('dance');");
console.log("Answer part 3: 'school[1].unshift('Holmes')'");
console.log("=================================");

console.log("================================");
function repeater(str) {
  let repeated = str + str;
  console.log(repeated);
}

repeater("Bob");
console.log("=================================");
function repeater(str) {
  let repeated = str + str;
  console.log(repeated);
}

repeater("Bob");
console.log("=================================");
let num = 42;

function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(43));
console.log("================================");
function myFunc(radius) {
  let area = Math.PI * radius ** 2;
  return area;
}
console.log("area");
console.log("=================================");
function plusTwo(num) {
  return num + 2;
}

let a = 2;

for (let i = 0; i < 4; i++) {
  a = plusTwo(a);
}

console.log(a);
console.log("=================================");
