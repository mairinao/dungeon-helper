document.getElementById('initiativeRollBtn').onclick = function(){
    let d20Dice = Math.floor(Math.random() * (20 - 0 + 1))

    console.log(d20Dice);
}