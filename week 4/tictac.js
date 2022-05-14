let div1 = document.querySelector("#block_0");
let div2 = document.querySelector("#block_1");
let div3 = document.querySelector("#block_2");
let div4 = document.querySelector("#block_3");
let div5 = document.querySelector("#block_4");
let div6 = document.querySelector("#block_5");
let div7 = document.querySelector("#block_6");
let div8 = document.querySelector("#block_7");
let div9 = document.querySelector("#block_8");
let resetBtn = document.querySelector("#resetBtn");

div1.addEventListener("click", click);
div2.addEventListener("click", click);
div3.addEventListener("click", click);
div4.addEventListener("click", click);
div5.addEventListener("click", click);
div6.addEventListener("click", click);
div7.addEventListener("click", click);
div8.addEventListener("click", click);
div9.addEventListener("click", click);
resetBtn.addEventListener("click", resetBoard);

function click() {
  let turn = document.querySelector("#turn");

  if (this.textContent == "") {
    if (turn.innerHTML == "X turn") {
      this.textContent = "x";
      turn.innerHTML = "O turn";
    } else {
      this.textContent = "O";
      turn.innerHTML = "X turn";
    }
  }
}

function resetBoard() {}

let boxes = [];
boxes.push(div1);
boxes.push(div2);
boxes.push(div3);
boxes.push(div4);
boxes.push(div5);
boxes.push(div6);
boxes.push(div7);
boxes.push(div8);
boxes.push(div9);

function resetBoard() {
  boxes.forEach((div) => {
    div.textContent = "";
  });
}
