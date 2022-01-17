const title = document.getElementById('todo_title');
const description = document.getElementById('todo_description');
const submit_todo = document.getElementById('submit_todo');
let todos = [];

submit_todo.onclick = function () {
  const todo = {
    title_name: title.value,
    description_body: description.value,
  };  

  title.value = '';
  description.value = '';

  todos.push(todo);

  saveTodos();
  messageTodos();
}

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos) || []);
}

function examinationLocalStorage () {
if(localStorage.getItem('todos')) todos = JSON.parse(localStorage.getItem('todos'));
  messageTodos();
}

function messageTodos() {
  const todos_container = document.querySelector('.main-wrapper__todos');
  let out = '';
  todos.forEach(function(item) {
    out += `<p>${item.title_name}</p>`
    out += `<p>${item.description_body}</p>`
  });
  todos_container.innerHTML = out;
}

const getInputs = () => {
  if (title.value.length > 0 && description.value.length > 0) {
    submit_todo.removeAttribute('disabled');
  } else {
    submit_todo.setAttribute('disabled', true);
  }
}

title.oninput = () => {
  getInputs();
}

description.oninput = () => {
  getInputs();
}

examinationLocalStorage();
