// todo: { id : timestamp, content: string, completed: bool }
// toDoList = [toDo];

export function writeToLS(key, data) {
  const values = readFromLS(key);
}

export function readFromLS(key) {
  return JSON.parse(localStorage.getItem(key));
}
