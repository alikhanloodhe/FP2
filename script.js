// Initialize on page load
window.onload = function() {
    initializeGallery();
    addTabIndices();
};

function initializeGallery() {
    const originalCaption = document.getElementById('caption').textContent;
    const thumbnails = document.querySelectorAll('.thumbnail');
    const largeDisplay = document.getElementById('largeDisplay');
    const captionElement = document.getElementById('caption');

    // Common event handler for focus/mouseover
    function handleActivate(event) {
        largeDisplay.style.backgroundImage = `url(${event.target.src})`;
        captionElement.textContent = event.target.alt;
        console.log('Event triggered:', event.type);
    }

    // Common event handler for blur/mouseleave
    function handleDeactivate() {
        largeDisplay.style.backgroundImage = '';
        captionElement.textContent = originalCaption;
        console.log('Reset display');
    }

    // Add event listeners
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('mouseover', handleActivate);
        thumbnail.addEventListener('mouseleave', handleDeactivate);
        thumbnail.addEventListener('focus', handleActivate);
        thumbnail.addEventListener('blur', handleDeactivate);
    });
}

function addTabIndices() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.tabIndex = 0;
        console.log(`Added tabindex to image ${index + 1}`);
    });
}