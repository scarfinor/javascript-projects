//Try adding new properties inside constructor.
class Astronaut {
  constructor(name, age, mass) {
    this.name = name;
    this.age = age;
    this.mass = mass;
  }
}

let fox = new Astronaut("Fox", 7, 12);

console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = "red";

console.log(fox);
console.log(fox.age, fox.color);

//Try modifying or adding properties below.

let rhino = new Astronaut("Reggie", 8, 175);

console.log(rhino);
console.log(rhino.age, rhino.height);

rhino.age = 22;
rhino.height = 142;

console.log(rhino);
console.log(`Age:${rhino.age}\nHeight:${rhino.height}`);
console.log(
  "======================================================================="
);

class Car {
  constructor(make, model, year, color, mpg) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.mpg = mpg;
  }
}

let myCar = new Car("Chevy", "Astro", 1985, "gray", 20);

console.log(typeof myCar.year);

let myCar2 = new Car("Tesla", "Model S", 2019);

console.log(myCar2);
