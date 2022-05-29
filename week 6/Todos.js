import { qs, onTouch } from "./utilities.js";
import { writeToLS, readFromLS } from "./ls.js";

export default class Todos {
  constructor() {
    this.todoList = null;
  }
  addToDo() {
    let todoItem = qs("#input-todo").value;
    saveTodo(todoItem, "todo");
  }
  listTodos() {
    renderTodoList(todoList, "ul");
  }
  completeTodo() {
    //if checkbox is checked = completed
    // change boolean to true instead of false?
    //write a strike through?
    console.log(this.todoList);
  }
  removeTodo() {
    // let deleteBtn1 = document.querySelector(".delete-btn");

    //add event listener, grab delete btn
    const render = renderTodoList();
    //remove list/hide list
    render.classList.add("deleteItem");
    console.log("dfsdf");
  }
  filterTodos() {
    //display All
    // display active
    //display completed
  }
}

// const button = document.querySelector("#btn");
// button.addEventListener("click", Todos.addToDo);
// onTouch(button, Todos.addToDo);

const todoList = [];

export function saveTodo(task, key) {
  const toDo = {};
  toDo.id = Date.now();
  toDo.content = task;
  toDo.completed = false;
  todoList.push(toDo);
  console.log(todoList);
  writeToLS(key, todoList);
}

function getTodos(key) {
  if (todoList.length == 0) {
    return readFromLS(key);
  }
}

export function renderTodoList(list, element) {
  console.log("text");
  document.querySelector(element).innerHTML = "";
  list.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.id = item.id;
    let span = document.createElement("span");
    span.textContent = item.content;
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.completed;
    // checkbox.addEventListener("", completeTodo);
    let deleteBtn = document.createElement("a");
    deleteBtn.textContent = "X";
    // deleteBtn.addEventListener("click", Todos.removeTodo);
    deleteBtn.setAttribute("class", "delete-btn");
    listItem.append(checkbox, span, deleteBtn);
    document.querySelector(element).append(listItem);
  });
}
// let newTodos = new Todos();
// const button = document.querySelector("#btn");
// button.addEventListener("click", newTodos.addToDo);
// onTouch(button, newTodos.addToDo);
