const directoryNameInput = document.getElementById('directoryName');
const directoryList = document.getElementById('directoryList');
const addDirectoryButton = document.getElementById('addDirectory');
const deleteDirectoryButton = document.getElementById('deleteDirectory');

let directories = [];

// Function to update the directory list display
function updateDirectoryList() {
    directoryList.innerHTML = '';
    directories.forEach((dir, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = dir;
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteDirectory(index);
        li.appendChild(deleteButton);
        directoryList.appendChild(li);
    });
}

// Function to add a directory
addDirectoryButton.onclick = () => {
    const dirName = directoryNameInput.value.trim();
    if (dirName) {
        directories.push(dirName);
        directoryNameInput.value = '';
        updateDirectoryList();
    } else {
        alert('Please enter a directory name.');
    }
};

// Function to delete a directory by index
function deleteDirectory(index) {
    directories.splice(index, 1);
    updateDirectoryList();
}