document.getElementById('itemForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const workerName = document.getElementById('workerName').value.trim();
    const associateId = document.getElementById('associateId').value.trim();
    const itemName = document.getElementById('itemName').value;

    // Validation: Ensure an item is selected and either name or ID is provided
    if (!itemName || (!workerName && !associateId)) {
        alert('Please select an item and enter either a worker\'s name or an associate ID.');
        return;
    }

    // Prepare the data in the format expected by Google Apps Script
    const formData = {
        workerName: workerName,
        associateId: associateId,
        itemName: itemName
    };

    // Send the data to Google Sheets via Google Apps Script
    fetch('https://script.google.com/macros/s/AKfycbx0LQ9x-EnOadqYtTIPqvFnPpxR7iYbntmrZ4RQKUkLyJgDF5LlLgZ6RGRjBRiq7Q5GPg/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert('Item successfully recorded.');
        // Reset the form or redirect the user as needed
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while recording the item.');
    });
};
