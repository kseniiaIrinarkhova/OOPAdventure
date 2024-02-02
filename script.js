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