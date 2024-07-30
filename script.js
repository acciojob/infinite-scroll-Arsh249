// script.js

// Function to create a list item
function createListItem(content) {
    const li = document.createElement('li');
    li.textContent = content;
    return li;
}

// Function to add initial items to the list
function addInitialItems() {
    const list = document.getElementById('infi-list');
    for (let i = 1; i <= 10; i++) {
        list.appendChild(createListItem(`Item ${i}`));
    }
}

// Function to add more items when the end of the list is reached
function addMoreItems() {
    const list = document.getElementById('infi-list');
    const currentItemCount = list.children.length;
    for (let i = 1; i <= 2; i++) {
        list.appendChild(createListItem(`Item ${currentItemCount + i}`));
    }
}

// Event listener to detect when the user scrolls to the bottom of the list
const list = document.getElementById('infi-list');
list.addEventListener('scroll', () => {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight - 5) {
        addMoreItems();
    }
});

// Initialize the list with initial items
document.addEventListener('DOMContentLoaded', addInitialItems);
