document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('itemForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const workerName = document.getElementById('workerName').value.trim();
        const associateId = document.getElementById('associateId').value.trim();
        const itemName = document.getElementById('itemName').value;

        console.log("Preparing to send data:", { workerName, associateId, itemName });

        // Prepare data for sending
        const formData = { workerName, associateId, itemName };

        // Fetch API to send the form data to the Google Sheet via Google Apps Script
        fetch('https://script.google.com/macros/s/AKfycbxvvrI-f1LAi3ANTn7DZd5Bh6JxQ3IjBAFgYcwJ3S83dx002Uo732_I0lNGz_3HvfWqZw/exec', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            console.log("Received response:", response);
            return response.json();
        })
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
