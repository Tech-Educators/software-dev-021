class Player {
  constructor(playerName, health, attack, defense) {
    this.name = playerName;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
  }

  checkHealth() {
    // <-- this is a method
    console.log(`${this.name} has ${this.health} left`);
  }
}

const tim = new Player("Tim", 5, 1, 4);
const bertie = new Player("Bertie", 3, 3, 3);

// create a playable game using the above code
// you will need to add some methods to the Player class
