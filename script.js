//script.js
/*
  Zane Mehmeti Portfolio JavaScript
  Handles the toggling of project details visibility when "Show Details" / "Hide Details" buttons are clicked.
*/
// Function to toggle the visibility of project details
function toggleDetails(button) {
  // Get the next sibling element the project-details <div>
  const details = button.nextElementSibling; 
  
  // Check if details are currently visible
  if (details.style.display === "block") {
    details.style.display = "none";       // Hide the details
    button.textContent = "Show Details";  // Update button text
  } else {
    details.style.display = "block";      // Show the details
    button.textContent = "Hide Details";  // Update button text
  }
}
