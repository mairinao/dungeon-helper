function delay(ms){
    return new Promise(resolve =>setTimeout(resolve, ms));
}
async function initiativeRoll(){
    const get__cards = [...document.querySelectorAll('.card')];
    const filter__cards = get__cards.filter(card => card.getAttribute('data-card-type') !== 'playerCharacter');
    const animation__delay = (filter__cards.length*600)/1000
    const animation__time__change = document.querySelector('.loader');

    animation__time__change.style.animation = `l2 ${animation__delay}s linear forwards`;

    toggleOverlay();
    for(const card of filter__cards){
        let originalInitiative = Number(card.getAttribute('data-original'));
        let d20 = Math.floor(Math.random() * 20) + 1;
        let htmlInitiative = card.querySelector('.card_text_initiative_value');
    
        if (htmlInitiative) {
            htmlInitiative.innerHTML = d20 + originalInitiative;
        }
        await delay(600);
    }
    toggleOverlay();
}

function arrange() {
    const get__cards = [...document.querySelectorAll('.card')];

    // Sort the cards based on 'data-initiative' attribute (descending order)
    const sortedCards = get__cards.sort((a, b) => {
        const initiativeA = Number(a.querySelector('.card_text_initiative_value').innerHTML);
        const initiativeB = Number(b.querySelector('.card_text_initiative_value').innerHTML);
        return initiativeB - initiativeA; // Sort by descending initiative
    });

    // Assign flex order based on the sorted order
    sortedCards.forEach((card, index) => {
        card.style.order = index;
    });
}

function toggleOverlay(){
    let getOverylay = document.getElementById('overlayWrapper');
    let overlay = window.getComputedStyle(getOverylay).display;
    let button = document.getElementById('theButton');

    if(overlay == 'block'){
        getOverylay.style.display = 'none';
    }else{
        getOverylay.style.display = 'block';
    }
}