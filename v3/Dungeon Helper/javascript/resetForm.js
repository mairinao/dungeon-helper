function resetForm_toggle(event){
    event.preventDefault(); 
    const resetForm = document.getElementById('app_nav_forms_reset_form_id');
    const btnID = event.target.id;
    
    console.log("coy")

    if(btnID == "form_reset_close_button"){
        resetForm.style.display = "none";  
    }else if(btnID == "form_reset_toggle_button"){
        if(resetForm.style.display == "block"){
            resetForm.style.display = "none";
        }else{
            resetForm.style.display = "block";
        }
    }
}
