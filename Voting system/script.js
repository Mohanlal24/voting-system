// Initialize vote counts
let votes = {
    'Option 1': 0,
    'Option 2': 0,
    'Option 3': 0
};

function vote(option) {
    // Increase the vote count for the selected option
    votes[option]++;

    // Update the results display
    document.getElementById('results-option1').textContent = `Option 1: ${votes['Option 1']} votes`;
    document.getElementById('results-option2').textContent = `Option 2: ${votes['Option 2']} votes`;
    document.getElementById('results-option3').textContent = `Option 3: ${votes['Option 3']} votes`;

    // Show a message to the user after voting
    document.getElementById('vote-message').textContent = `Thank you for voting for ${option}!`;

    // Disable the vote buttons after voting
    disableButtons();
}

function disableButtons() {
    const buttons = document.querySelectorAll('.vote-btn');
    buttons.forEach(button => {
        button.disabled = true;
        button.style.backgroundColor = '#ccc'; // Change color to indicate disabled state
    });
}
