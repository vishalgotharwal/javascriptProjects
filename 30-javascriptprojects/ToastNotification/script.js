let toastBox = document.getElementById('toastBox');

const messages = {
    success: 'Successfully submitted!',
    error: 'Please fix the error!',
    invalid: 'Invalid input!'
};

function showToast(type) {
    const div = document.createElement('div');
    div.classList.add('toast');

    // Set message based on type
    div.innerText = messages[type] || 'Unknown message';

    // Add color based on message type
    div.style.backgroundColor = type === 'success' ? 'green' : 
                                type === 'error' ? 'red' : 
                                type === 'invalid' ? 'orange' : 'gray';

    // Append the toast message to the toast box
    toastBox.appendChild(div);

    // Remove the toast message after 3 seconds
    setTimeout(() => {
        div.remove();
    }, 3000);
}
