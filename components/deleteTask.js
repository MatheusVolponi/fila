const RemoveButton = () => {
    const removebutton = document.createElement('button');

    removebutton.classList.add('remove-button');
    removebutton.innerText = 'deletar';
    removebutton.addEventListener('click', deleteTask);

    return removebutton;
}

const deleteTask = (event) => {
    const removebutton = event.target;

    const removeTask = removebutton.parentElement;

    removeTask.remove();
}

export default RemoveButton;