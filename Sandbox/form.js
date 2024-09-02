//Get data for Card & Check for Errors
function myFunction(formData){
    let entityNameVal = formData.querySelector('[name="entityName"]');
    let entityNumVal =  formData.querySelector('[name="numOfEntities"]');
    let entityHitpointsVal = formData.querySelector('[name="hitPoints"]');
    let entityIntBonusVal = formData.querySelector('[name="intBonus"]');

    let radioEntity = formData.querySelector('[id="entityID"]');
    let radioCharacter = formData.querySelector('[id="characterID"]');
    let radioPlayerCharacter = formData.querySelector('[id="playerCharacterID"]');

    if((entityNameVal.value) && (entityHitpointsVal.value) && (entityNumVal.value) && (radioEntity.checked || radioCharacter.checked || radioPlayerCharacter.checked)){
        console.log("name " + entityNameVal.value);
        console.log("int bonus " + entityIntBonusVal.value);
        console.log("hp " + entityHitpointsVal.value);
        console.log("entity Num " + entityNumVal.value);

        console.log(radioEntity.checked);
        console.log(radioCharacter.checked);
        console.log(radioPlayerCharacter.checked);

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
}

function resetForm(){
    document.getElementById("form").reset()
}

function testFunction(){
    document.getElementById("entityRadioError").textContent.replace('');
}