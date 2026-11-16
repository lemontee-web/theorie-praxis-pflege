
// Find all interactive buttons
const buttons = document.querySelectorAll(".toggle-button");

// Create a reusable function
function toggleMessage(button) {

    const messageId = button.dataset.message;
    const message = document.getElementById(messageId);

    if (message.hidden === true) {
        message.hidden = false;
        button.textContent = "Weniger anzeigen";
    } else {
        message.hidden = true;
        button.textContent = button.dataset.originalText;
    }
}

// Add click events to all buttons
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        toggleMessage(button);
    });
});
