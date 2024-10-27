function createForm_submit(event){
    event.preventDefault(); 

    const form = document.getElementById('create_form_id');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const typeSelect = data['type-select']
    const name = data['name']
    const hitpoints = data['hitpoints']
    const entitiesQuantity = data['entities-quantity']
    const initiaiveBonus = data['initiative-bonus']

    console.log(entitiesQuantity);
}

//Checking for proper inputs.
function errorCheck(typeSelect, name, hitpoints){

}

function nameCheck(name){
    if(name.length < 1){
        console.log("Name Good");
    }else{
        console.log("Name Error");
    }
}
function hitpointsCheck(hitpoints){

}
