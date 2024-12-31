document.addEventListener("DOMContentLoaded", function() {
  // Get references to the <select> element and the button
  const colorSelect = document.getElementById("colorSelect");
  const removeColorButton = document.getElementById("removeColorButton");

  // Add an event listener to the button
  removeColorButton.addEventListener("click", function() {
    // Get the currently selected option
    const selectedOption = colorSelect.options[colorSelect.selectedIndex];

    // Remove the selected option from the <select> element
    if (selectedOption) {
      colorSelect.removeChild(selectedOption);
    }
  });
});

