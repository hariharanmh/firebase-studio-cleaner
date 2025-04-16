/**
 * Firebase Studio Cleaner
 * This script hides distracting UI elements like the <app-bar> tag in the Firebase Studio workspace.
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

// List of selectors to hide (use tag names directly)
const elementsToHide = [
    'app-bar' // Custom HTML tag to hide
];

// Execute hiding logic
elementsToHide.forEach(hideElement);
