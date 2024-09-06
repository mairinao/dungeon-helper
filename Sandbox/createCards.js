function createCards(name, hitpoints, initiative, type, counterNum){
    const newDiv = document.createElement("div");
    const newTextName = document.createElement("p")
    const newTextInitiative = document.createElement("p")
    const newTextHitpoints = document.createElement("p")
    const newTextEntityType = document.createElement("p")

    //card classes
    newDiv.classList.add("card");
    newDiv.classList.add(type+"Card");
    newDiv.setAttribute('id', 'cardID' + counterNum)

    //card name
    const textNodeName = document.createTextNode(name + " " + counterNum);
    newTextName.appendChild(textNodeName);
    //card initiative
    const textNodeInitiative = document.createTextNode(initiative);
    newTextInitiative.appendChild(textNodeInitiative);
    //card hp
    const textNodeHitPoints = document.createTextNode(hitpoints);
    newTextHitpoints.appendChild(textNodeHitPoints);
    //card entity num
    const textNodeEntityType = document.createTextNode(type);
    newTextEntityType.appendChild(textNodeEntityType);
    
    document.getElementById("cardWrapper").appendChild(newDiv);
    document.getElementById("cardID" + counterNum).appendChild(newTextName);
    document.getElementById("cardID" + counterNum).appendChild(newTextInitiative);
    document.getElementById("cardID" + counterNum).appendChild(newTextHitpoints);
    document.getElementById("cardID" + counterNum).appendChild(newTextEntityType);
}


function loop(name, hitpoints, initiative, entityNum, type){

    console.log(name, hitpoints, initiative, entityNum, type);

    for (let counterNum = 1; counterNum < entityNum + 1; counterNum++) {
        createCards(name, hitpoints, initiative, type, counterNum)
      } 
}
