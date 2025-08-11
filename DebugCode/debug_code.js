function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
            let result = calculateAll(num1, num2);
            // Display the result
            displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function calculateAll(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // calculate the numbers
    return {
        addition: a + b,
        multiplication: a * b,
        division: b !== 0 ? a / b : 'Cannot divide by zero'

    }
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    if (result.error) {
        resultElement.textContent = result.error;
    } else {
        resultElement.innerHTML = `
        <p>Addition: ${result.addition}</p>
        <p>Multiplication: ${result.multiplication}</p>
        <p>Division: ${result.division}</p>
           `;
    }

}