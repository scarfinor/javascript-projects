//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
  constructor(name, mass, scores) {
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }

  addScore(num) {
    this.scores.push(num);
  }
  average() {
    let sum = 0;
    for (let i = 0; i < this.scores.length; i++) {
      sum += this.scores[i];
    }
    return Math.round((sum / this.scores.length) * 10) / 10;
  }
  status() {
    let stats = "Rejected";
    if (this.average() >= 90) {
      stats = "Accepted";
    } else if (this.average() > 90 && this.average() >= 80) {
      stats = "Reserved";
    } else if (this.average() < 80 && this.average() >= 70) {
      stats = "Probationary";
    }
    return stats;
  }
}

let obj1 = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let obj2 = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let obj3 = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

obj1.addScore(83);

console.log(
  `${
    obj1.name
  } earned an average test score of ${obj1.average()} and has a status of ${obj1.status()}.`
);
console.log(
  `${
    obj2.name
  } earned an average test score of ${obj2.average()} and has a status of ${obj2.status()}.`
);
console.log(
  `${
    obj3.name
  } earned an average test score of ${obj3.average()} and has a status of ${obj3.status()}.`
);

let counter = 0;

while (obj3.status() != "Reserved") {
  obj3.addScore(100);
  counter++;
}

counter = 0;

while (obj3.status() != "Accepted") {
  obj3.addScore(100);
  counter++;
}

obj3.addScore();
console.log(counter);
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
