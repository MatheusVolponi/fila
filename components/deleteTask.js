const RemoveButton = (update, id) => {
    const removebutton = document.createElement('button');

    removebutton.classList.add('remove-button');
    removebutton.innerText = 'deletar';
    removebutton.addEventListener('click', () => deleteTask(update, id));

    return removebutton;
}

const deleteTask = (update, id) => {
    const registeredTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    registeredTasks.splice(id, 1);
    localStorage.setItem('tasks', JSON.stringify(registeredTasks));

    update();
}

export default RemoveButton;