let nums = [3.14, 42, 2811];
let timesTwo = function (n) {
    return n*2;
}
let doubled = nums.map(timesTwo);
console.log(nums);
console.log(doubled);
console.log("================");
let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
// and pass it to .map()
let firstInitials = names.map();

console.log(firstInitials);
