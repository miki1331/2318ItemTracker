document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('itemForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const workerName = document.getElementById('workerName').value.trim();
        const associateId = document.getElementById('associateId').value.trim();
        const itemName = document.getElementById('itemName').value;

        // Check required fields
        if (!associateId || !itemName) {
            alert('Please enter an associate ID and select an item.');
            return;
        }

        // Prepare data for sending
        const formData = {
            workerName: workerName,
            associateId: associateId,
            itemName: itemName
        };

        // Placeholder for your Google Apps Script Web App URL
        const webAppUrl = 'https://script.google.com/macros/s/AKfycbwNnM6tJ1jqyI7UXiihHJjnMH8ByzJ8C1ebXWoTTz8Z_BjQaHEBIKLOReHc8OkoTjXccQ/exec';

        // Fetch API to send the form data to the Google Sheet via Google Apps Script
        fetch(webAppUrl, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
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

