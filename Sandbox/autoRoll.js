function autoRoll() {
    let array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return (array[0] % 20) + 1; // Modulo to get a number between 1 and 20
}

// Function to roll initiatives for each entity with a delay
function getInitiativesWithDelay(index = 0) {
    let x = document.getElementsByClassName("entityCard");

    if (index < x.length) {
        // Update the initiative of the current element
        let initiativeElement = x[index].children[2]; // Assuming children[2] is the initiative element
        initiativeElement.innerHTML = `${autoRoll()} (${initiativeElement.innerHTML})`;

        // Call the next iteration with a 500ms delay
        setTimeout(() => getInitiativesWithDelay(index + 1), 200);
    }
}

// Call the function to start rolling with delay
// getInitiativesWithDelay();