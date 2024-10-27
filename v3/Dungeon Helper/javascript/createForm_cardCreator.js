// Fetch Data - Pass Data to Error Check - Pass Data to Card Order - Create Cards

//Fetch Form Data
function createForm_submit2(event){
    event.preventDefault(); 

    const form = document.getElementById('create_form_id');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const typeSelect = data['type-select']
    const name = data['name']
    const hitpoints = data['hitpoints']
    const entitiesQuantity = data['entities-quantity']
    const initiaiveBonus = data['initiative-bonus']
}

//Recieves Data, makes an order for Card Builder
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

//Dynamic Card buiilder.
function cardBuilder(iconName, initiativeValue, nameValue, numberId, hitpoints){
    const newCardDiv = document.createElement("div");
    const cardIcon = document.createElement("img");
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

    cardIcon.className = "card_type_icon";
    cardIcon.alt = `${iconName} icon`;
    cardIcon.src = `./images/${iconName}_icon.svg`;

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
    newCardDiv.appendChild(cardIcon);
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



//Random Number Generator
function randSquared() {
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
        let now = new Date(); // Create a new Date object
        let minutes = String(now.getMinutes()).padStart(2, '0');
        let seconds = String(now.getSeconds()).padStart(2, '0');
        let randomNum = [minutes, seconds]
    
        for(let i = randomNum.length -1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [randomNum[i], randomNum[j]] = [randomNum[j],randomNum[i]]
        }
        return randomNum.slice(0,2)
    }

    let shuffledAlphabet = randomLetter();
    let timeValues = randomNumber();

    let array = [shuffledAlphabet[0], timeValues[0],shuffledAlphabet[1], timeValues[1],shuffledAlphabet[2]];
    console.log(array.join(''));
}
