import { Task } from "./newTask.js";

export const createDate = (date) => {
    const allTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const groupDateMoment = moment(date.formattedDate, 'DD/MM/YYYY');
    const topDate = document.createElement('li');
    const content = `<p class="content-date">${date.formattedDate}</p>`;

    topDate.innerHTML = content;

    allTasks.forEach((task, id) => {
        const taskDateMoment = moment(task.formattedDate, 'DD/MM/YYYY');
        const diff = groupDateMoment.diff(taskDateMoment);
        if (diff === 0) {
            topDate.appendChild(Task(task, id));
        }
    });

    return topDate;
}