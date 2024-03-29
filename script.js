document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('itemForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Prepare the data object to send
        const dataToSend = {
            firstName: document.getElementById('firstName').value.trim(),
            lastName: document.getElementById('lastName').value.trim(),
            associateId: document.getElementById('associateId').value.trim(),
            itemName: document.getElementById('itemName').value,
            action: document.getElementById('action').value
        };

        // Use the Sheet.best endpoint URL here
        fetch('YOUR_SHEET.BEST_ENDPOINT_URL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Item successfully recorded.');
            document.getElementById('itemForm').reset();
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    });
});
