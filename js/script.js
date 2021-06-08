const body = document.querySelector("body");
const display = document.querySelector(".colorDisplay");
const button = document.querySelector(".changeColorButton");
let colors = ["green", "red", "#F15025", "Rgba(133,122,200)", "#b00b69"];



window.addEventListener("load", function() {
  let randomNumber = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[randomNumber];
  display.innerHTML = `<h2>Background Color:</h2> <h2>${colors[randomNumber]}</h2>`;
});

button.addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[randomNumber];
    display.innerHTML = `<h2>Background Color:</h2> <h2>${colors[randomNumber]}</h2>`;
});