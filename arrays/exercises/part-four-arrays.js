let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
console.log("===========================================================================================================");
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];
console.log("===========================================================================================================");
console.log(holdCabinet1);
console.log("===========================================================================================================");
console.log(holdCabinet2);
console.log("===========================================================================================================");
//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
console.log(holdCabinet1.concat(holdCabinet1));
console.log("===========================================================================================================");
console.log(holdCabinet1);
console.log("===========================================================================================================");
console.log(holdCabinet2);
console.log("===========================================================================================================");
console.log('No, it does not alter the original arrays. It has only returned what the new array would contain.');
console.log("===========================================================================================================");
//2) Print a slice of two elements from each array. Does slice alter the original arrays?
console.log(holdCabinet1.slice(0,3));
console.log("===========================================================================================================");
console.log(holdCabinet1);
console.log("===========================================================================================================");
console.log(holdCabinet2.slice(0,3));
console.log("===========================================================================================================");
console.log(holdCabinet2);
console.log("===========================================================================================================");
console.log("No, This method does not alter the original array. It only returns what the new array would contain.");
console.log("===========================================================================================================");

//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
holdCabinet1.reverse();
console.log("===========================================================================================================");
console.log(holdCabinet1);
console.log("===========================================================================================================");
holdCabinet2.sort();
console.log("===========================================================================================================");
console.log(holdCabinet2);
console.log("===========================================================================================================");
console.log("The diffrence between these two methods is:\n'reverse' changes the array and shows the contents reversed\n'sort' changes the way elements are arranged starting with numerical-oreder (0-100...) then alphabetical-order(A-Z)");
console.log("===========================================================================================================");