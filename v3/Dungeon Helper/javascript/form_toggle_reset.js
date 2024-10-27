function formReset(event){
    event.preventDefault();
    const typeSelect = document.getElementById('form_type_entity_radio_id');
    const textInputs = document.querySelectorAll('input[type="text"]');
    
    const quantityInput = document.getElementById('form_input_number_of_entities_number_input');

    typeSelect.checked = true;
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
            createForm.style.display = "block";
            resetForm.style.display = "none";
            formReset(event);
            break;
        case parent.classList.contains('nav_reset_btn'):
            createForm.style.display = "none";
            resetForm.style.display = "block";
            formReset(event);
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
            console.log("No matching classes found.");
    }


}