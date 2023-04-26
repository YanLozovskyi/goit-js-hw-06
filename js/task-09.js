const refs = {
  span: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
  body: document.body,
};

refs.button.addEventListener("click", changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  const currentColor = getRandomHexColor();
  refs.body.style.backgroundColor = currentColor;
  refs.span.textContent = refs.body.style.backgroundColor;
}
