import RemoveButton from "./deleteTask.js";
import CompleteButton from "./completeTask.js";
import { loadTask } from './loadTasks.js';

export const handleNewItem = (event) => {
    event.preventDefault();
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const input = document.querySelector('[data-form-input]');
    const value = input.value;

    const calendar = document.querySelector('[data-form-date]')
    const date = moment(calendar.value);
    const formattedDate = date.format('DD/MM/YYYY');

    const data = {
        value,
        formattedDate
    };

    const updatedTasks = [... tasks, data];

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    input.value = '';
    loadTask();
}; 

export const Task = ({ value, formattedDate }) => {
    const task = document.createElement('li');
    task.classList.add('task');
    const content = `<p class="content">${value} - ${formattedDate}</p>`;

    task.innerHTML = content;

    task.appendChild(CompleteButton());
    task.appendChild(RemoveButton());

    return task;
}
