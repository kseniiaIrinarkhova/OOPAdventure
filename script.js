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
    }
    //methods
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}

//recreate adventurer with classes:
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];
//check what we have
console.log(robin)

//check class method:
robin.roll();
robin.companion.roll();
robin.companion.companion.roll();

