const cards = document.getElementsByClassName('card');
const cardIconBtns = document.getElementsByClassName('card_type_icon');

//Toggles Icon and adds Selected class to card and Icon Button. Used for the reset form.
Array.from(cardIconBtns).forEach(cardIconBtn =>{
    cardIconBtn.addEventListener("click", function cardIconBtnSelectToggle(event){
        event.stopPropagation();
        const parentElement = this.parentElement;
        const cardIconBtnID = this.getAttribute('data-card-icon-id');
        const cardSelected = document.querySelector('[data-card-id=' + cardIconBtnID + ']')
        const cardTypeName = cardIconBtn.id;
        const hasSelected = parentElement.classList.contains('selected');

        if(cardTypeName == "button_icon_entity"){
            cardSelected.classList.toggle('selected');
            if(hasSelected){
                this.style.backgroundImage = `url(./images/entity_icon.svg)`
            }else{
                this.style.backgroundImage = `url(./images/entity_red_icon.svg)`
            }
        }else if(cardTypeName == 'button_icon_character'){
            cardSelected.classList.toggle('selected');
            if(hasSelected){
                this.style.backgroundImage = `url(./images/character_icon.svg)`
            }else{
                this.style.backgroundImage = `url(./images/character_red_icon.svg)`
            }
        }else if(cardTypeName == 'button_icon_playerCharacter'){            
            cardSelected.classList.toggle('selected');
            if(hasSelected){
                this.style.backgroundImage = `url(./images/playerCharacter_icon.svg)`
            }else{
                this.style.backgroundImage = `url(./images/playerCharacter_red_icon.svg)`
            }   
        }
    });
});

//Toggles the Health and Initiative edit form.
Array.from(cards).forEach(card =>{
    card.addEventListener("click", function displayable(event){
        const card = event.target;
        const cardId = card.getAttribute('data-card-id');
    
        console.log("card id-" + cardId);
    });
});

//cardIconBtn.style.backgroundImage = `url('./images/${iconName}_icon.svg')`;
//