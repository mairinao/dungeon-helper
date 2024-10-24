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
//Mechanics for selecting what type of entity you will create.
function createForm_entityTypeSelection(value){
    let initiativeDisplay = document.querySelectorAll('.initiative_display');
    let entitiesDisplay = document.querySelectorAll('.entities_display');
    let hitpointsDisplay = document.querySelectorAll('.hitpoints_display');
    let nameMargin = document.getElementsByClassName('form_input_error_wrapper');

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
//Mechanic for submitting the form data.
function createForm_submit(event){
    event.preventDefault(); 
}
//Mechanic for closing and opening the create form, and reseting the form.
function createForm_toggle(event){
    event.preventDefault(); 
    const createForm = document.getElementById('app_nav_forms_create_form_id');
    const btnID = event.target.id;
    
    if(btnID == "form_create_close_button"){
        createForm.style.display = "none";
    }else if(btnID == "form_create_toggle_button"){
        if(createForm.style.display == "block"){
            createForm.style.display = "none";
        }else{
            createForm.style.display = "block";
        }
    }
    createForm_reset();
}
function createForm_reset(){
    const typeSelect = document.getElementById('create_form_type_entity_radio_id');
    const inputName = document.getElementById('form_input_name');
    const inputEntities = document.getElementById('form_input_number_of_entities_number_input');
    const inputInitiative = document.getElementById('form_input_number_of_initiative_number_input');
    const inputHitpoints = document.getElementById('form_input_hitpoints');

    typeSelect.checked = true;
    inputName.value = "";
    inputEntities.value = "";
    inputInitiative.value = "";
    inputHitpoints.value = "";  
}
