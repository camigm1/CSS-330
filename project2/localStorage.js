export function writeToLS(key, data) {
  // const values = readFromLS(key);
  localStorage.setItem(key, data);
}

export function readFromLS(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function removeFromLS(key) {
  return localStorage.removeItem(key);
}
