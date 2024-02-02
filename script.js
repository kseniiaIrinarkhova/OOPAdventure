/************************************ */
/**Part 1: Humble Beginnings */

//prepared objects
const adventurer = {
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
    }
}
//log the 1st inventory object
console.log(adventurer.inventory[0]);
//show all inventory:
adventurer.inventory.forEach((item) =>{console.log(`${adventurer.name} has ${item}`)});