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
        fetch('https://sheet.best/api/sheets/b737977e-8fd2-42f9-b589-320d130d031c', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToSend)
})
.then(response => response.text()) // Get the response as text instead of response.json()
.then(text => {
    console.log('Response Text:', text); // This will show the HTML or error page content
    return JSON.parse(text); // Try to parse text to JSON if it's expected to be JSON
})
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
