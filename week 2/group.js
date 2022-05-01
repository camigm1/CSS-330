//Challenge 1
let btn = document.querySelector("#btn");
btn.addEventListener("click", textContent);

function textContent() {
  let inputText = Number(document.querySelector("#input1").value);
  document.querySelector("#textContent").innerText = `${inputText}`;
}

//Challenge 2
let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", numberInput);

function numberInput() {
  let number = 0;
  let output2 = document.querySelector("#textContent2");
  let inputText2 = Number(document.querySelector("#input2").value);
  for (let i = 0; i <= inputText2; i++) {
    number += i;
    output2.innerHTML = number;
  }
}

//Challenge 3
let btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", addNumbers);

function addNumbers() {
  let inputText = Number(document.querySelector("#input1").value);
  let inputText2 = Number(document.querySelector("#input2").value);
  let sum = inputText + inputText2;
  let output3 = document.querySelector("#output3");
  output3.innerText = sum;
}
