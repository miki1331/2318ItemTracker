document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('itemForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const workerName = encodeURIComponent(document.getElementById('workerName').value.trim());
        const associateId = encodeURIComponent(document.getElementById('associateId').value.trim());
        const itemName = encodeURIComponent(document.getElementById('itemName').value);

        // Construct query string
        const queryString = `?workerName=${workerName}&associateId=${associateId}&itemName=${itemName}`;

        // Fetch API to send the form data to the Google Sheet via Google Apps Script using GET request
        fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec' + queryString, {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Item successfully recorded.');
            document.getElementById('itemForm').reset(); // Optional: Reset form after successful submission
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    });
});
