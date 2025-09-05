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
    const hour = date.format('HH:mm');
    const formattedDate = date.format('DD/MM/YYYY');
    const completed = false;

    const data = {
        value,
        formattedDate,
        hour,
        completed
    };

    const updatedTasks = [... tasks, data];

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    input.value = '';
    loadTask();
}; 

export const Task = ({ value, hour, completed }, id) => {
    const task = document.createElement('li');
    task.classList.add('task');
    const content = `<p class="content">${value} - ${hour}</p>`;

    if (completed) {
        task.classList.add('done');
    }

    task.classList.add('task');

    task.innerHTML = content;

    task.appendChild(CompleteButton(loadTask, id));
    task.appendChild(RemoveButton(loadTask, id));

    return task;
}
