const input = form.elements.searchInput;

input.addEventListener("focus", () => alert("focused"), false);

const form = document.forms["search"];
form.addEventListener("submit", search, false);

function search() {
  alert(" Form Submitted");
  event.preventDefault();
}

//Chapter 12
//Constructor example
const Dice = function (sides = 6) {
  this.sides = sides;
  this.roll = function () {
    return Math.floor(this.sides * Math.random() + 1);
  };
};

const redDice = new Dice();
//or
const whiteDice = new Dice(4);

//You can find prototype prpoperty like so:
raph.constructor.prototype;
    Turtle { attack: [Function], weapon: 'Hands' }
