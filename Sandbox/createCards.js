    let counter = 0;


function createCards(name, hitpoints, initiative, type, counterNum){

    let uniqueID = generateID()

    //Seting up Element Types.
    const newDiv = document.createElement("div");
    const newTextName = document.createElement("p")
    const newTextNameID = document.createElement("p")
    const newTextInitiative = document.createElement("p")
    const newTextHitpoints = document.createElement("p")
    const newTextEntityType = document.createElement("p")

    //card classes
    newDiv.classList.add("card");
    newDiv.classList.add(type+"Card");
    newDiv.setAttribute('id', uniqueID)
    //card name
    const textNodeName = document.createTextNode(name);
    newTextName.appendChild(textNodeName);
    newTextName.classList.add("nameP");
    //card name ID
    const textNodeNameID = document.createTextNode(counterNum);
    newTextNameID.appendChild(textNodeNameID);
    newTextNameID.classList.add("nameId");
    //card initiative
    const textNodeInitiative = document.createTextNode(initiative);
    newTextInitiative.appendChild(textNodeInitiative);
    newTextInitiative.classList.add("initiative");
    //card hp
    const textNodeHitPoints = document.createTextNode(hitpoints);
    newTextHitpoints.appendChild(textNodeHitPoints);
    newTextHitpoints.classList.add("hitpoints");
    //card entity num
    const textNodeEntityType = document.createTextNode(type);
    newTextEntityType.appendChild(textNodeEntityType);
    
    document.getElementById("cardWrapper").appendChild(newDiv);
    document.getElementById(uniqueID).appendChild(newTextName);
    document.getElementById(uniqueID).appendChild(newTextNameID);
    document.getElementById(uniqueID).appendChild(newTextInitiative);
    document.getElementById(uniqueID).appendChild(newTextHitpoints);
    document.getElementById(uniqueID).appendChild(newTextEntityType);
}

//Adds number ID for when an entity is created multiple times. 
function addNumID(name, hitpoints, initiative, entityNum, type){
    //Adds a number ID, multiple entities of the same time would get an extra number. ex soldier #1
    for (let counterNum = 1; counterNum < entityNum + 1; counterNum++) {
        //For loop, takes the entity number (how many you want) and uses the counter number as ID. 
        //Check name, checks if the name is already in use, if it is then a letter is added. ez Soldier A #1
        createCards(name, hitpoints, initiative, type, counterNum, checkName);
        
      } 
}

//Generates a random number ID.
//Currently faulty.
function generateID(){

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let timestamp = Date.now();
    let getSeconds = new Date().getSeconds();
    let randomNum = alphabet[Math.floor(Math.random() * 23)];
    let uniqueNum = (timestamp + counter++).toString(36);

    let uniqueNumberFinal =  uniqueNum + randomNum + getSeconds;

    return uniqueNumberFinal;
}
addNumID("soldier", 33, 2, 4, "entity");