let todoItem = document.querySelector("#input-todo");
const button = document.querySelector("#btn");
const btnAll = document.querySelector("#btn-all");
const btnActive = document.querySelector("#btn-active");
const btnComplete = document.querySelector("#btn-complete");
const ul = document.querySelector("ul");

button.addEventListener("click", addToDo);

function addToDo() {
  let checkbox = document.createElement("input");
  let listItem = document.createElement("li");
  let deleteBtn = document.createElement("a");
  checkbox.textContent = todoItem.value;
  listItem.textContent = todoItem.value;
  deleteBtn.textContent = "X";
  checkbox.type = "checkbox";
  console.log(todoItem.value);
  // checkboxDiv.append(checkbox);
  // listItem.append(checkbox);
  ul.append(listItem);
  listItem.append(deleteBtn);
  listItem.append(checkbox);
  clearItem();
}

function clearItem() {
  todoItem.value = "";
}

btnComplete.addEventListener("click", completeItem);

function completeItem() {}
