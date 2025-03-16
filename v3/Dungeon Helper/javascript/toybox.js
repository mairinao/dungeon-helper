document.querySelector('.app_inner_card_container_center_wrapper').addEventListener('click', function (event){
    const cardElementClicked = event.target.closest('button')
        ? event.target.closest('button')
        : event.target.closest('.card');

        // If no cardElementClicked is found, exit early.

        if (!cardElementClicked){
            console.log('Error: No valid Element clicked.');
            return;
        }

        const buttonID = cardElementClicked.id;

        // Handle button clicks using the button ID
        if (buttonID) {
            switch (buttonID) {
                case 'button_icon_entity':
                    toggleSelected(cardElementClicked, './images/entity_icon.svg', './images/entity_red_icon.svg');
                    break;
                case 'button_icon_character':
                    toggleSelected(cardElementClicked, './images/character_icon.svg', './images/character_red_icon.svg');
                    break;
                case 'button_icon_playerCharacter':
                    toggleSelected(cardElementClicked, './images/playerCharacter_icon.svg', './images/playerCharacter_red_icon.svg');
                    break;
                default:
                    console.log("Not Selected");
            }
        }
        else {
            try {
                const cardName = cardElementClicked.querySelector('.card_text_name')?.innerHTML || "Unknown Name";
                const cardTextUniqueId = cardElementClicked.querySelector('.card_text_unique_id')?.innerHTML === '#0'
                    ? "" 
                    : cardElementClicked.querySelector('.card_text_unique_id')?.innerHTML || "";
                const cardType = cardElementClicked.dataset.cardType;
                const initiativeTotal = cardElementClicked.querySelector('.card_text_initiative_value')?.innerHTML || "N/A";
                const initiativeOriginal = cardElementClicked.dataset.original || "N/A"; 
                const initialHitpoints = cardElementClicked.querySelector('.card_text_hitpoints_original_hp')?.innerHTML || "0";
                const currentHitpoints = cardElementClicked.querySelector('.card_text_hitpoints_current_hp')?.innerHTML || "0";
                const cardUniqueId = cardElementClicked.dataset.cardId;

                document.querySelector('#edit_card').dataset.cardId = cardUniqueId;
                
                toggleRenderForm(event);
                renderEditForm(cardName, cardTextUniqueId, cardType, initiativeTotal, initiativeOriginal, currentHitpoints, initialHitpoints);

            } catch (error) {
                console.error("Error while handling card click", error);
            }
        }
});
document.querySelectorAll('.edit_input_modify_input').forEach(button => {
    button.addEventListener('click', function (event){
        event.preventDefault();
        const hpModBtn = this.classList.contains("hp_mod_input");
        const intModBtn = this.classList.contains("int_mod_input");
        const isSubtract = this.innerHTML == "-"

        const inputField = this.closest('.edit_input_wrapper').querySelector('input');
        const currenFieldtValue = Number(inputField.value);
        const newInputFieldValue = isSubtract ? currenFieldtValue - 1 : currenFieldtValue + 1;

        inputField.value = newInputFieldValue;

        if(hpModBtn){
            console.log("Hp modified:", newInputFieldValue);
        }else if(intModBtn){
            console.log("Initiative modified:", newInputFieldValue);
        }else{
            console.error("Error");
        } 
    });
});
document.querySelector('#edit_card').addEventListener('submit', function (event){
    event.preventDefault();

    let shouldStop = true;
    const fetchInputFields = document.querySelectorAll('.edit_content');
   

    fetchInputFields.forEach(fetchInputField => {
        const input = fetchInputField.querySelector('input');
        const errorMsg = fetchInputField.querySelector('.edit_error_wrapper');
        if(/^[-]?\d+$/.test(input.value)){
            errorMsg.classList.add('edit_error_message_hidden');
        }else{
            errorMsg.classList.remove('edit_error_message_hidden');
            shouldStop = false;
        }
    });

    if(shouldStop){
        const cardData = this.dataset.cardId; //Gives me unique card ID.
        const card = document.querySelector(`.card[data-card-id="${cardData}"]`); //Fetches whole card using the unique ID.
    
        //Extracts values.
        const currentHp = Number(card.querySelector('.card_text_hitpoints_current_hp').textContent);
        const currentInitiative = Number(card.querySelector('.card_text_initiative_value').textContent);
    
        //Check values.
        const hpChange = Number(this.querySelector('#hitpoints_input_id').value) || 0;
        const initiativeChange = Number(this.querySelector('#initiative_input_id').value) || 0;
    
        //Calculates new values.
        const newHp = calculateNewValue(currentHp, hpChange);
        const newInitiative = calculateNewValue(currentInitiative, initiativeChange);
    
        //Update DOM
        const hpElement = card.querySelector('.card_text_hitpoints_current_hp');
        const initativeElement = card.querySelector('.card_text_initiative_value');
    
        hpElement.textContent = hpChange ? newHp : currentHp;
        initativeElement.textContent = initiativeChange ? newInitiative : currentInitiative;
        toggleRenderForm(event);
        get_hitpoints();
    }else{
        console.error("Error 2");
    }

});

function toggleSelected(element, iconUrl, redIconUrl) {
    const hasSelected = element.classList.toggle('selected');
    element.style.backgroundImage = hasSelected ? `url(${redIconUrl})` : `url(${iconUrl})`;
}

function toggleRenderForm(event){
    event.preventDefault();
    const getClass = document.getElementById("edit_card");
    const isHidden = getClass.classList.toggle("edit_hidden");
    
    const fetchInputFieldsToClear = document.querySelectorAll('.edit_content');

    fetchInputFieldsToClear.forEach( x => {
        const input = x.querySelector('input');
        const errorMsg = x.querySelector('.edit_error_wrapper');

        input.value = 0;
        errorMsg.classList.add('edit_error_message_hidden');
    });


    console.log(`Edit card is now ${isHidden ? "visible" : "hidden"}`);
}

function renderEditForm(name, id, type, initiativeCurrent, initiativeOriginal, hitpointsCurrent, hitpointsOriginal) {
    
    const elements = {
        name: document.querySelector('.edit_title_name'),
        id: document.querySelector('.edit_title_entity_num'),
        type: document.querySelector('.edit_title_type'),
        initiativeCurrent: document.querySelector('.edit_initiative_current'),
        initiativeOriginal: document.querySelector('.edit_initiative_original'),
        hitpointsCurrent: document.querySelector('.edit_hp_current'),
        hitpointsOriginal: document.querySelector('.edit_hp_original'),
    };

    elements.name.textContent = name;
    elements.id.textContent = id;
    elements.type.textContent = type;
    elements.initiativeCurrent.textContent = initiativeCurrent;
    elements.initiativeOriginal.textContent = `(+${initiativeOriginal})`;
    elements.hitpointsCurrent.textContent = hitpointsCurrent;
    elements.hitpointsOriginal.textContent = hitpointsOriginal;
}

function calculateNewValue(current, change){
    return change < 0 ? change + current : current + change;
}
    