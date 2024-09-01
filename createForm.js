function formSelect(){
    let entity = document.getElementById('entity-check').checked;
    let character = document.getElementById('character-check').checked;
    let pc = document.getElementById('player-character-check').checked;

    formIconToggle(entity, character, pc)
    formTextToggle(entity, character, pc)
}

function formIconToggle(entity, character, pc){
    if(entity){
        document.getElementById('entity-icon').src = './Images/entity-small-form-toggle.png';
        document.getElementById('character-icon').src = './Images/character-small-form.png';
        document.getElementById('playerCharacter-icon').src = './Images/player-character-small-form.png';
        document.getElementById('entityText').classList.toggle('text-form-type-active');
    }else if(character){
        document.getElementById('entity-icon').src = './Images/entity-small-form.png';
        document.getElementById('character-icon').src = './Images/character-small-form-toggle.png';
        document.getElementById('playerCharacter-icon').src = './Images/player-character-small-form.png';
        document.getElementById('characterText').classList.toggle('text-form-type-active');
    }else if(pc){
        document.getElementById('entity-icon').src = './Images/entity-small-form.png';
        document.getElementById('character-icon').src = './Images/character-small-form.png';
        document.getElementById('playerCharacter-icon').src = './Images/player-character-small-form-toggle.png';
        document.getElementById('pcText').classList.toggle('text-form-type-active');
    }
}
function formTextToggle(entity, character, pc){
    if(entity){
        document.getElementById('entityText').classList.add('radio-text-select', 'entity-text-border');
        document.getElementById('characterText').classList.remove('radio-text-select', 'character-text-border');
        document.getElementById('pcText').classList.remove('radio-text-select', 'pc-text-border');
    }else if(character){
        document.getElementById('entityText').classList.remove('radio-text-select', 'entity-text-border');
        document.getElementById('characterText').classList.add('radio-text-select', 'character-text-border');
        document.getElementById('pcText').classList.remove('radio-text-select', 'pc-text-border');
    }else if(pc){
        document.getElementById('entityText').classList.remove('radio-text-select', 'entity-text-border');
        document.getElementById('characterText').classList.remove('radio-text-select', 'character-text-border');
        document.getElementById('pcText').classList.add('radio-text-select', 'pc-text-border');
    }
}

function submitForm(){
    let entityName = document.getElementById('entityNameInput').value
    let entityAmount = document.getElementById('entityAmountInput').value
    let entityHitpoints = document.getElementById('entityHitpointsInput').value
    let entityInitiativeBonus = document.getElementById('entityInitiativeBonus').value


    console.log(entityName);
    console.log(entityAmount);
    console.log(entityHitpoints);
    console.log(entityInitiativeBonus);
}

function closeForm(){
    document.getElementById("formWrapper").style.display = "none";
    document.getElementById("formWrapper").reset();
    
}