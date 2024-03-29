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
        const webAppUrl = 'https://script.google.com/macros/s/AKfycbx0LQ9x-EnOadqYtTIPqvFnPpxR7iYbntmrZ4RQKUkLyJgDF5LlLgZ6RGRjBRiq7Q5GPg/exec';

        // Fetch API to send the form data to the Google Sheet via Google Apps Script
        function doPost(e) {
    try {
        // Parse the JSON payload
        var data = JSON.parse(e.postData.contents);
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

        // Append the data to the sheet
        sheet.appendRow([new Date(), data.workerName, data.associateId, data.itemName]);

        return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
            .setMimeType(ContentService.MimeType.JSON);
    } catch (error) {
        console.error("Error appending row: ", error);
        return ContentService.createTextOutput(JSON.stringify({ "result": "failure", "error": error.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

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
