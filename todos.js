var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('listTodos')) || [];

function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var deleteElement = document.createElement('a');

        deleteElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        deleteElement.setAttribute('onclick', 'deleteTodo('+ pos +')');

        var deleteText = document.createTextNode(' x');

        deleteElement.appendChild(deleteText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(deleteElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = ('');
    renderTodos();
    saveToStorage();
}

btnElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('listTodos', JSON.stringify(todos));
}