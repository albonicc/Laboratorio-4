let newTodo = document.querySelector('.newTodo');
let listOfTodos = document.querySelector('.listOfTodos');

const createTodo = () => {
    listOfTodos.innerHTML += `
    <div style="display: flex;">
        <input type="checkbox" class="todo-item" name="todo" style="margin-right: 15px;"/>
        <p>${newTodo.value}</p>
    </div>    
    `
    newTodo.value = '';
}

const markAllTodos = () => {
    let todoItems = document.querySelectorAll('.todo-item');
    todoItems.forEach(todo => {
        todo.setAttribute('checked', '');
    })
}
