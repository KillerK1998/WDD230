const input = document.getElementById('favchap');
const addButton = document.querySelector('button');
const list = document.getElementById('list');

addButton.addEventListener('click', () => {
    
    const chapter = input.value.trim();

    // Check if the input is not empty
    if (chapter !== '') {
        // Create a new list item element
        const li = document.createElement('li');

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');

        // Set the text content of the list item
        li.textContent = chapter;
        li.appendChild(deleteButton);

        // Append the list item to the list
        list.appendChild(li);

        // Add event listener to the delete button
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
        });

        // Clear the input field and focus it
        input.value = '';
        input.focus();
    } else {
        // If input is empty, focus the input field
        input.focus();
    }
});
