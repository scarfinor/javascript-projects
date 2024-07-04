function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 
 for (i=0; i < 3; i++){
   console.log(randomSelection(happiness));
   console.log(randomSelection(words));
 };
 console.log("========================");
 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
 //b) Have the code randomly pick one array, and then print 2 random items from it.
 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.
 function randomSelection2(arr){
  let index = Math.floor(Math.random()*arr.length);
    return arr[index];
 }
  let happiness1 = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];

  let words1 = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
  
  let random = [happiness1, words1];

  for (i=0; i<1; i++){
      console.log(randomSelection2(random));
  }
  console.log("------------------------");
    for(i=0; i<2; i++){
      console.log(randomSelection(random[i]));
 };