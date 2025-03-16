//Increase & Decrease  button function for Initiative & Number of Entities.
function inputEntitiesMaths(event) {
    event.preventDefault(); 

    const button = event.target;
    const inputField = button.parentElement.querySelector('input[name="entities-quantity"]');
    let currentValue = parseInt(inputField.value) || 0; 

    if (button.classList.contains('increment') && currentValue >= 0) {
        currentValue++;
    } else if (button.classList.contains('decrement') && currentValue > 0) {
        currentValue--;
    }

    inputField.value = currentValue;
}
function inputIniativeMaths(event){
    event.preventDefault(); 

    const button = event.target;
    const inputField = button.parentElement.querySelector('input[name="initiative-bonus"]');
    let currentValue = parseInt(inputField.value) || 0; 

    if (button.classList.contains('increment') && currentValue >= 0) {
        currentValue++;
    } else if (button.classList.contains('decrement') && currentValue > 0) {
        currentValue--;
    }

    inputField.value = currentValue;
}
function formInputFieldsReset(){
    const textInputs = document.querySelectorAll('input[type="text"]');
    const quantityInput = document.getElementById('form_input_number_of_entities_number_input');

    textInputs.forEach(input => {
        input.value = "";
    });

    quantityInput.value = 1;
    
}
function formErrorMessageReset(){
    const nameText = document.getElementById("name_error_text_id");
    const hitpointsText = document.getElementById("hitpoints_error_text_id");
    const entitiesQuantityText = document.getElementById("entitiesQuantity_error_text_id");

    nameText.innerHTML  = "";
    hitpointsText.innerHTML  = "";
    entitiesQuantityText.innerHTML  = "";
}
//Mechanics for selecting what type of entity you will create.
function createForm_entityTypeSelection(value, event){
    let initiativeDisplay = document.querySelectorAll('.initiative_display');
    let entitiesDisplay = document.querySelectorAll('.entities_display');
    let hitpointsDisplay = document.querySelectorAll('.hitpoints_display');
    let nameMargin = document.getElementsByClassName('form_input_error_wrapper');

    formErrorMessageReset();
    formInputFieldsReset();

    if(value == "entity"){
        initiativeDisplay.forEach(element => {
            element.style.display = "flex";
        });
        entitiesDisplay.forEach(element => {
            element.style.display = "flex";
        });
        hitpointsDisplay.forEach(element => {
            element.style.display = "flex";
        });
    }else if(value == "character"){
        initiativeDisplay.forEach(element => {
            element.style.display = "flex";
        });
        entitiesDisplay.forEach(element => {
            element.style.display = "none";
        });
        hitpointsDisplay.forEach(element => {
            element.style.display = "flex";
        });
    }else{

        entitiesDisplay.forEach(element => {
            element.style.display = "none";
        });
        initiativeDisplay.forEach(element => {
            element.style.display = "none";
        });
        hitpointsDisplay.forEach(element => {
            element.style.display = "none";
        });
    }
}

