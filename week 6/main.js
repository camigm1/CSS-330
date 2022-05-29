import Todos from "./Todos.js";
import { onTouch } from "./utilities.js";
import { renderTodoList } from "./Todos.js";

// const todo = new Todos();
let newTodos = new Todos();
const button = document.querySelector("#btn");
button.addEventListener("click", newTodos.addToDo);
button.addEventListener("click", newTodos.listTodos);
onTouch(button, newTodos.addToDo, newTodos.listTodos);
