document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('itemForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const workerName = encodeURIComponent(document.getElementById('workerName').value.trim());
        const associateId = encodeURIComponent(document.getElementById('associateId').value.trim());
        const itemName = encodeURIComponent(document.getElementById('itemName').value);

        const queryParams = `?workerName=${workerName}&associateId=${associateId}&itemName=${itemName}`;

        fetch('https://script.google.com/macros/s/AKfycbwcsvGAO-lRCQvz6H7bau-OX08cX3UJ1IORxu_dVfunMod7l6vwrSyz4LQDFHW-K-QY0w/exec' + queryParams, {
            method: 'GET', // Changed to a GET request
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
