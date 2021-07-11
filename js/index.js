let newTodo = document.querySelector('.newTodo');
let listOfTodos = document.querySelector('.listOfTodos');
let todoItems = document.querySelectorAll('.todo-item');

const createTodo = () => {
    listOfTodos.innerHTML += `
    <div class="todo-item" style="display: flex;">
        <input type="checkbox" name="todo" style="margin-right: 15px;"/>
        <p>${newTodo.value}</p>
    </div>    
    `
    newTodo.value = '';
}
