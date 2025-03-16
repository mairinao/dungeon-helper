const loadCharacterBtn = document.querySelector('#load_btn');
const saveCharacterBtn = document.querySelector('#save_btn');
const characterCreateBtn = document.querySelector('#characterCreateBtn');
const closeFormBtn = document.querySelector('#closeFormBtn');

function testFunction(){
    console.log(this.id);
}

loadCharacterBtn.addEventListener('click', testFunction);
saveCharacterBtn.addEventListener('click', testFunction);
characterCreateBtn.addEventListener('click', testFunction);
closeFormBtn.addEventListener('click', testFunction);

// Handle all custom dropdowns
document.querySelectorAll('.custom_dropdown').forEach(dropdown => {
    const selected = dropdown.querySelector('.dropdown_selected');
    const options = dropdown.querySelector('.dropdown_options');

    // Toggle options visibility
    selected.addEventListener('click', () => {
        const isVisible = options.style.display === 'block';
        closeAllDropdowns(); // Close other dropdowns
        options.style.display = isVisible ? 'none' : 'block';
        setPosAndWidth(selected, options); // Update position and width
    });

    // Update selected item when clicking on an option
    options.addEventListener('click', (e) => {
        const item = e.target.closest('.dropdown_item');
        if (item) {
            selected.innerHTML = item.innerHTML;
            selected.dataset.value = item.dataset.value;
            options.style.display = 'none';
        }
    });
});

// Handle the special dropdown for saved files
const saveFileInput = document.querySelector('#saveFileInput');
const savedFilesOptions = document.querySelector('.dropdown_saved_files');

// Toggle saved files dropdown
saveFileInput.addEventListener('click', () => {
    const isVisible = savedFilesOptions.style.display === 'block';
    closeAllDropdowns(); // Close other dropdowns
    savedFilesOptions.style.display = isVisible ? 'none' : 'block';
    setPosAndWidth(saveFileInput, savedFilesOptions); // Update position and width
});

// Handle saved file selection
savedFilesOptions.addEventListener('click', (e) => {
    const item = e.target.closest('.dropdown_saved_item');
    if (item) {
        saveFileInput.value = item.innerHTML;
        saveFileInput.dataset.value = item.dataset.value;
        savedFilesOptions.style.display = 'none';
    }
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.custom_dropdown') && !e.target.closest('#saveFileInput')) {
        closeAllDropdowns();
    }
});

// Helper function to close all dropdowns
function closeAllDropdowns() {
    document.querySelectorAll('.dropdown_options').forEach(options => {
        options.style.display = 'none';
    });
    document.querySelector('.dropdown_saved_files').style.display = 'none';
}

// Helper function to set position and width
function setPosAndWidth(sourceElement, targetElement) {
    const rect = sourceElement.getBoundingClientRect();
    targetElement.style.top = rect.bottom + 'px';
    targetElement.style.left = rect.left + 'px';
    targetElement.style.width = rect.width + 'px';
}