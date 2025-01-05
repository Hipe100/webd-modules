// Initialize the input string to hold the user-entered values
let string = "";

// Select all elements with the class "button" (calculator buttons)
let buttons = document.querySelectorAll('.button');

// Select the input field (calculator display) and set its initial value to 0
const inputDisplay = document.querySelector('input');
inputDisplay.value = '0';

// Add a click event listener to each button
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        // Get the content of the button that was clicked
        let buttonValue = e.target.innerHTML;

        // If "=" is clicked, evaluate the expression in the string
        if (buttonValue === '='){
            try {
                // Safely evaluate the mathematical expression
                string = eval(string);
                document.querySelector('input').value = string; // Display the result
            }
            catch (error) {
                // Handle invalid expressions
                document.querySelector('input').value = 'Error';
                string = ''; // Reset the input string
            }
        }
        // If "C" is clicked, clear the input string and reset the display
        else if (buttonValue === 'C') {
            string = ''; // Clear the input string
            document.querySelector('input').value = string; // Clear the display
        }
        // If "Del" is clicked, remove the last character from the string
        else if (buttonValue === 'Del') {
            string = string.slice(0, -1); // Remove the last character
            document.querySelector('input').value = string; // Update the display
        }
        // For any other button (numbers or operators), append its value to the string
        else {
            console.log(e.target); // Log the button element (for debugging)
            string = string + e.target.innerHTML;; // Append the button value to the string
            document.querySelector('input').value = string; // Update the display
        }
    });
});
