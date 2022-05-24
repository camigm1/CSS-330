let todoItem = document.querySelector("#input-todo");
const button = document.querySelector("#btn");
const ul = document.querySelector("ul");
const btnAll = document.querySelector("#btn-all");
const btnActive = document.querySelector("#btn-active");
const btnComplete = document.querySelector("#btn-complete");

button.addEventListener("click", addToDo);

function addToDo() {
  let item = document.createElement("li");
  item.textContent = todoItem.value;
  console.log(todoItem.value);
  item.style.color = "black";
  ul.append(item);
  clearItem();
}

function clearItem() {
  todoItem.value = "";
}

btnComplete.addEventListener("click", completeItem);

function completeItem() {}
