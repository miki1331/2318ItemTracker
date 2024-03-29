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
        fetch('https://script.google.com/macros/s/AKfycbxtaIm4datDEpO_0s9urweP3SnLUDDFx3TlgQ-FO03K6IFVlk2xCfXkyI6eFSV9-IDXpg/exec' + queryString, {
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

