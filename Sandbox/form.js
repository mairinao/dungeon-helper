//Open Form & Reset
function loadForm(x){
    let display = document.getElementById("form").style.display;

    if(display == "flex"){
        document.getElementById("form").style.display = "none";
    }else{
        document.getElementById("form").style.display = "flex";
    }
    
    document.getElementById("form").reset()


    loadFormType("entity");
    clearErrors();  
}
//Close Form & Reset.
function closeForm(){
    document.getElementById("form").style.display = "none";
    document.getElementById("form").reset()

    clearErrors();
}

//Submit Form, errors & checks depending on entity-type form.
function submitFunction(formData){

    let form = formData;
    let radioEntity = formData.querySelector('[id="entityID"]');
    let radioCharacter = formData.querySelector('[id="characterID"]');
    let radioPlayerCharacter = formData.querySelector('[id="playerCharacterID"]');

    

    if(radioEntity.checked == true){
        entity(form);
    }else if(radioCharacter.checked == true){
        character(form);
    }else if(radioPlayerCharacter){
        playerCharacter(form);
    }

    function entity(){
        let entityNameVal = formData.querySelector('[name="entityName"]');
        let entityNumVal =  formData.querySelector('[name="entityNum"]');
        let entityHitpointsVal = formData.querySelector('[name="entityHitPoints"]');
        let entityIntBonusVal = formData.querySelector('[name="entityIntBonus"]');

        let num = Number(entityNumVal.value);

        let array = [];


        if(entityNameVal, array){
            checkName(entityNameVal.value, entityNameVal.name, array);
        }
        if(entityHitpointsVal, array){
            checkHitPoints(entityHitpointsVal.value, entityHitpointsVal.name, array);
        }
        if(entityNumVal, array){
            checkNumberOfEntities(entityNumVal.value, entityNumVal.name, array);
        }
        if(entityIntBonusVal, array){
            checkInitiativeBonus(entityIntBonusVal.value, entityIntBonusVal.name, array);
        }

        if (array.length == 0){
            loop(entityNameVal.value, entityHitpointsVal.value, entityIntBonusVal.value, num, "entity" )
        }
    }
    function character(){
        let entityNameVal = formData.querySelector('[name="entityName"]');
        let entityHitpointsVal = formData.querySelector('[name="entityHitPoints"]');
        let entityIntBonusVal = formData.querySelector('[name="entityIntBonus"]');

        let array = [];


        if(entityNameVal, array){
            checkName(entityNameVal.value, entityNameVal.name, array);
        }
        if(entityHitpointsVal, array){
            checkHitPoints(entityHitpointsVal.value, entityHitpointsVal.name, array);
        }
        if(entityIntBonusVal, array){
            checkInitiativeBonus(entityIntBonusVal.value, entityIntBonusVal.name, array);
        }

        if (array.length == 0){
            loop(entityNameVal.value, entityHitpointsVal.value, entityIntBonusVal.value, 1, "character" )
        }
    }
    function playerCharacter(){
        let entityNameVal = formData.querySelector('[name="entityName"]');

        let array = [];


        if(entityNameVal, array){
            checkName(entityNameVal.value, entityNameVal.name, array);
        }

        if (array.length == 0){
            loop(entityNameVal.value, 1, "playerCharacter" )
        }
    }

}
// Loads Form type.
function loadFormType(x){
    if(x == "entity"){
        document.getElementById('entityAmountItem').style.display = "inline";
        document.getElementById('hitPointsItem').style.display = "inline";
        document.getElementById('intBonusItem').style.display = "inline";

        document.getElementById('entityAmountItemInput').style.display = "inline";
        document.getElementById('hitPointsItemInput').style.display = "inline";
        document.getElementById('intBonusItemInput').style.display = "inline";
    }
    else if(x == "character"){
        document.getElementById('entityAmountItem').style.display = "none";
        document.getElementById('hitPointsItem').style.display = "inline";
        document.getElementById('intBonusItem').style.display = "inline";

        document.getElementById('entityAmountItemInput').style.display = "none";
        document.getElementById('hitPointsItemInput').style.display = "inline";
        document.getElementById('intBonusItemInput').style.display = "inline";
    }
    else if(x == "playerCharacter"){
        document.getElementById('entityAmountItem').style.display = "none";
        document.getElementById('hitPointsItem').style.display = "none";
        document.getElementById('intBonusItem').style.display = "none";

        document.getElementById('entityAmountItemInput').style.display = "none";
        document.getElementById('hitPointsItemInput').style.display = "none";
        document.getElementById('intBonusItemInput').style.display = "none";
    }

    clearErrors();
}

// Checking Input functions.
function checkName(value, name, array){
    if(value){
        document.getElementById(`${name}Error`).innerHTML = '';
    }else{
        document.getElementById(`${name}Error`).textContent="Name needed, minimun 1 character.";
        arrayPush(array, "Name Error")
    }
}

function checkHitPoints(value, name, array){
    if(value){
        checkNaN(value, name, array);
    }else{
        document.getElementById(`${name}Error`).textContent="Minimun 1 HP needed.";
        arrayPush(array, "HP Error")
    }
}

function checkNumberOfEntities(value, name, array){
    if(value){
        checkNaN(value, name, array);
    }else{
        document.getElementById(`${name}Error`).textContent="Minimun 1 entity needed.";
        arrayPush(array, "Entity Num Error")
    }
}

function checkInitiativeBonus(value, name, array){
    if(!value){
        value = 0;
    }else{
        checkNaN(value, name, array);
    }
}
// Check if value is a number.
function checkNaN(x, name, array){
    if(isNaN(x)){ //Not a Number
        document.getElementById(`${name}Error`).textContent="Only numbers allowed.";
        arrayPush(array, `${name} Num Check Error`)
    }else{ //Number
        document.getElementById(`${name}Error`).textContent="";
    }
}
// Clear Errors when switching or opening form.
function clearErrors(){
    document.getElementById("entityNameError").innerHTML = '';
    document.getElementById("entityNumError").innerHTML = '';
    document.getElementById("entityHitPointsError").innerHTML = '';
}
// Push errors into the error array.
function arrayPush(array, errorMsg){
    array.push(errorMsg);
}