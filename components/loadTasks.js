import { createDate } from "./createDate.js";
import { orderDates, removeRepeatedDates } from "../services/date.js";

export const loadTask = () => {
    const list = document.querySelector('[data-list]');

    const createdTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    list.innerHTML = '';
    const uniqueDates = removeRepeatedDates(createdTasks);
    orderDates(uniqueDates);

    uniqueDates.forEach((day) => {
        list.appendChild(createDate(day));
    });
}