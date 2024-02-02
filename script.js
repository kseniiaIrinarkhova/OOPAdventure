/************************************
*****Part 1: Humble Beginnings*******
*************************************/

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
        companion:{
            name: "Frank",
            type: "Flea",
            inventory: ["small hat","sunglasses"]
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
adventurer_obj.inventory.forEach((item) =>{console.log(`${adventurer_obj.name} has ${item}`)});

//show an object
console.log(adventurer_obj)

//call object's method
adventurer_obj.roll();
adventurer_obj.roll();
adventurer_obj.roll();

/********************************************* 
 * *******Part 2: Class Fantasy***************
**********************************************/
//main class
class Character {
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
//inheritance example
class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        // Adventurers have specialized roles.
        this.role = role;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");        
    }
    // Adventurers have the ability to scout ahead of them.
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
    //adventurer info
    toString(){
        return `${this.name} is ${this.role}. Health: ${this.health}. Inventory: ${this.inventory}.`
    }
}

class Companion extends Character{
    constructor(name, type) {
        super(name);
        // Companions have specialized types.
        this.type = type;        
    }
    toString(){
        return `Companion ${this.name} is ${this.type}. Health: ${this.health}`
    }
}

const robin = new Adventurer("Robin","archer");
robin.inventory.push("sword", "potion", "artifact");
const leo = new Companion("Leo","Cat")
robin.companions.push(leo);
const frank = new Companion("Frank", "Flea")
frank.inventory.push("small hat", "sunglasses");
leo.companions.push(frank)

console.log(robin)