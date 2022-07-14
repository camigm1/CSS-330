// import { writeToLS } from "./localStorage";

import { readFromLS, writeToLS } from "./localStorage.js";

const displayImg = document.querySelector(".display-img");
const description = document.querySelector(".img-description");
const titleImg = document.querySelector(".img-title");
const favorites = document.querySelector(".favorites-btn");
const favoriteDisplay = document.querySelector(".favorite-content");

document.querySelector("button").addEventListener("click", function () {
  getData();
});

favorites.addEventListener("click", addToFavorite);
// favorites.addEventListener("click", function () {
// const dataObject = {};
//   writeToLS("favorites", data);
// });

const getData = async function () {
  const inputData = document.querySelector("input").value;
  let request = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=LsSyYDT32WhDo8eJVNlqgigPF7rTIMpo6Eapd4zo&date=${inputData}`
  );
  let data = await request.json();
  displayContent(data);
  console.log(data);
};

getData();

const displayContent = function (data) {
  displayImg.src = data.hdurl;

  description.innerText = `Image Description: ${data.explanation}`;
  titleImg.innerText = data.title;
};

function addToFavorite() {
  let existing = readFromLS("favs");
  let newFavorite = {
    title: titleImg.innerText,
    image: displayImg.src,
  };
  existing.push(newFavorite);

  console.log(existing);
  writeToLS("favs", JSON.stringify(existing));
  createCard(existing[existing.length - 1]);
}

function createCard(item) {
  const title = item.title;
  const savedImg = item.image;
  let img = document.createElement("img");
  img.src = savedImg;
  img.style.width = "50px";
  favoriteDisplay.append(img);
}

function displayFavorites() {
  let favsArray = readFromLS("favs");
  for (let index = 0; index < favsArray.length; index++) {
    createCard(favsArray[index]);
  }
  // let li = document.createElement("li");

  // li.innerHTML = savedTitle;
  // .innerHTML += savedImg;
  // favoriteDisplay.append(li);
}

displayFavorites();

const deleteFavorites = function () {};
