document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById('new-task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        const listItem = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => toggleTaskCompletion(taskSpan, checkbox));

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.classList.add('task');
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.addEventListener('click', () => editTask(taskSpan));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(listItem));

        listItem.appendChild(checkbox);
        listItem.appendChild(taskSpan);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);
        taskInput.value = '';
    }

    function toggleTaskCompletion(taskSpan, checkbox) {
        if (checkbox.checked) {
            taskSpan.classList.add('completed');
        } else {
            taskSpan.classList.remove('completed');
        }
    }

    function editTask(taskSpan) {
        const newTaskText = prompt('Edit the task', taskSpan.textContent);
        if (newTaskText !== null) {
            taskSpan.textContent = newTaskText.trim();
        }
    }

    function deleteTask(listItem) {
        taskList.removeChild(listItem);
    }
});
