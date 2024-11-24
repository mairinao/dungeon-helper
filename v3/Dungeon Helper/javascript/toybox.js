// Select the parent element
document.querySelector('.app_inner_card_container_center_wrapper').addEventListener('click', function (event) {

    const cardElementClicked = event.target.closest('button') //Checks if the icon or button was clicked.
        ? event.target.closest('button')
        : event.target.closest('.card');

    const buttonID = cardElementClicked.id;
    const cardName = cardElementClicked.querySelector('.card_text_name').innerHTML;
    const cardTextUniqueId = cardElementClicked.querySelector('.card_text_unique_id')?.innerHTML === '#0'
        ? "" 
        : cardElementClicked.querySelector('.card_text_unique_id')?.innerHTML || "";
    const cardType = cardElementClicked.dataset.cardType; // Equivalent to 'data-card-type'
    const initiativeTotal = cardElementClicked.querySelector('.card_text_initiative_value').innerHTML;
    const initiativeOriginal = cardElementClicked.dataset.original; // Equivalent to 'data-original' Original initiative;
    const initialHitpoints = cardElementClicked.querySelector('.card_text_hitpoints_original_hp').innerHTML;
    const currentHitpoints = cardElementClicked.querySelector('.card_text_hitpoints_current_hp').innerHTML;
    
    //Checks if it's the icon clicked or card and then proceeds accordingly.
    if(buttonID){
        switch(buttonID){
            case 'button_icon_entity':
                cardElementClicked.classList.toggle('selected');
                cardElementClicked.style.backgroundImage = hasSelected
                ? `url(./images/entity_icon.svg)`
                : `url(./images/entity_red_icon.svg)`;
                break;
            case 'button_icon_character':
                cardElementClicked.classList.toggle('selected');
                cardElementClicked.style.backgroundImage = hasSelected
                ? `url(./images/character_icon.svg)`
                : `url(./images/character_red_icon.svg)`;
                break;
            case 'button_icon_playerCharacter':
                cardElementClicked.classList.toggle('selected');
                cardElementClicked.style.backgroundImage = hasSelected
                ? `url(./images/playerCharacter_icon.svg)`
                : `url(./images/playerCharacter_red_icon.svg)`;
                break;
            default:
                console.log("Not Selected");
        }
    }else if(!buttonID, cardElementClicked){
        closeUpdateCard(event);

        console.log(cardName);
        console.log(cardTextUniqueId);
        console.log(`Card Type ${cardType}`);
        console.log(`Initative ${initiativeTotal}(${initiativeOriginal})`);
        console.log(`Hitpoints ${currentHitpoints}${initialHitpoints}`);

    }else{
        console.log('Error');
    }
});


function closeUpdateCard(event){
    event.preventDefault();
    let cardToggled = document.getElementById("edit_card").style.display; //Checks if the card display is none or flex.

    if(cardToggled == 'flex'){
        document.getElementById("edit_card").style.display = "none";
        document.getElementById("initiative_input_id").value = "";
        document.getElementById("hitpoints_input_id").value = "";
    }else{
        document.getElementById("edit_card").style.display = "flex";
    }
};
