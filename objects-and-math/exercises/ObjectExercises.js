let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};
superChimpOne["astronautID"] = 1;
superChimpOne["move"] = Math.floor(Math.random()*11);
console.log(superChimpOne);
console.log("==================");
let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};
salamander["astronautID"] = 3;
salamander["move"] = Math.floor(Math.random()*11);
console.log(salamander);
console.log("==================");
let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};
superChimpTwo["astronautID"] = 5;
superChimpTwo["move"] = Math.floor(Math.random()*11);
console.log(superChimpTwo);
console.log("==================");
let dogOne = {
   name: "Leroy",
   species: "Begal",
   mass: 14,
   age: 5
};
dogOne["astronautID"] = 7;
dogOne["move"] = Math.floor(Math.random()*11);
console.log(dogOne);
console.log("==================");
let waterBearOne = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};
waterBearOne["astronautID"] = 10;
waterBearOne["move"] = Math.floor(Math.random()*11);
console.log(waterBearOne);
console.log("==================");
let crew = [superChimpOne, superChimpTwo, dogOne, salamander, waterBearOne];
function crewReports(object) {
      console.log(object.name + " is a " + object.species + ". They are " + object.age + " years old and " + object.mass + " kilograms. Their ID is " + object.astronautID + ".");
   return object;
   };
console.log(crewReports(waterBearOne));
console.log("==================");
function fitnessTest(candidates){
   let results = [], numSteps, turns;

   for (let i = 0; i < candidates.length; i++){
       numSteps = 0;
       turns = 0;

    while(numSteps < 20){
       numSteps += candidates[i].move;
       turns++;
    }

    results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
}

return results;
}
console.log(fitnessTest(crew));

// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!
