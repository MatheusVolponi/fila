const CompleteButton = () => {
    const completeButton = document.createElement('button');

    completeButton.classList.add('check-button');
    completeButton.innerText = 'concluir';
    completeButton.addEventListener('click', taskCompleted);

    return completeButton;
}

const taskCompleted = (event) => {
    const completeButton = event.target;

    const completeTask = completeButton.parentElement;

    completeTask.classList.toggle('done');
}

export default CompleteButton;