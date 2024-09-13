function hitPoints(inputType){
    let inputValue = document.getElementById("hitpointsInput").value;
    let getHitpoints = this.parentElement.children[3].innerHTML;

    if(inputType == "heal"){
        let heal = inputValue + getHitpoints;
        document.getElementById("hitpointsCurrent").innerHTML = heal;
    }else{
        let damage = getHitpoints - inputValue;
        document.getElementById("hitpointsCurrent").innerHTML = damage;
    }
}

function one(){
    console.log("Hello")
}

function closeHitpoints(){
    document.getElementById("hitpointsContainerID").style.display = "none";
}

function openHitpoints(){
    document.getElementById("hitpointsContainerID").style.display = "flex";

 
    let getHitpoints = this.parentElement.children[3].innerHTML

    document.getElementById("hitpointsCurrent").innerHTML = getHitpoints;
    document.getElementById("hitpointsOriginal").innerHTML = `/ ${getHitpoints}`;

}