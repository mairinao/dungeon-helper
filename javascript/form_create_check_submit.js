// Submit Form
function createForm_submit(event){
    event.preventDefault(); 

    const form = document.getElementById('create_form_id');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const typeSelect = data['type-select'];
    const name = data['name'];
    const hitpoints = data['hitpoints'];
    const entitiesQuantity = data['entities-quantity'];
    const initiative = data['initiative-bonus'];

    errorCheck(typeSelect, name, hitpoints, entitiesQuantity, initiative);
}
// Input Check
function errorCheck(typeSelect, name, hitpoints, entitiesQuantity, initiative){
    let nameVar = nameCheck(name);
    let hitpointsVar = hitpointsCheck(hitpoints);
    let entitiesQuantityVar = entitiesQuantityCheck(entitiesQuantity);

    if(typeSelect == 'entity'){
        if( nameVar && hitpointsVar && entitiesQuantityVar){
            cardBuilderOrder(typeSelect, initiative, name, hitpoints, entitiesQuantity);
        }
        else{
            if (!nameVar) console.log("Name check failed.");
            if (!hitpointsVar) console.log("Hitpoints check failed.");
            if (!entitiesQuantityVar) console.log("Entities quantity check failed.");
            
            console.log("One or more validations failed.");
        }
    }else if(typeSelect == 'character'){
        if( nameVar && hitpointsVar){
            cardBuilderOrder(typeSelect, initiative, name, hitpoints);
        }
        else{
            if (!nameVar) console.log("Name check failed.");
            if (!hitpointsVar) console.log("Hitpoints check failed.");
            
            console.log("One or more validations failed.");
        }
    }else if(typeSelect == 'playerCharacter'){
        if(nameVar){
            cardBuilderOrder(typeSelect, initiative, name, hitpoints);
        }
        else{
            if (!nameVar) console.log("Name check failed.");
        }
    }
}
function nameCheck(name){;
    const nameText = document.getElementById("name_error_text_id");
    const value = name.trim();
    const hasLetterOrNumber = /[a-zA-Z0-9]/.test(value);


    if(hasLetterOrNumber && value.length >= 1){
        nameText.innerHTML  = "";
        return true;
    }else{
        nameText.innerHTML  = "Enter a name.";
    }
}
function hitpointsCheck(hitpoints){
    const hitpointsText = document.getElementById("hitpoints_error_text_id");
    const value = Number(hitpoints);


    if(isNaN(hitpoints)){
        hitpointsText.innerHTML  = "Number required.";
    }else{
        if(value >= 1){
            hitpointsText.innerHTML  = "";
            return true;
            
        }else{
            hitpointsText.innerHTML  = "Minimun 1HP needed.";
        }
    }
}
function entitiesQuantityCheck(entitiesQuantity){
    const entitiesQuantityText = document.getElementById("entitiesQuantity_error_text_id");
    const value = Number(entitiesQuantity);

    if(isNaN(entitiesQuantity)){
        entitiesQuantityText.innerHTML  = "Number required.";
    }else{
        if(value > 0){
            entitiesQuantityText.innerHTML  = "";
            return true;
        }else{
            entitiesQuantityText.innerHTML  = "Minimun 1 entity needed.";
        }
    }
}