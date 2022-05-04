class Ninja {
    constructor(name, health, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;

    }
    sayName() {
        console.log(this.name)
    }
    showStats() {
        console.log(`The stats are name: ${this.name}, strength: ${this.strength}, speed: ${this.speed}, health: ${this.health} `)
    }
    drinkSake() {
        this.health += 10;
    }
}

class Sensi extends Ninja {
    constructor(name, wisodm=10) {
        super(name, 200, 10, 10);
        this.wisdom = wisdom;
    }
    speakWisdom() {
        super.drinkSake();
        console.log('this is a wise message')
    }
}