const Elevator = require('./elevator.js');
const Person = require(`./person.js`);


let myElevator = new Elevator();
myElevator.start();
myElevator.update();
myElevator.floorUp();
myElevator.update();
