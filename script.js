/************************************
*****Part 1: Humble Beginnings*******
*************************************/
console.log(`
*************************************
****************Part 1***************
*************************************`
);
//prepared objects
const adventurer_obj = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    //nested object
    companion: {
        name: "Leo",
        type: "Cat",
        //companion's friend
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: ["small hat", "sunglasses"]
        }
    },
    //method for the object
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}
//log the 1st inventory object
console.log(adventurer_obj.inventory[0]);
//show all inventory:
adventurer_obj.inventory.forEach((item) => { console.log(`${adventurer_obj.name} has ${item}`) });

//show an object
console.log(adventurer_obj)

//call object's method
adventurer_obj.roll();
adventurer_obj.roll();
adventurer_obj.roll();

/********************************************* 
 * *******Part 2: Class Fantasy***************
**********************************************/
console.log(`
*************************************
****************Part 2***************
*************************************`
);
//main class
class Character {
    //add static properties
    static MAX_HEALTH = 100
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
        //character could have companions
        this.companions = [];
    }
    //methods
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
    addCompanions(...companion) {
        this.companions.push(...companion)
    }
    addToInventory(...items) {
        this.inventory.push(...items)
    }
}

//recreate adventurer with classes:
const robin_character = new Character("Robin");
robin_character.inventory = ["sword", "potion", "artifact"];
robin_character.companion = new Character("Leo");
robin_character.companion.type = "Cat";
robin_character.companion.companion = new Character("Frank");
robin_character.companion.companion.type = "Flea";
robin_character.companion.companion.inventory = ["small hat", "sunglasses"];
//check what we have
console.log(robin_character)

//check class method:
robin_character.roll();
robin_character.companion.roll();
robin_character.companion.companion.roll();

/********************************************* 
 * *******Part 3: Class Features**************
**********************************************/
console.log(`
*************************************
****************Part 4***************
*************************************`
);
//inheritance example
class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"]
    constructor(name, role) {
        super(name);
        // Adventurers have specialized roles.
        if (Adventurer.ROLES.includes(role)) { this.role = role; }
        else {
            console.log(`Roles should be from Adventurer.ROLES list. Cannot define ${role}`);
            this.type = undefined
        }

        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
    //adventurer info
    toString() {
        return `${this.name} is ${this.role}. Health: ${this.health}. Inventory: ${this.inventory}.`
    }
}

class Companion extends Character {
    static TYPES = ["Cat", "Flea", "Dog", "Horse"]
    constructor(name, type) {
        super(name);
        // Companions have specialized types.
        if (Companion.TYPES.includes(type)) { this.type = type; }
        else {
            console.log(`Types should be from Companion.TYPES list. Cannot define ${type}`);
            this.type = undefined
        }

    }
    toString() {
        return `Companion ${this.name} is ${this.type}. Health: ${this.health}`
    }
}

const robin = new Adventurer("Robin", "archer");
//robin.inventory.push("sword", "potion", "artifact");
robin.addToInventory("sword", "potion", "artifact");
const leo = new Companion("Leo", "Cat")
//robin.companions.push(leo);
robin.addCompanions(leo)
const frank = new Companion("Frank", "Flea")
frank.addToInventory("small hat", "sunglasses");
//frank.inventory.push("small hat", "sunglasses");
//leo.companions.push(frank)
leo.addCompanions(frank)

console.log(robin)
console.log(robin.companions)
console.log(leo.companions)

/********************************************* 
 * *******Part 4: Class Uniforms**************
**********************************************/
console.log(`
*************************************
****************Part 4***************
*************************************`
);
//create new objects using static properties
const newRobin = new Adventurer("Robin", Adventurer.ROLES[2]);
newRobin.addToInventory("sword", "potion", "artifact");
const newLeo = new Companion("Leo", Companion.TYPES[0]);
newRobin.addCompanions(newLeo)
const newFrank = new Companion("Frank", Companion.TYPES[1])
newFrank.addToInventory("small hat", "sunglasses");
newLeo.addCompanions(newFrank);

console.log(newRobin)