import RemoveButton from "./components/deleteTask.js";
import CompleteButton from "./components/completeTask.js";

const handleNewItem = (event) => {
    event.preventDefault();
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const value = input.value;

    const calendar = document.querySelector('[data-form-date]')
    const date = moment(calendar.value);
    const formattedDate = date.format('DD/MM/YYYY');

    const data = {
        value,
        formattedDate
    };

    const newTask = createTask(data);

    list.appendChild(newTask);

    input.value = '';
}

const createTask = ({ value, formattedDate }) => {
    const task = document.createElement('li');
    task.classList.add('task');
    const content = `<p class="content">${value} - ${formattedDate}</p>`;

    task.innerHTML = content;

    task.appendChild(CompleteButton());
    task.appendChild(RemoveButton());

    return task;
}

const newTask = document.querySelector('[data-form-button]');

newTask.addEventListener('click', handleNewItem);