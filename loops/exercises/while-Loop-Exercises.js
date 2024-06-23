//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let launchCodeShuttle = [fuelLevel, numberOfAstronauts, altitude];





/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
  const input = require('readline-sync');

  let fuelLevel = input.question("What is the starting fuel level?");
    let i = 5000;
   while (i < 30001) {
    fuelLevel.push(i);
    console.log(fuelLevel);
    }
  

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  let numberOfAstronauts = input.question("What is the number of astronauts?");
  let j = 0; 
  while (j < 8) {
    numberOfAstronauts.push(j);
    console.log(numberOfAstronauts);
  }
  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
let altitude = 0;
let fuelStatus = [launchCodeShuttle[0] - 100, launchCodeShuttle[1] + 1, launchCodeShuttle[2] + 50];
let total = 0;
let k = numberOfAstronauts(j);
let l = 0;

while (l < k && altitude < 2000) {
  total += l;
  fuelStatus.push(l);
  if (fuelStatus(l)) {
    console.log("The shuttle gained an altitude of" + altitude + "km");
  } if (altitude >= 2000 ) {
    console.log("Orbit achieved!");
  } else {
    console.log("Failed to reach orbit.")
  }
  }



/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
