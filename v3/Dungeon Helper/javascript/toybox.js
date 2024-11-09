const cards = document.getElementsByClassName('card');
const cardIconBtns = document.getElementsByClassName('card_type_icon');

document.querySelector('.app_inner_card_container_center_wrapper').addEventListener('click', function (event){
    const cardIconBtn = event.target.closest('.card_type_icon[data-card-icon-id]');
    
    if(!cardIconBtn) return;

    event.stopPropagation();

    const parentElement = this.parentElement;
    const cardIconBtnID = this.getAttribute('data-card-icon-id');
    const cardSelected = document.querySelector('[data-card-id=' + cardIconBtnID + ']')
    const cardTypeName = cardIconBtn.id;
    const hasSelected = parentElement.classList.contains('selected');
    

    // Handle different button types
    if (cardTypeName === 'button_icon_entity') {
        cardSelected.classList.toggle('selected');
        cardIconBtn.style.backgroundImage = hasSelected
            ? `url(./images/entity_icon.svg)`
            : `url(./images/entity_red_icon.svg)`;
    } else if (cardTypeName === 'button_icon_character') {
        cardSelected.classList.toggle('selected');
        cardIconBtn.style.backgroundImage = hasSelected
            ? `url(./images/character_icon.svg)`
            : `url(./images/character_red_icon.svg)`;
    } else if (cardTypeName === 'button_icon_playerCharacter') {
        cardSelected.classList.toggle('selected');
        cardIconBtn.style.backgroundImage = hasSelected
            ? `url(./images/playerCharacter_icon.svg)`
            : `url(./images/playerCharacter_red_icon.svg)`;
    }
})