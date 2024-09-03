//Get data for Card & Check for Errors
function submitFunction(formData){

    let form = formData;

    let radioEntity = formData.querySelector('[id="entityID"]');
    let radioCharacter = formData.querySelector('[id="characterID"]');
    let radioPlayerCharacter = formData.querySelector('[id="playerCharacterID"]');


    
}

function resetForm(){
    document.getElementById("form").reset()
}

function createTypeFunct(x){
    console.log(x);
}

function entity(formData){
    let entityNameVal = formData.querySelector('[name="entityName"]');
    let entityNumVal =  formData.querySelector('[name="numOfEntities"]');
    let entityHitpointsVal = formData.querySelector('[name="hitPoints"]');
    let entityIntBonusVal = formData.querySelector('[name="intBonus"]');

    if((entityNameVal.value) && (entityHitpointsVal.value) && (entityNumVal.value) && (radioEntity.checked || radioCharacter.checked || radioPlayerCharacter.checked)){
        if(entityNameVal.value){
            document.getElementById("entityNameError").innerHTML = '';
        }
        if(entityNumVal.value){
            document.getElementById("entityNumError").innerHTML = '';
        }
        if(entityHitpointsVal.value){
            document.getElementById("entityHitPointsError").innerHTML = '';
        }
        if(radioEntity.checked || radioCharacter.checked || radioPlayerCharacter.checked){
            document.getElementById("entityRadioError").innerHTML = '';
        }

    }else{
        if(!entityNameVal.value){
            document.getElementById("entityNameError").textContent="Name needed, minimun 1 character.";
        }
        if(!entityNumVal.value){
            document.getElementById("entityNumError").textContent="Entity needed, minimun.";
        }
        if(!entityHitpointsVal.value){
            document.getElementById("entityHitPointsError").textContent="Minimun 1 HP needed.";
        }
        if(!radioEntity.checked || radioCharacter.checked || radioPlayerCharacter.checked){
            document.getElementById("entityRadioError").textContent="Entity type needed.";
        }
    }
}

function character(formData){
    let entityNameVal = formData.querySelector('[name="entityName"]');
    let entityHitpointsVal = formData.querySelector('[name="hitPoints"]');
    let entityIntBonusVal = formData.querySelector('[name="intBonus"]');

    if((entityNameVal.value) && (entityHitpointsVal.value)){
        if(entityNameVal.value){
            document.getElementById("entityNameError").innerHTML = '';
        }
        if(entityHitpointsVal.value){
            document.getElementById("entityHitPointsError").innerHTML = '';
        }

    }else{
        if(!entityNameVal.value){
            document.getElementById("entityNameError").textContent="Name needed, minimun 1 character.";
        }
        if(!entityHitpointsVal.value){
            document.getElementById("entityHitPointsError").textContent="Minimun 1 HP needed.";
        }
    }
}

function playerCharacter(formData){
    let entityNameVal = formData.querySelector('[name="entityName"]');

    if((entityNameVal.value) && (entityHitpointsVal.value) && (entityNumVal.value) && (radioEntity.checked || radioCharacter.checked || radioPlayerCharacter.checked)){
        if(entityNameVal.value){
            document.getElementById("entityNameError").innerHTML = '';
        }

    }else{
        if(!entityNameVal.value){
            document.getElementById("entityNameError").textContent="Name needed, minimun 1 character.";
        }
    }
}

/*function submitFunction(formData){

    let form = formData;

    let entityNameVal = formData.querySelector('[name="entityName"]');
    let entityNumVal =  formData.querySelector('[name="numOfEntities"]');
    let entityHitpointsVal = formData.querySelector('[name="hitPoints"]');
    let entityIntBonusVal = formData.querySelector('[name="intBonus"]');

    let radioEntity = formData.querySelector('[id="entityID"]');
    let radioCharacter = formData.querySelector('[id="characterID"]');
    let radioPlayerCharacter = formData.querySelector('[id="playerCharacterID"]');

    if((entityNameVal.value) && (entityHitpointsVal.value) && (entityNumVal.value) && (radioEntity.checked || radioCharacter.checked || radioPlayerCharacter.checked)){
        if(entityNameVal.value){
            document.getElementById("entityNameError").innerHTML = '';
        }
        if(entityNumVal.value){
            document.getElementById("entityNumError").innerHTML = '';
        }
        if(entityHitpointsVal.value){
            document.getElementById("entityHitPointsError").innerHTML = '';
        }
        if(radioEntity.checked || radioCharacter.checked || radioPlayerCharacter.checked){
            document.getElementById("entityRadioError").innerHTML = '';
        }

    }else{
        if(!entityNameVal.value){
            document.getElementById("entityNameError").textContent="Name needed, minimun 1 character.";
        }
        if(!entityNumVal.value){
            document.getElementById("entityNumError").textContent="Entity needed, minimun.";
        }
        if(!entityHitpointsVal.value){
            document.getElementById("entityHitPointsError").textContent="Minimun 1 HP needed.";
        }
        if(!radioEntity.checked || radioCharacter.checked || radioPlayerCharacter.checked){
            document.getElementById("entityRadioError").textContent="Entity type needed.";
        }
    }

    //resetForm();
}*/ 