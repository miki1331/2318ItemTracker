document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('itemForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Capitalize the first letter of each part of the name
        const capitalize = (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

        // Prepare the data object to send
        const dataToSend = {
            "First Name": capitalize(document.getElementById('firstName').value.trim()),
            "Last Name": capitalize(document.getElementById('lastName').value.trim()),
            "Associate ID": document.getElementById('associateId').value.trim(),
            "Item Name": document.getElementById('itemName').value,
            "Action": document.getElementById('action').value
        };

        // Use the Sheet.best endpoint URL here
        fetch('https://sheet.best/api/sheets/b737977e-8fd2-42f9-b589-320d130d031c', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': '06A@hl6IPdr3pwiaKHYF6$wkNVn4G05nVNoOIz!EgJaK%OhFmplsG_@RC#Ld0zo$'
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

