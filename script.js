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
        'X-Api-Key': '06A@hl6IPdr3pwiaKHYF6$wkNVn4G05nVNoOIz!EgJaK%OhFmplsG_@RC#Ld0zo$' // Include your API key here
    },
    body: JSON.stringify(dataToSend)
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
    }
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
