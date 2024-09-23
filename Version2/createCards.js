    let counter = 0;

function createCards(name, hitpoints, initiative, type, counterNum){

    let uniqueID = generateID()

    //Seting up Element Types.
    const newDiv = document.createElement("div");
    const hpBarWrapper = document.createElement("button");
    const redBar = document.createElement("div");
    const greenBar = document.createElement("div");
    const hpTextWrapper = document.createElement("button");
    const hpLabel =  document.createElement("p");
    const hpValue =  document.createElement("p");
    const hpValueOriginal =  document.createElement("p");
    const nameElement = document.createElement("p");
    const spanElement = document.createElement('span');
    const initiativeElement = document.createElement("p");
    const initiativeElementValue = document.createElement("p");

    //card classes
    newDiv.classList.add("card");
    newDiv.classList.add(type+"Card");
    newDiv.setAttribute('id', uniqueID)

    //initiative 
    const initiativeLabel = document.createTextNode("initiative");
    const initiativeValue = document.createTextNode(initiative);

    initiativeElement.appendChild(initiativeLabel);
    initiativeElementValue.appendChild(initiativeValue);

    initiativeElement.classList.add("initiativeLabel");
    initiativeElementValue.classList.add("initiativeValue");

    //card name
    const nameTextNode = document.createTextNode(name); //Create a text block for Name
    const idTextNode = document.createTextNode(` #${counterNum}`);  //Create a text block for ID

    nameElement.appendChild(nameTextNode); //Append the text block to the p element.
    spanElement.appendChild(idTextNode); //Append the text block to the span element.

    nameElement.appendChild(spanElement)
    spanElement.classList.add('hexColor'); //Add a class to the span element, name the span class hexColor.
    nameElement.classList.add("name"); //Add a class to the p element, name the class name.

    //hitPoints Bar
    hpBarWrapper.classList.add("hpBarWrapper");
    redBar.classList.add("redBar");
    greenBar.classList.add("greenBar");

    hpBarWrapper.appendChild(redBar);
    hpBarWrapper.appendChild(greenBar);

    hpBarWrapper.addEventListener('click', openHitpoints);
    hpBarWrapper.addEventListener('click', () => openHitpoints(this));

    //hitPoints Label & Value
    const hpTextNodelabel = document.createTextNode("HP")
    const hpTextNodeCurrentValue = document.createTextNode(`${hitpoints}`);
    const hpTextNodeOriginalValue = document.createTextNode(`/${hitpoints}`);
    
    hpLabel.appendChild(hpTextNodelabel); //HP Label
    hpValue.appendChild(hpTextNodeCurrentValue); //HP Current Value
    hpValueOriginal.appendChild(hpTextNodeOriginalValue); //HP Original Value

    hpTextWrapper.appendChild(hpLabel);
    hpTextWrapper.appendChild(hpValue);
    hpTextWrapper.appendChild(hpValueOriginal);

    hpLabel.classList.add("hpLabel");
    hpValue.classList.add("hpValue");
    hpValueOriginal.classList.add("hpValueOriginal");
    hpTextWrapper.classList.add("hpTextWrapper");
    hpTextWrapper.addEventListener('click', () => openHitpoints(uniqueID));

    document.getElementById("cardWrapper").appendChild(newDiv);
    document.getElementById(uniqueID).appendChild(initiativeElement);
    document.getElementById(uniqueID).appendChild(initiativeElementValue);
    document.getElementById(uniqueID).appendChild(nameElement);
    document.getElementById(uniqueID).appendChild(hpBarWrapper);
    document.getElementById(uniqueID).appendChild(hpTextWrapper);
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

//Generates unique ID.
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


addNumID("soldier", 33, 2, 3, "entity");
addNumID("General", 12, 1, 2, "character");
addNumID("Private", 20, 4, 1, "character");
addNumID("Sailor", 40, 5, 1, "playerCharacter");
addNumID("Semiramis", 40, 5, 1, "playerCharacter");