const button = document.querySelector("#btn");
const ul = document.querySelector("ul");

button.addEventListener("click", addToDo);

function addToDo() {
  let todoItem = document.querySelector("#input-todo").value;
  let item = document.createElement("li");
  item.textContent = todoItem;
  console.log(todoItem.value);
  item.style.color = "black";
  ul.append(item);
}
