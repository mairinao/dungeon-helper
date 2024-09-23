function resetContentForm(){
    let display = document.getElementById("resetContentForm").style.display;

    if(display == "flex"){
        document.getElementById("resetContentForm").style.display = "none";
    }else{
        document.getElementById("resetContentForm").style.display = "flex";
    }
}

function clearAll(){
    let entities = document.querySelectorAll('.entityCard');
    let characters = document.querySelectorAll(".characterCard"); // Added a dot for the class
    let playerCharacters = document.querySelectorAll(".playerCharacterCard"); // Added a dot for the class

    entities.forEach(function(entity) {
        entity.remove();
    });
    characters.forEach(function(character) {
        character.remove();
    });
    playerCharacters.forEach(function(playerCharacter) {
        playerCharacter.remove();
    });
}

function clearMarked(){
    let marked = document.querySelectorAll('.marked');

    marked.forEach(function(mark) {
        mark.remove();
    });
}
function clearEntities(){
   let entities = document.querySelectorAll('.entityCard');
    
    entities.forEach(function(entity) {
        entity.remove();
    });
}

function deleteCard(){
    if(clearAllID.checked == true){
        clearAll();
    }else if(clearMarkedID.checked == true){
        clearMarked();
    }else if(clearEntitiesID){
        clearEntities();
    }

}


