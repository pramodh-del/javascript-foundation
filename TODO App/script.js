var todoItems = [];

function addTodo() {
    var todoInput = document.getElementById("todo-input");
    var todoText = todoInput.value.trim();

    if (todoText !== "") {
        var todo = {
            id: Date.now(),
            text: todoText,
        };

        todoItems.push(todo);
        todoInput.value = "";

        displayTodoList();
    }
}

function deleteTodo(id) {
    todoItems = todoItems.filter(function (item) {
        return item.id !== id;
    });

    displayTodoList();
}

function displayTodoList() {
    var todoList = document.getElementById("todo-items");
    todoList.innerHTML = "";

    todoItems.forEach(function (item) {
        var listItem = document.createElement("li");
        listItem.innerHTML = `
      <span>${item.text}</span>
      <button onclick="deleteTodo(${item.id})">Delete</button>
    `;

        todoList.appendChild(listItem);
    });
}
