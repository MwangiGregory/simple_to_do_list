// Query for the submit button and input task field
const submit = document.getElementById('submit');
const newTask = document.getElementById('newTask');

// Disable the submit button by default
submit.disabled = true;

// Listen for input to be typed into the input field
newTask.addEventListener('input', () => {
    // Enable submit button if input field has content
    if (newTask.value.trim() !== "") {
        submit.disabled = false;
    } else {
        submit.disabled = true;
    }
});

// Listen for submission of the form
document.getElementById('taskForm').addEventListener('submit', (event) => {
    // Prevent the default form submission
    event.preventDefault();

    // Get the value of the task the user just submitted
    const taskValue = newTask.value.trim();

    // Ensure the input is not empty
    if (taskValue === "") return;

    // Create a list item for the new task
    const listItem = document.createElement('li');

    // Create the task text span
    const taskText = document.createElement('span');
    taskText.textContent = taskValue;

    // Add event listener to cross off the task when clicked
    taskText.addEventListener('click', () => {
        taskText.classList.toggle('crossed');
    });

    // Create a remove button for the task
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';

    // Add event listener to remove the task
    removeButton.addEventListener('click', () => {
        listItem.remove();
    });

    // Append the task text and remove button to the list item
    listItem.appendChild(taskText);
    listItem.appendChild(removeButton);

    // Add the new element to the unordered list
    const taskList = document.getElementById('taskList');
    taskList.appendChild(listItem);

    // Clear the input field and disable the submit button again
    newTask.value = "";
    submit.disabled = true;
});
