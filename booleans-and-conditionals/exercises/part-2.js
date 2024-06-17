let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

// 3) Write conditional expressions to satisfy the following safety rules:


// a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".
if (crewStatus) {
    console.log('crewReady')
  } else {
    console.log('crewNotReady')
  }

// b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"
if (computerStatusCode === 200) {
    console.log('pleaseStamdBy.computerIsRebooting')
    } else if (computerStatusCode === 400) {
    console.log('success!computerOnline.')
    } else {
    console.log('ALERT: computerOffline!')
    }

// c) If shuttleSpeed is > 17,500, print "ALERT: Escape velocity reached!" Else if shuttleSpeed is < 8000, print "ALERT: Cannot maintain orbit!" Else print "Stable speed".
if (shuttleSpeed > 17500) {
    console.log('ALERT: escapeVelocityReached!')
    } else if (shuttleSpeed <8000) {
        console.log('ALERT: cannotMaintainOrbit!')
    } else {
            console.log('stableSpeed')
    }

// 4) PREDICT: Do the code blocks shown in the 'predict.txt' file produce the same result?
if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
    console.log("all systems go");
 } else {
    console.log("WARNING. Not ready");
 }
 if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
    console.log("WARNING. Not ready");
 } else {
    console.log("all systems go");
 }
console.log('yes')