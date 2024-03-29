document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('itemForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = encodeURIComponent(document.getElementById('firstName').value.trim());
        const lastName = encodeURIComponent(document.getElementById('lastName').value.trim());
        const associateId = encodeURIComponent(document.getElementById('associateId').value.trim());
        const itemName = encodeURIComponent(document.getElementById('itemName').value);
        const action = encodeURIComponent(document.getElementById('action').value);

        // Update the query string to include new fields
        const queryString = `?firstName=${firstName}&lastName=${lastName}&associateId=${associateId}&itemName=${itemName}&action=${action}`;

        // Updated Fetch API call with new query string
        fetch('https://script.google.com/macros/s/AKfycbwuJ6yE5kN0yu-6Xf8sziBwyCHArKGgRdcKr08AFZuX1c9EW7ixGiAwJWR7FS8FPMYvvg/exec' + queryString, {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Item successfully recorded.');
            document.getElementById('itemForm').reset(); // Reset form after successful submission
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    });
});

