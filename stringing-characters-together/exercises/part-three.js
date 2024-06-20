//Part Three section one

let language = 'JavaScript';
let firstInitial = language[0];
let lastInitial = language[4];
let initials ="S";
let Language ="J";
let dna = "TSV-LVL-CAT"
//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0, 1) + language.slice(4, 5));
//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(`${Language}${initials}`);
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for 'JavaScript' is '${firstInitial}${lastInitial}'.`);
//4. Just for fun, try chaining 3 or more methods together, and then print the result.
if (dna.indexOf("CAT")) {
    console.log(`The abbreviation for 'JavaScript' is '${firstInitial}${lastInitial}'. we love '${language.slice(0, 1) + language.slice(4, 5)}'.`);
} else {
    console.log("CAT gene not found");
}
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
console.log(`${notTitleCase.replace('title case', 'Title Case')}`);
