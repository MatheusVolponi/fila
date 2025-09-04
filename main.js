import { handleNewItem } from './components/newTask.js';
import { loadTask } from './components/loadTasks.js';

const createTask = document.querySelector('[data-form-button]');

createTask.addEventListener('click', handleNewItem);

loadTask();