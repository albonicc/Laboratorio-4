let newTodo = document.querySelector('.newTodo');
let listOfTodos = document.querySelector('.listOfTodos');

const createTodo = () => {
    listOfTodos.innerHTML += `
    <div class="todo-item" style="display: flex;">
        <input type="checkbox" class="todo-item-checkbox" name="todo" style="margin-right: 15px;"/>
        <p>${newTodo.value}</p>
    </div>    
    `
    newTodo.value = '';
}

const markAllTodos = () => {
    let todoItemsCheckbox = document.querySelectorAll('.todo-item-checkbox');
    todoItemsCheckbox.forEach(todoCheckbox => todoCheckbox.setAttribute('checked', ''))
}

const clearAllTodos = () => {
    let todoItemsCheckbox = document.querySelectorAll('.todo-item-checkbox');
    todoItemsCheckbox.forEach(todoCheckbox => todoCheckbox.removeAttribute('checked'))
}

const deleteAllTodos = () => {
    let todoItems = document.querySelectorAll('.todo-item');
    todoItems.forEach(todo => todo.remove())
}