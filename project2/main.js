import { readFromLS, removeFromLS, writeToLS } from "./localStorage.js";

const displayImg = document.querySelector(".display-img");
const description = document.querySelector(".img-description");
const titleImg = document.querySelector(".img-title");
const favorites = document.querySelector(".favorites-btn");
const favoriteDisplay = document.querySelector(".favorite-content");
const hide = document.querySelector(".hide");

document.querySelector("button").addEventListener("click", function () {
  getData();
});

favorites.addEventListener("click", addToFavorite);

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

  if (existing == null) {
    const newArray = [];
    let newFavorite = {
      title: titleImg.innerText,
      image: displayImg.src,
    };
    newArray.push(newFavorite);
    writeToLS("favs", JSON.stringify(newArray));
  } else {
    let newFavorite = {
      title: titleImg.innerText,
      image: displayImg.src,
    };
    existing.push(newFavorite);

    writeToLS("favs", JSON.stringify(existing));
    createCard(existing[existing.length - 1]);
  }
}

function createCard(item) {
  const title = item.title;
  const savedImg = item.image;
  let img = document.createElement("img");
  let imgDiv = document.createElement("div");
  let titleImg = document.createElement("p");
  let pButton = document.createElement("p");
  let aButton = document.createElement("a");
  aButton.addEventListener("mouseenter", function () {
    aButton.style.backgroundColor = "#1d3557";
    aButton.style.color = "#fff";
  });
  aButton.addEventListener("mouseleave", function () {
    aButton.style.backgroundColor = "#457b9d";
    aButton.style.color = "#fff";
  });
  aButton.style.cursor = "pointer";
  aButton.style.backgroundColor = "#457b9d";
  aButton.style.color = "#fff";
  aButton.style.padding = "2%";
  aButton.innerText = "Remove";
  aButton.style.borderRadius = "5px";
  aButton.addEventListener("click", function (e) {
    let existing2 = readFromLS("favs");
    let remove = e.target.parentNode.parentNode.children[1].innerText;
    let pos = existing2
      .map(function (e) {
        return e.title;
      })
      .indexOf(remove);
    let deleteFromArray = deleteFavorites(existing2, pos);
    imgDiv.style.display = "none";
    writeToLS("favs", JSON.stringify(deleteFromArray));
  });
  titleImg.innerHTML = `<span>Image Description</span>:  ${title}`;

  imgDiv.style.display = "block";
  imgDiv.style.width = "100%";
  imgDiv.style.marginRight = "0";
  img.src = savedImg;
  img.style.width = "60%";
  img.style.padding = "3%";
  pButton.append(aButton);
  imgDiv.append(img);
  imgDiv.append(titleImg);
  imgDiv.append(pButton);
  favoriteDisplay.append(imgDiv);
}

function displayFavorites() {
  let favsArray = readFromLS("favs");
  for (let index = 0; index < favsArray.length; index++) {
    createCard(favsArray[index]);
  }
}

displayFavorites();

function deleteFavorites(arr, index) {
  console.log(index);
  arr.splice(index, 1);

  return arr;
}

deleteFavorites();
