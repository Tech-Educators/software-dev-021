// this is rubbish!
/*
const obi = "dog";
const bella = "dog";

const obiLegs = 4;
const bellaLegs = 4;

const obiNoise = "rarf";
const bellaNoise = "frarf";

const obiObj = { name: "Obi", legs: obiLegs, noise: obiNoise };
const bellaObj = { name: "Bella", legs: bellaLegs, noise: bellaNoise };
*/

// ANIMAL FACTORY
class Animal {
  // constructor function: this function runs once, and MAKES a new animal
  constructor(animalName, numLegs, noise) {
    // what properties does the "Animal" need?
    this.name = animalName;
    this.legs = numLegs;
    this.noise = noise;
  }

  speak() {
    console.log(`${this.name} says ${this.noise}`);
  }
}

// CREATE LIFE
const obi = new Animal("Obi", 4, "rarf"); // dog
const bella = new Animal("Bella", 4, "rarf"); // dog
const ruby = new Animal("Ruby", 4, "rarf"); // dog
const gimli = new Animal("Gimli", 4, "rarf"); // dog
const shroom = new Animal("Shroom", 4, "MEEP"); // guinea pig
const tybalt = new Animal("Tybalt", 4, "MEEP"); // guinea pig
const mobie = new Animal("Mobie", 4, "rarf"); // dog
const vicky = new Animal("Vicky", 6, "ststsftsftsftsf"); // ant
const log = new Animal("Log", 0, "log"); // log

vicky.speak(); // Vicky says ststsftsftsftsf
log.speak(); // log says log

// What if we want to make a bnew type of animal, that does more than just what Animal does?
class Cat extends Animal {
  constructor(animalName, numLegs, noise, livesLeft) {
    super(animalName, numLegs, noise);
    this.livesLeft = livesLeft;
  }

  gainLife() {
    this.livesLeft++;
    console.log(`${this.name} now has ${this.livesLeft} lives left!`);
  }
}

const leonardo = new Cat("Leonardo", 4, "meow", 5); // cat
const chiji = new Cat("Chiji", 4, "rameowrf", 9); // cat

console.log(leonardo);
console.log(chiji);

chiji.speak();

console.log(leonardo.livesLeft);
leonardo.gainLife();
console.log(leonardo.livesLeft);
