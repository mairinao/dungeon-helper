function resetForm_clear(event){
    event.preventDefault();

    const clearAll = document.getElementsByClassName('card');
    const clearEntities = document.querySelectorAll('.entity');
    const clearCharacter = document.querySelectorAll('.character');
    const clearPlayerCharacters = document.querySelectorAll('.playerCharacter');

    const clearTypeValue = document.getElementById('clearType');
    const clearSpecific = document.getElementById('clearSpecific');
    
    switch(clearTypeValue.value){
        case 'none':
            console.log("None");
            break;
        case 'clearAll':
            console.log("Clear All");
            Array.from(clearAll).forEach(clearAll =>{
                clearAll.remove();  
            })
            break;
        case 'clearEntities':
            console.log("Clear Entities");
            Array.from(clearEntities).forEach(clearAll =>{
                clearAll.remove();  
            })
            break;
        case 'clearCharacters':
            Array.from(clearCharacter).forEach(clearAll =>{
                clearAll.remove();  
            })
            break;
        case 'clearPlayerCharacters':
            Array.from(clearPlayerCharacters).forEach(clearAll =>{
                clearAll.remove();  
            })
            break;
        default:
            console.log("Clear Type Error");
            break;         
    }
    switch(clearSpecific.value){
        case 'none':
            console.log("None");
            break;
        case 'clearDead':
            console.log("Clear Dead");
            break;
        case 'clearMarked':
            const selectedCards = document.querySelectorAll('.selected');
            Array.from(selectedCards).forEach(clearAll =>{
                clearAll.remove();      
            })       
            break;
        default:
            console.log("Clear Specific Error");
            break;    
    }
}

function cycleThroughDivs(){

}