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

                
                toggleUpdateCard(event);
                updateCard(cardName, cardTextUniqueId, cardType, initiativeTotal, initiativeOriginal, currentHitpoints, initialHitpoints);

            } catch (error) {
                console.error("Error while handling card click", error);
            }
        }
    })

function toggleSelected(element, iconUrl, redIconUrl) {
    const hasSelected = element.classList.toggle('selected');
    element.style.backgroundImage = hasSelected ? `url(${redIconUrl})` : `url(${iconUrl})`;
}

function toggleUpdateCard(event) {
    event.preventDefault();
    const editCard = document.getElementById("edit_card");
    const cardToggled = editCard.style.display;

    if (cardToggled === 'flex') {
        editCard.style.display = "none";
        document.getElementById("initiative_input_id").value = "";
        document.getElementById("hitpoints_input_id").value = "";
    } else {
        editCard.style.display = "flex";
    }
}

function updateCard(name, id, type, initiativeCurrent, initiativeOriginal, hitpointsCurrent, hitpointsOriginal) {
    
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

    const initiativeElement = elements.initiativeCurrent;
    if (initiativeCurrent > 10) {
        initiativeElement.classList.add('removePadding');
    } else {
        initiativeElement.classList.remove('removePadding');
    }
}

    