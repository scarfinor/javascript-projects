// Initialize Variables below
let date = 'Monday 2019-03-18';
let time = '10:05:34 AM';
let astronautCount = 7;
let astronautStatus	= 'ready';
let averageAstronautMassKg	= 80.7;
let crewMassKg	= astronautCount * averageAstronautMassKg;
let fuelMassKg	= 760000;
let shuttleMassKg	= 74842.31;
let totalMassKg	= crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius	= -225;
let minimumFuelTemp	= -300;
let maximumFuelTemp	= -150;
let fuelLevel = 1.0; 
let weatherStatus = 'clear';
let preparedForLiftOff = true;
console.log('------------------------------------------------------------------');
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    preparedForLiftOff = true
};
if (astronautCount = true) {
    console.log('All astronauts on board: Cleared for Lift Off')
} else {
    console.log('Scrub Launch')
};  
// add logic below to verify all astronauts are ready
if (astronautStatus = 'ready') {
    preparedForLiftOff = true
};
if ( astronautStatus = true) {
    console.log('Astronaut ready: Cleared for Lift Off')
} else {
    console.log('Scrub Launch')
};
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit) {
    preparedForLiftOff = true
};
if (totalMassKg = true) {
    console.log('Mass within limit: Cleared for Lift Off')
} else {
    console.log('Scrub Launch')
};
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius <= -300 || -150) {
    preparedForLiftOff = true
};
if (fuelTempCelsius = true) {
    console.log('Temperature within range: Cleared for Lift Off')
} else {
    console.log('Scrub Launch')
};
// add logic below to verify the fuel level is at 100%
if (fuelLevel = 1.0) {
    preparedForLiftOff = true
};
if (fuelLevel = true) {
    console.log('Fuel Level 100%: Cleared for Lift Off')
} else {
    console.log('Scrub Launch')
};
// add logic below to verify the weather status is clear
if (weatherStatus = 'clear') {
    preparedForLiftOff = true
};
if (weatherStatus = 'clear') {
    console.log('Weather clear: Cleared for Lift Off')
} else {
    console.log('Scrub Launch')
};
console.log('------------------------------------------------------------------');
console.log('All systems are a go! Initiating space shuttle launch sequence.');
// Verify shuttle launch can proceed based on above conditions
console.log('------------------------------------------------------------------');
console.log(('Date: ') + date);
console.log(('Time: ') + time);
console.log(('Astronaut Count: ') + 7);
console.log(('Crew Mass: ') + crewMassKg);
console.log(('Fuel Mass: ') + fuelMassKg);
console.log(('Shuttle Mass: ') + shuttleMassKg);
console.log(('Weather Status: ') + 'clear');
console.log('------------------------------------------------------------------');
console.log('Enjoy Your Flight');