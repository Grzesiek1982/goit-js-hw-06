function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.body;
const buttonEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");

buttonEl.addEventListener("click", () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = bodyEl.style.backgroundColor;
});
