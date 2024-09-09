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

    
    //Checks radio options, then calls different form functions, passes the form data to the called function.
    if(radioEntity.checked == true){
        entity(form);
    }else if(radioCharacter.checked == true){
        character(form);
    }else if(radioPlayerCharacter){
        playerCharacter(form);
    }

    //Entity function
    function entity(){

        //Setting up variables to the form
        let entityNameVal = formData.querySelector('[name="entityName"]');
        let entityNumVal =  formData.querySelector('[name="entityNum"]');
        let entityHitpointsVal = formData.querySelector('[name="entityHitPoints"]');
        let entityIntBonusVal = formData.querySelector('[name="entityIntBonus"]');

        //Changes entity number value to intiger.
        let num = Number(entityNumVal.value);

        //Stores error messages, used for the submit action. 
        let array = [];


        if(entityNameVal, array){
            // Value for checking, Name for error display, Array for error store.
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
            addNumID(entityNameVal.value, entityHitpointsVal.value, entityIntBonusVal.value, num, "entity" )
        }
    }
    //Entity Character function
    function character(){
        let entityNameVal = formData.querySelector('[name="entityName"]');
        let entityHitpointsVal = formData.querySelector('[name="entityHitPoints"]');
        let entityIntBonusVal = formData.querySelector('[name="entityIntBonus"]');

        let array = [];

        //Checks Name for empty or Duplicate
        if(entityNameVal, array){
            checkName(entityNameVal.value, entityNameVal.name, array);
        }
        //Check Hitpoints for empty or non digits.
        if(entityHitpointsVal, array){
            checkHitPoints(entityHitpointsVal.value, entityHitpointsVal.name, array);
        }
        //Check for non digits.
        if(entityIntBonusVal, array){
            checkInitiativeBonus(entityIntBonusVal.value, entityIntBonusVal.name, array);
        }

        if (array.length == 0){
            createCards(entityNameVal.value, entityHitpointsVal.value, entityIntBonusVal.value, "character", 1 )
        }
    }
    //Entity Character function
    function playerCharacter(){
        let entityNameVal = formData.querySelector('[name="entityName"]');

        let array = [];


        if(entityNameVal, array){
            checkName(entityNameVal.value, entityNameVal.name, array);
        }

        if (array.length == 0){
            createCards(entityNameVal.value, 00, 00, "playerCharacter", 1)
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

    let duplicateCheck = checkDuplicateName(value)

    if(!value){
        
        arrayPush(array, "Name Error")
    }else if(!duplicateCheck){
        console.log(duplicateCheck);
        document.getElementById(`${name}Error`).textContent="Name already in use.";
        arrayPush(array, "Name Duplicate Error")
    }else{
        document.getElementById(`${name}Error`).innerHTML = '';
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
function checkDuplicateName(name){
    let names = document.getElementsByClassName("nameP");

    for(let i = 0; i < names.length; i++){
        if(name == names[i].innerHTML){
            console.log("duplicate");
            return false;
        }
    }
    return true;
}
