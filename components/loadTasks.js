import { Task } from "./newTask.js";

export const loadTask = () => {
    const list = document.querySelector('[data-list]');

    const createdTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    list.innerHTML = '';

    createdTasks.forEach((task) => {
        list.appendChild(Task(task));
    });
}