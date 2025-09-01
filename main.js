import RemoveButton from "./components/deleteTask.js";
import CompleteButton from "./components/taskCompleted.js";

const createTask = (event) => {
    event.preventDefault();

    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const value = input.value;

    const task = document.createElement('li');
    const content = `<p class="content">${value}</p>`;

    task.innerHTML = content;

    task.appendChild(CompleteButton());
    task.appendChild(RemoveButton());
    task.classList.add('task');
    list.appendChild(task);

    input.value = '';
}

const newTask = document.querySelector('[data-form-button]');

newTask.addEventListener('click', createTask);