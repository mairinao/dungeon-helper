function createCards(nameVal, initiativeBonusVal, hitpointsVal, numEntitiesVal){
    let name = nameVal;
    let initiative = initiativeBonusVal;
    let hitpoints = hitpointsVal;
    let numEntities = numEntitiesVal;

    const newDiv = document.createElement("div");
    const newTextName = document.createElement("p")
    const newTextInitiative = document.createElement("p")
    const newTextHitpoints = document.createElement("p")
    const newTextEntityNum = document.createElement("p")

    //card classes
    newDiv.classList.add("card");
    newDiv.classList.add(name);
    newDiv.setAttribute('id', 'cardID')

    //card name
    const textNodeName = document.createTextNode(name);
    newTextName.appendChild(textNodeName);
    //card initiative
    const textNodeInitiative = document.createTextNode(initiative);
    newTextInitiative.appendChild(textNodeInitiative);
    //card hp
    const textNodeHitPoints = document.createTextNode(hitpoints);
    newTextHitpoints.appendChild(textNodeHitPoints);
    //card entity num
    const textNodeEntityNum = document.createTextNode(numEntities);
    newTextEntityNum.appendChild(textNodeEntityNum);
    
    document.getElementById("cardWrapper").appendChild(newDiv);
    document.getElementById("cardID").appendChild(newTextName);
    document.getElementById("cardID").appendChild(newTextInitiative);
    document.getElementById("cardID").appendChild(newTextHitpoints);
    document.getElementById("cardID").appendChild(newTextEntityNum);
}

createCards("entityCard", 3, "33/33", 7)