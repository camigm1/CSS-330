import { saveTodo } from "./Todos.js";

export function onTouch(elementSelector, callback) {
  elementSelector.addEventListener("touchend", callback);
}

export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

let todoItem = qs("#input-todo");
const button = document.querySelector("#btn");
const btnAll = document.querySelector("#btn-all");
const btnActive = document.querySelector("#btn-active");
const btnComplete = document.querySelector("#btn-complete");
const ul = document.querySelector("ul");
let checkbox = document.createElement("input");
window.listItem = document.createElement("li");
window.deleteBtn = document.createElement("a");
window.deleteBtn.setAttribute("class", "delete-btn");

// button.addEventListener("click", addToDo);
// onTouch(button, addToDo);

// export function addToDo() {
//   let todoItem = qs("#input-todo").value;
//   saveTodo(todoItem, "todo");
// let checkbox = document.createElement("input");
// window.listItem = document.createElement("li");
// window.deleteBtn = document.createElement("a");
// checkbox.textContent = todoItem.value;
// window.listItem.textContent = todoItem.value;
// window.deleteBtn.textContent = "X";

// window.deleteBtn.setAttribute("class", "delete-btn");
// checkbox.type = "checkbox";
// console.log(deleteBtn);
// // checkboxDiv.append(checkbox);
// // listItem.append(checkbox);
// ul.append(window.listItem);
// window.listItem.append(deleteBtn);
// window.listItem.append(checkbox);
// clearItem();
// document.querySelector(".delete-btn").addEventListener("click", deleteItem);
// }

// function clearItem() {
//   todoItem.value = "";
// }

// document.querySelector(".delete-btn").addEventListener("click", deleteItem);

// function deleteItem() {
//   window.listItem.classList.add("deleteItem");
//   console.log();
// }

// window.localStorage.setItem('item', todoItem.value)
