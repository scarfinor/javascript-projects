let nums = [3.14, 42, 2811];
let timesTwo = function (n) {
    return n*2;
}
let doubled = nums.map(timesTwo);
console.log(nums);
console.log(doubled);
console.log("================");
let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];
let initals = function (I) {
    return  I = "Jim".indexOf("J");
}
let firstInitials = names.map(initals);

console.log(firstInitials);
