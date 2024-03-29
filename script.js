document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('itemForm').addEventListener('submit', function(event) {
        // Client-side actions before form submission, if necessary
        console.log('Form submitted!'); // Example action
        // Netlify will handle the form submission and page reload or redirect based on form configuration
    });
});

