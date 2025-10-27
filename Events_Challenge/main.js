// References to the DOM elements
const nameInput = document.getElementById("nameInput");
const submitButton = document.getElementById("submitButton");
const outputDiv = document.getElementById("outputDiv");
const mouseTracker = document.getElementById("mouseTracker");
const coordinatesDiv = document.getElementById("coordinates");

// Click Event
submitButton.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (name === "") {
        outputDiv.textContent = "Error: Please enter a name.";
        outputDiv.style.backgroundColor = "transparent";
        outputDiv.style.color = "red";
    } else {
        outputDiv.textContent = `Welcome, ${name}!`;
        outputDiv.style.backgroundColor = "green";
        outputDiv.style.color = "white";
    }
});

// Mouse Event
mouseTracker.addEventListener("mousemove", (event) => {
    const rect = mouseTracker.getBoundingClientRect();
    const x = Math.round(event.clientX - rect.left);
    const y = Math.round(event.clientY - rect.top);
    coordinatesDiv.textContent = `Mouse Coordinates: X: ${x}, Y: ${y}`;
});

// Keyboard Event
nameInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission
        submitButton.click();   // Trigger click event
    }
});
