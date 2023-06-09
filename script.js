// Get the containers and the reset button
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const resetButton = document.getElementById('resetButton');

// Add event listeners for drag events on the items
const items = document.getElementsByClassName('item');
for (const item of items) {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
}

// Add event listeners for drop events on the containers
container1.addEventListener('dragover', dragOver);
container1.addEventListener('dragenter', dragEnter);
container1.addEventListener('dragleave', dragLeave);
container1.addEventListener('drop', dragDrop);

container2.addEventListener('dragover', dragOver);
container2.addEventListener('dragenter', dragEnter);
container2.addEventListener('dragleave', dragLeave);
container2.addEventListener('drop', dragDrop);

// Function called when the drag starts
function dragStart(e) {
    // Add a 'dragging' class to the item being dragged
    this.classList.add('dragging');

    // Set the data transfer's drag image to the item's clone
    e.dataTransfer.setDragImage(this.cloneNode(true), 0, 0);
}

// Function called when the drag ends
function dragEnd() {
    // Remove the 'dragging' class from the item
    this.classList.remove('dragging');
}

// Function called when an item is dragged over a container
function dragOver(e) {
    e.preventDefault();
}

// Function called when an item enters a container
function dragEnter(e) {
    e.preventDefault();
    // Add a 'dragover' class to the container for visual feedback
    this.classList.add('dragover');
}

// Function called when an item leaves a container
function dragLeave() {
    // Remove the 'dragover' class from the container
    this.classList.remove('dragover');
}

// Function called when an item is dropped into a container
function dragDrop() {
    // Remove the 'dragover' class from the container
    this.classList.remove('dragover');

    // Append the dragged item to the container
    const item = document.querySelector('.dragging');
    this.appendChild(item);

    // Display a success message
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Item dropped successfully!';
    successMessage.classList.add('success-message');
    this.appendChild(successMessage);
}

// Function called when the reset button is clicked
resetButton.addEventListener('click', reset);

// Function to reset the containers to their original state
function reset() {
    // Move all items back to the first container
    const items = container2.querySelectorAll('.item');
    for (const item of items) {
        container1.appendChild(item);
    }

    // Remove any success messages
    const successMessages = container2.getElementsByClassName('success-message');
    while (successMessages.length > 0) {
        successMessages[0].remove();
    }
}
