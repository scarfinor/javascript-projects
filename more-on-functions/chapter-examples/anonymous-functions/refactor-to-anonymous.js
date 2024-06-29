function reverse(str) {
  let lettersArray = str.split('');
  let reversedLettersArray = lettersArray.reverse();
  return reversedLettersArray.join('');
}
console.log("==================");
let reverse1 = function(str1) {
  let lettersArray = str1.split("");
  let reversedLettersArray = lettersArray.reverse();
  return reversedLettersArray.join("");
}
console.log(reverse1("launchCode"));
console.log(reverse("LaunchCode"));

let add = function(a, b) {
  return a + b;
};
console.log(add(1, 1));
console.log("==================");
