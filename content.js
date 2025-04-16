/**
 * Firebase Studio Cleaner
 * This script hides distracting UI elements like the app bar in the Firebase Studio workspace.
 * Easily extendable to remove more elements.
 */

// Utility function to hide an element by selector
function hideElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.display = 'none';
        console.log(`[Cleaner] Removed: ${selector}`);
    } else {
        console.log(`[Cleaner] Not found: ${selector}`);
    }
}

// List of selectors to hide
const elementsToHide = [
    '.app-bar' // Add more selectors here as needed
];

// Execute hiding logic
elementsToHide.forEach(hideElement);
