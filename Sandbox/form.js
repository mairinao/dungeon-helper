//Open Form & Reset
function loadForm(x){
    document.getElementById("form").style.display = "flex";
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

    function entity(formData){
        let entityNameVal = formData.querySelector('[name="entityName"]');
        let entityNumVal =  formData.querySelector('[name="numOfEntities"]');
        let entityHitpointsVal = formData.querySelector('[name="hitPoints"]');
        let entityIntBonusVal = formData.querySelector('[name="intBonus"]');
    
        if((entityNameVal.value) && (entityHitpointsVal.value) && (entityNumVal.value)){
            if(entityNameVal.value){
                document.getElementById("entityNameError").innerHTML = '';
            }
            if(entityNumVal.value){
                document.getElementById("entityNumError").innerHTML = '';
            }
            if(entityHitpointsVal.value){
                document.getElementById("entityHitPointsError").innerHTML = '';
            }
    
        }else{
            if(!entityNameVal.value){
                document.getElementById("entityNameError").textContent="Name needed, minimun 1 character.";
            }
            if(!entityNumVal.value){
                document.getElementById("entityNumError").textContent="Minimun 1 Entity needed.";
            }
            if(!entityHitpointsVal.value){
                document.getElementById("entityHitPointsError").textContent="Minimun 1 HP needed.";
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
    
        if((entityNameVal.value)){
            if(entityNameVal.value){
                document.getElementById("entityNameError").innerHTML = '';
            }
    
        }else{
            if(!entityNameVal.value){
                document.getElementById("entityNameError").textContent="Name needed, minimun 1 character.";
            }
        }
    }
}

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

function clearErrors(){
    document.getElementById("entityNameError").innerHTML = '';
    document.getElementById("entityNumError").innerHTML = '';
    document.getElementById("entityHitPointsError").innerHTML = '';
}

function numCheck(val){
    if (isNaN(val)) {
        console.log("Not a number");
      }else{console.log("Is a number");}
      
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