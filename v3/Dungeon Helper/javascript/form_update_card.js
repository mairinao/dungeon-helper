function closeUpdateCard(event){
    event.preventDefault();
    let isFlex = document.getElementById("edit_card").style.display;

    if(isFlex == 'flex'){
        document.getElementById("edit_card").style.display = "none";
        document.getElementById("initiative_input_id").value = "";
        document.getElementById("hitpoints_input_id").value = "";
    }else{
        document.getElementById("edit_card").style.display = "flex";
    }
}

function modifyHitpoints(event, modify){
    let modifyType = modify;
    let inputValue = document.getElementById("hitpoints_input_id");

    if(modify == 'subtract'){

    }else if(modify == 'add'){
        
    }else{
        console.log('error' + '  ' + modify)
    }
}