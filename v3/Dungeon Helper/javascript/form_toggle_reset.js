function formReset(event){
    event.preventDefault();
    const typeSelect = document.getElementById('form_type_entity_radio_id');
    const textInputs = document.querySelectorAll('input[type="text"]');
    const quantityInput = document.getElementById('form_input_number_of_entities_number_input');
    const clearTypeInput = document.getElementById('clearType');
    const clearSpecificInput = document.getElementById('clearSpecific');

    typeSelect.checked = true;
    clearTypeInput.value = 'none';
    clearSpecificInput.value = 'none';
    textInputs.forEach(input => {
        input.value = "";
    });

    //Sets Entity Quantity to 1 for default.
    quantityInput.value = 1;
    
}
function formToggle(event){
    const parent = event.target; 
    const createForm = document.getElementById('create_form_id');
    const resetForm = document.getElementById('reset_form_id');

    switch (true) {
        case parent.classList.contains('nav_create_btn'):
            const createDisplayStyle = window.getComputedStyle(createForm).display;

            if(createDisplayStyle == 'block'){
                createForm.style.display = "none";
            }else{
                createForm.style.display = "block";
                resetForm.style.display = "none";
                createForm_entityTypeSelection('entity', event)
                formReset(event);
            }
            break;
        case parent.classList.contains('nav_reset_btn'):
            const resetDisplayStyle = window.getComputedStyle(resetForm).display;

            if(resetDisplayStyle == 'block'){
                resetForm.style.display = "none";
            }else{
                resetForm.style.display = "block";
                createForm.style.display = "none";
                formReset(event);
            }
            break;
        case parent.classList.contains('form_create_close_btn'):
            createForm.style.display = "none";
            resetForm.style.display = "none";
            formReset(event);
            break;
        case parent.classList.contains('form_reset_close_btn'):
            createForm.style.display = "none";
            resetForm.style.display = "none";
            formReset(event);
            break;
        default:
    }


}