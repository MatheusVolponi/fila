(() => {
    const createTask = (event) => {
        event.preventDefault();

        const list = document.querySelector('[data-list]');
        const input = document.querySelector('[data-form-input]');
        const value = input.value;

        const task = document.createElement('li');
        const content = `<p class="content">${value}</p>`;

        task.innerHTML = content;

        task.appendChild(CompleteButton());
        task.classList.add('task');
        list.appendChild(task);

        input.value = '';
    }

    const newTask = document.querySelector('[data-form-button]');

    newTask.addEventListener('click', createTask);

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
})()