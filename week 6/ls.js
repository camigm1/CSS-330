// todo: { id : timestamp, content: string, completed: bool }
// toDoList = [toDo];

export function writeToLS(key, data) {
  // const values = readFromLS(key);
  localStorage.setItem(key, data);
}

export function readFromLS(key) {
  return JSON.parse(localStorage.getItem(key));
}
