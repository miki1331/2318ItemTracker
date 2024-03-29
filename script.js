document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('itemForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const capitalize = (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        const todayDate = new Date().toISOString().split('T')[0]; // Gets today's date in YYYY-MM-DD format

        // Determining which date to populate based on the action
        const action = document.getElementById('action').value;
        const datesToSend = action === 'checkout' ? 
                             { "Check-Out Date": todayDate } : 
                             { "Check-In Date": todayDate };

        const dataToSend = {
            "First Name": capitalize(document.getElementById('firstName').value.trim()),
            "Last Name": capitalize(document.getElementById('lastName').value.trim()),
            "Associate ID": document.getElementById('associateId').value.trim(),
            "Item Name": document.getElementById('itemName').value,
            ...datesToSend // Spread operator to include either check-out or check-in date
        };

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

