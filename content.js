/**
 * Firebase Studio Cleaner
 * ------------------------
 * This content script hides specified UI components (like <app-bar>) 
 * on Firebase Studio using MutationObserver to support dynamic loading.
 */

// List of selectors (tags or classes) to hide
const SELECTORS_TO_HIDE = [
    'app-bar',
    // Add more tags or selectors here if needed
];

/**
 * Hides a single element if it exists and is visible
 * @param {string} selector - The CSS selector or tag name
 */
function hideElement(selector) {
    const element = document.querySelector(selector);
    if (element && element.style.display !== 'none') {
        element.style.display = 'none';
        console.log(`[Cleaner] Removed: ${selector}`);
    }
}

/**
 * Runs hideElement for all configured selectors
 */
function hideAllConfiguredElements() {
    SELECTORS_TO_HIDE.forEach(hideElement);
}

/**
 * Sets up a MutationObserver to monitor DOM changes
 * and apply hide logic dynamically.
 */
function observeDomChanges() {
    const observer = new MutationObserver(() => {
        hideAllConfiguredElements();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    console.log('[Cleaner] MutationObserver initialized');
}

// Initial execution in case elements are already loaded
hideAllConfiguredElements();

// Start observing for dynamic DOM updates
observeDomChanges();
