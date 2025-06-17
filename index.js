const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {

        const li = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;


        taskSpan.addEventListener('click', function() {
            taskSpan.classList.toggle('completed');
        });

        li.appendChild(taskSpan);


        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "X";
        deleteBtn.classList.add('delete-btn');

        // Prevent delete button from toggling 'completed'
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Stops the 'li' click event
            li.remove();
        });

        // Add delete button inside li
        li.appendChild(deleteBtn);

        // Add task to list
        taskList.appendChild(li);

        // Clear input
        taskInput.value = "";
    }
});

taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addBtn.click(); 
  }
});