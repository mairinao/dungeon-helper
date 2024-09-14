let dataArray = new Map();

function collectData(name, type, quantity, initiativeBonus, hitpoints) {
    dataArray.set(name, [type, quantity, initiativeBonus, hitpoints]);
}

// Collect the data
collectData("Soldier", "entity", "4", "1", "33");
collectData("Mage", "character", "1", "2", "43");

// Now, get the first-level keys after data has been added
let firstLevelKeys = Array.from(dataArray.keys());

// Loop through the keys and retrieve the data
firstLevelKeys.forEach(key => {
    let values = dataArray.get(key); // Get the array associated with the key

    let name = key;                  // The key itself is the name
    let type = values[0];            // Access the type (1st element in the array)
    let quantity = values[1];        // Access the quantity (2nd element)
    let initiativeBonus = values[2]; // Access the initiative bonus (3rd element)
    let hitpoints = values[3];       // Access the hitpoints (4th element)

    console.log(name, type, quantity, initiativeBonus, hitpoints);
});
