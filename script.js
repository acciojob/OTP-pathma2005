document.addEventListener("DOMContentLoaded", () => {
  // Select all input boxes with the class 'code'
  const inputs = document.querySelectorAll(".code");

  // Focus the first input when the page loads
  inputs[0].focus();

  // Loop through all input boxes
  inputs.forEach((input, index) => {

    // When user types something
    input.addEventListener("input", (e) => {
      const value = e.target.value;

      // If a value is typed and it's not the last input, move to next
      if (value && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });

    // When user presses a key (like Backspace)
    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace") {
        // If current box is empty, move back to previous box
        if (input.value === "" && index > 0) {
          inputs[index - 1].focus();
          inputs[index - 1].value = "";
        } else {
          // Otherwise, clear current input
          input.value = "";
        }
      }
    });
  });
});
