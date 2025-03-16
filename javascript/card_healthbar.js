window.onload = function() {
    get_hitpoints();
};

function get_hitpoints() {
    // Select all divs with the class 'card'
    const cards = document.querySelectorAll('.card');    

    // Loop through each card and log its content and unique data-card-id
    cards.forEach((card, index) => {

        const originalHpElement = card.querySelector('.card_text_hitpoints_original_hp');

        if(card){
            const originalHp = originalHpElement
            ? parseFloat(originalHpElement.textContent.replace(/^\//, "").trim())
            : null;

            const currentHpElement = card.querySelector('.card_text_hitpoints_current_hp');
            const currentHp = currentHpElement 
                ? parseFloat(currentHpElement.textContent.replace(/^\//, "").trim())
                : null;

            if(!isNaN(originalHp) && !isNaN(currentHp) && originalHp > 0){
                const percentage = (currentHp / originalHp) * 100;
                const hpBarGreen = card.querySelector(".card_hitpoints_bar_green");

                if(currentHp <= 0){
                    hpBarGreen.style.width = `0%`;
                    card.classList.add('dead'); 
                }else{
                    hpBarGreen.style.width = `${percentage}%`;
                    card.classList.remove('dead'); 
                }
                    
                if(percentage > 100){
                    hpBarGreen.style.backgroundColor = "#30cddb";
                }else{
                    hpBarGreen.style.backgroundColor = "#A0ED85";
                }
            } else {
                return "Invalid Data"
            }
        }else{
            return null;
        }

    });
}
