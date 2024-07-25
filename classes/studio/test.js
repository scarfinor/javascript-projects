class Message {
  constructor(name, commands) {
    this.name = name;
    if (!name) {
      throw Error("Name required.");
    }
    this.name = name;
    this.commands = commands;
  }
}

class Rover {
  constructor(position, mode = "NORMAL", generatorWatts = 110) {
    this.position = position;
    this.mode = mode;
    this.generatorWatts = generatorWatts;
  }
  receiveMessage(message) {
    let obj = message;
    roverStatus = {
      position: this.position,
      mode: this.mode,
      generatorWatts: this.generatorWatts,
    };
    results.push(roverStatus);
    results.push(commands);
    return obj;
  }
}

class Command {
  constructor(commandType, value) {
    this.commandType = commandType;
    if (!commandType) {
      throw Error("Command type required.");
    }
    this.value = value;
  }
}

let commands = [
  new Command("MODE_CHANGE", "LOW_POWER"),
  new Command("STATUS_CHECK"),
];
let message = new Message("Test message with two commands", commands);
let rover = new Rover(98382); // Passes 98382 as the rover's position.
let results = [];
roverStatus = {};
message.results = results;
console.log(rover.receiveMessage());
let response = rover.receiveMessage(message);
console.log(commands[1]);
console.log(response);
console.log(results[0]);
console.log(results[1][0]);
console.log(results[1][1]);
console.log(roverStatus);
console.log(message.results);
console.log(rover.receiveMessage(message).results);
