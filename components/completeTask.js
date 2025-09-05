const CompleteButton = (update, id) => {
    const completeButton = document.createElement('button');

    completeButton.classList.add('check-button');
    completeButton.innerText = 'concluir';
    completeButton.addEventListener('click', () => taskCompleted(update, id));

    return completeButton;
}

const taskCompleted = (update, id) => {
    const tasks =JSON.parse(localStorage.getItem('tasks')) || [];
    
    tasks[id].completed = !tasks[id].completed

    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    update();
}

export default CompleteButton;