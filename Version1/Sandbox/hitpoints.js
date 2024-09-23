let currentID = "";


function hitPoints(inputValue, buttonValue){
    let getType = buttonValue; //Heal or DMG.
    let getHitpoints = inputValue.value; // Input type value.

    let getDiv = document.getElementById(currentID); //Character unique id.
    let hitPoints = getDiv.querySelector('.hpValue'); //Get Current Hitpoints
    let hitPointsOriginal = getDiv.querySelector('.hpValueOriginal');

    if(getType == "Heal"){
        let u = Number(getHitpoints) + Number(hitPoints.innerHTML);
        document.getElementById("hitpointsCurrent").innerHTML = (u);
        hitPoints.innerHTML = u;
        document.getElementById('hitpointsInput').value = '';

        updateHpBar(u, hitPointsOriginal);
    }else{
        let p = Number(hitPoints.innerHTML) - Number(getHitpoints);
        document.getElementById("hitpointsCurrent").innerHTML = (p);
        hitPoints.innerHTML = p;
        document.getElementById('hitpointsInput').value = '';
        
        updateHpBar(p, hitPointsOriginal);
    }
}

function closeHitpoints(){
    document.getElementById("hitpointsContainerID").style.display = "none";
}

function openHitpoints(x){
    let getDiv = document.getElementById(x);
    let hitPoints = getDiv.querySelector('.hpValue').innerHTML;
    let hitPointsOriginal = getDiv.querySelector('.hpValueOriginal').innerHTML;

    currentID = x;

    document.getElementById("hitpointsContainerID").style.display = "flex";

    document.getElementById("hitpointsCurrent").innerHTML = (hitPoints);
    document.getElementById("hitpointsOriginal").innerHTML = (hitPointsOriginal);

}

function updateHpBar(part, total){
    let getDiv = document.getElementById(currentID); //Character unique id.
    let greenBar = getDiv.querySelector('.greenBar'); //Get Current Hitpoints

    let totalVal = Number(total.innerHTML.slice(-2)) //Gets the last 2 letters of the Original Hp text content, changes it to number. 
    let percentage = (part / totalVal) * 100; // Turns damage / heal into a %.

    if(percentage > 100){
        greenBar.style.width = `100%`
        greenBar.style.backgroundColor = "#2a97cc"
    }else{
        greenBar.style.width = `${percentage}%`
        greenBar.style.backgroundColor = "#18a733"
    }
}