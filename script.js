function getResult() {
    // Get the input values
    let name = document.getElementById("name").value;
    let seatNumber = document.getElementById("seatNumber").value;

    // Validate input
    if (!name || !seatNumber) {
        alert("Please enter both name and seat number.");
        return;
    }

    // Hide the form and show a loading message
    document.getElementById("formSection").style.display = "none";
    document.getElementById("resultSection").style.display = "block";
    
    // Set initial text
    document.getElementById("studentName").textContent = name;
    document.getElementById("studentSeatNumber").textContent = seatNumber;
    document.getElementById("resultMessage").textContent = "Fetching your result... Please wait.";

    // Simulate a delay of 10 seconds to fetch the result
    setTimeout(function() {
        // After 10 seconds, display the result (mock data for now)
        const result = generateResult(seatNumber); // You can modify this function to match your actual result logic
        document.getElementById("resultMessage").textContent = result;
    }, 10000); // 10 seconds delay
}

// Function to generate a mock result (you can replace this logic with real data)
function generateResult(seatNumber) {
    // Simulate some conditions based on the seat number
    if (seatNumber % 2 === 0) {
        return "Congratulations! You passed with distinction.";
    } else {
        return "Sorry, you did not pass. Better luck next time.";
    }
}
