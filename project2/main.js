// import { writeToLS } from "./localStorage";

const displayImg = document.querySelector(".display-img");
const description = document.querySelector(".img-description");
const titleImg = document.querySelector(".img-title");
const favorites = document.querySelector(".favorites-btn");

document.querySelector("button").addEventListener("click", function () {
  getData();
});

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
  if(favorites.clicked == true){
    
  }
  console.log(data);
};

getData();

const displayContent = function (data) {
  displayImg.src = data.hdurl;
  console.log(data.hdurl);
  description.innerText = `Image Description:${data.explanation}`;
  titleImg.innerText = data.title;
};

// const addToFavorite = function () {};

const deleteFavorites = function () {};
