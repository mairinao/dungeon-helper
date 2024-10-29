//Create Random Number
function randomNumberGenerator() {
    function randomLetter(){
        let alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
        for(let i = alphabetArray.length -1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [alphabetArray[i], alphabetArray[j]] = [alphabetArray[j],alphabetArray[i]]
        }
        return alphabetArray.slice(0,3);
    }
    function randomNumber(){
        let numberArray = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];
    
        for(let i = numberArray.length -1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [numberArray[i], numberArray[j]] = [numberArray[j],numberArray[i]]
        }
        return numberArray.slice(0,3)
    }

    let shuffledAlphabet = randomLetter();
    let timeValues = randomNumber();

    let array = [shuffledAlphabet[0], timeValues[0],shuffledAlphabet[1], timeValues[1],shuffledAlphabet[2]];
    return array.join('');
}
//Send data & random number to card builder.
function cardBuilderOrder(iconName, initiativeValue, nameValue, hitpoints, quantity){
    if(iconName == "entity"){
        for(let i = 1; i <= quantity; i++ ){
            cardBuilder(iconName, initiativeValue, nameValue, i, hitpoints);
        }
    }else if(iconName == "character"){
        cardBuilder(iconName, initiativeValue, nameValue, 0, hitpoints);
    }else{
        cardBuilder(iconName, 0, nameValue, 0, 0);
    }
}
//Create and DOM the HTML. 
function cardBuilder(iconName, initiativeValue, nameValue, numberId, hitpoints){

    const randomNumber = randomNumberGenerator();

    const newCardDiv = document.createElement("div");
    const cardIconBtn = document.createElement("button");
    const cardInitiativeLabel = document.createElement("p");
    const cardInitiativeLabelValue = document.createElement("p");
    const cardNameTextWrapper = document.createElement("div");
    const cardNameText = document.createElement("p");
    const cardNameTextUniqueId = document.createElement("p");
    const cardHitpointsBarWrapper = document.createElement("div");
    const cardHitpointsBarRed = document.createElement("div");
    const cardHitpointsBarGreen = document.createElement("div");
    const cardHitpointsWrapper = document.createElement("div");
    const cardHitpointsDesc = document.createElement("p");
    const cardHitpointsCurrentHp =  document.createElement("p");
    const cardHitpointsOriginalHp =  document.createElement("p");


    newCardDiv.className = "card";
    newCardDiv.id = iconName;
    newCardDiv.dataset.cardId = randomNumber;

    cardIconBtn.className = "card_type_icon";
    cardIconBtn.style.backgroundImage = `url('./images/${iconName}_icon.svg')`;

    cardInitiativeLabel.className = "card_text_initiative";
    cardInitiativeLabel.textContent = ("initiative");

    cardInitiativeLabelValue.className = "card_text_initiative_value";
    cardInitiativeLabelValue.id = "card_text_iniative_value_id";
    cardInitiativeLabelValue.textContent = (`${initiativeValue}`);

    cardNameTextWrapper.className = "card_text_name_wrapper";
    cardNameText.className = ("card_text_name");
    cardNameText.textContent = (`${nameValue} `);
    cardNameTextUniqueId.className = "card_text_unique_id";
    cardNameTextUniqueId.textContent = (`#${numberId}`);

    cardHitpointsBarWrapper.className = "card_hitpoints_bar_wrapper";
    cardHitpointsBarRed.className = "card_hitpoints_bar_red";
    cardHitpointsBarGreen.className = "card_hitpoints_bar_green";
    cardHitpointsBarGreen.id = "card_hitpoints_bar_green_id";

    cardHitpointsWrapper.className = "card_hitpoints_wrapper";
    cardHitpointsDesc.className = ("card_text_hitpoints_desc");
    cardHitpointsDesc.textContent = ("HP");
    cardHitpointsCurrentHp.className = ("card_text_hitpoints_current_hp");
    cardHitpointsCurrentHp.textContent = (hitpoints);
    cardHitpointsOriginalHp.className = ("card_text_hitpoints_original_hp");
    cardHitpointsOriginalHp.textContent = `/${hitpoints}`;


    const container = document.getElementById("app_inner_card_container_center_wrapper_id");
    container.appendChild(newCardDiv);
    newCardDiv.appendChild(cardIconBtn);
    newCardDiv.appendChild(cardInitiativeLabel);
    newCardDiv.appendChild(cardInitiativeLabelValue);
    newCardDiv.appendChild(cardNameTextWrapper);
    cardNameTextWrapper.appendChild(cardNameText);
    cardNameTextWrapper.appendChild(cardNameTextUniqueId);
    newCardDiv.appendChild(cardHitpointsBarWrapper);
    cardHitpointsBarWrapper.appendChild(cardHitpointsBarRed);
    cardHitpointsBarWrapper.appendChild(cardHitpointsBarGreen);
    newCardDiv.appendChild(cardHitpointsWrapper);
    cardHitpointsWrapper.appendChild(cardHitpointsDesc);
    cardHitpointsWrapper.appendChild(cardHitpointsCurrentHp);
    cardHitpointsWrapper.appendChild(cardHitpointsOriginalHp);

}

cardBuilderOrder("entity", 4, "Soldier", 4, 4);
cardBuilderOrder("character", 4, "Natai", 0, 71);
cardBuilderOrder("playerCharacter", 4, "Dorito", 0, 144);

