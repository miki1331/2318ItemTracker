<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Item Tracker</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Item Tracker</h1>
    <form id="itemForm">
        <div>
            <label for="workerName">Worker's Name (Optional):</label>
            <input type="text" id="workerName" placeholder="Enter worker's name">
        </div>
        <div>
            <label for="associateId">Associate ID:</label>
            <input type="text" id="associateId" placeholder="Enter associate ID" pattern="\d*" required>
        </div>
        <div>
            <label for="itemName">Item Name:</label>
            <select id="itemName" required>
                <option value="">Select an item</option>
                <option value="Hard Hat">Hard Hat</option>
                <option value="Safety Vest">Safety Vest</option>
                <option value="Safety Glasses">Safety Glasses</option>
                <option value="Banquet Shirt">Banquet Shirt</option>
                <option value="Banquet Bow Tie">Banquet Bow Tie</option>
            </select>
        </div>
        <button type="submit">Submit</button>
    </form>

    <script src="script.js"></script>
</body>
</html>
