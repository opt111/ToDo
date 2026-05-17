const todoBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-input');



function showData() {
  todoList.innerHTML = localStorage.getItem('todos') || '';
};
showData()

todoBtn.addEventListener('click', () => {
  if (todoInput.value.trim() !== '') {
    const newItem = document.createElement('li')
    newItem.innerHTML = `
    <input type='checkbox'></input>
    <span>${todoInput.value}</span>
    <button class='delete-btn' id='delete-btn'>X</button>
    `
    newItem.className = 'text-white flex justify-between p-2 px-4 bg-[#563669] border-[#60496e] border-1 rounded';

    todoList.appendChild(newItem);
    saveData();

    todoInput.value = '';
  }
});

todoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    e.target.closest('li').remove()
    saveData()
  }

  else if (e.target.type === 'checkbox') {
    if (e.target.checked) {
      e.target.setAttribute('checked', 'checked'); 
    } else {
      e.target.removeAttribute('checked'); 
    }
    saveData(); 
  }
});




function saveData() {
  localStorage.setItem('todos', todoList.innerHTML);
}