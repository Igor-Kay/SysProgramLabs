const tasksList = document.querySelector('.tasks-list');
const newTaskInput = document.querySelector('#new-task-input');
const addTaskBtn = document.querySelector('#add-task-btn');
const clearAllBtn = document.querySelector('#clear-all-btn');

// Функция для добавления задачи
function addTask(taskText) {
  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');

  const taskTextEl = document.createElement('p');
  taskTextEl.textContent = taskText;

  const deleteTaskBtn = document.createElement('button');
  deleteTaskBtn.textContent = 'X';
  deleteTaskBtn.addEventListener('click', () => {
    taskItem.remove();
  });

  taskItem.appendChild(taskTextEl);
  taskItem.appendChild(deleteTaskBtn);

  tasksList.appendChild(taskItem);
}

// Добавление задачи по нажатию кнопки
addTaskBtn.addEventListener('click', () => {
  const taskText = newTaskInput.value.trim();
  if (taskText) {
    addTask(taskText);
    newTaskInput.value = '';
  }
});

// Очистка списка задач
clearAllBtn.addEventListener('click', () => {
  tasksList.innerHTML = '';
});

// Добавление тестовых задач
addTask('Почесать кошку');
addTask('Полить картошку');
addTask('Сложить в лукошко');
