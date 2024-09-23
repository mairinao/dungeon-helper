let dataArray = new Map();

function collectData(name, type, quantity, initiativeBonus, hitpoints) {
    dataArray.set(name, [type, quantity, initiativeBonus, hitpoints]);
}

collectData("Soldier", "entity", "4", "1", "33");
collectData("Mage", "character", "1", "2", "43");


let firstLevelKeys = Array.from(dataArray.keys());


firstLevelKeys.forEach(key => {
    let values = dataArray.get(key);

    let name = key;
    let type = values[0];
    let quantity = values[1];
    let initiativeBonus = values[2]; 
    let hitpoints = values[3];     
    console.log(name, type, quantity, initiativeBonus, hitpoints);
});
