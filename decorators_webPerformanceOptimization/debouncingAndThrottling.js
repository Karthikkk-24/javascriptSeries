// Debouncing and Throttling 

function debounce(func, delay) {
    let timeoutId;
    return function() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, arguments);
        }, delay);
    };
}

// Without Debouncing
window.addEventListener('resize', handleResize);

// With Debouncing
const debouncedResize = debounce(handleResize, 500);
window.addEventListener('resize', debouncedResize);