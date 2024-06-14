// Declare and assign the variables below
let shuttleName = 'Determination'
let shuttleSpeedMph = 17500
let distanceToMarsKmh = 255000000
let distanceToMoonKmh = 384400
let MilesPerKm = 0.621
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName, shuttleName)
console.log(typeof shuttleSpeedMph, shuttleSpeedMph)
console.log(typeof distanceToMarsKmh, distanceToMarsKmh)
console.log(typeof distanceToMoonKmh, distanceToMarsKmh)
console.log(typeof MilesPerKm, MilesPerKm)
console.log("step 1 ----------------------------")

// Calculate a space mission below
let milesToMars = distanceToMarsKmh * MilesPerKm
let hoursToMars = milesToMars / shuttleSpeedMph
let daysToMars = hoursToMars / 24
console.log(typeof milesToMars, milesToMars)
console.log(typeof hoursToMars, hoursToMars)
console.log(typeof daysToMars, daysToMars)

// Print the results of the space mission calculations below
// milesToMars = 158355000
// hoursToMars = 9048.857142857143
// daysToMars = 377.0357142857143

// Calculate a trip to the moon below
console.log("step 2 ----------------------------")
let milesToMoon = distanceToMoonKmh * MilesPerKm
let hoursToMoon = milesToMoon / shuttleSpeedMph
let daysToMoon = hoursToMoon / 24
console.log(typeof milesToMoon, milesToMoon)
console.log(typeof hoursToMoon, hoursToMoon)
console.log(typeof daysToMoon, daysToMoon)
console.log("end -------------------------------")

// Print the results of the trip to the moon below
// milesToMoon = 238712.4
// hoursToMoon = 13.640708571428257
// daysToMoon = 0.5683628571428571

console.log('ignore-------------------')

//booleanConversion

console.log(Boolean('True'))
console.log(Boolean('TRUE'))
console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean(''))
console.log(Boolean('launchCode'))

//checkYourUnderstading

//underWhichConditionalDoesBooleanConvertAStringToTrue?
//1.OnlyWhenTheStringIs"True".

console.log(Boolean('True'))
