function toggleSelected(element, iconUrl, redIconUrl) {
    const parent = element.parentElement; // Get the parent container
    const hasSelected = parent.classList.toggle('selected'); // Toggle the class on the parent

    element.style.backgroundImage = hasSelected ? `url(${redIconUrl})` : `url(${iconUrl})`;
}