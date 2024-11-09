const imageContainerEl = document.querySelector(".image-container");
const prevBtnEl = document.getElementById("prev");
const nextBtnEl = document.getElementById("next");

let x = 0;
let timer;

prevBtnEl.addEventListener("click", () => {
  x += 45;
  clearTimeout(timer);
  updateFrame();
});

nextBtnEl.addEventListener("click", () => {
  x -= 45;
  clearTimeout(timer);
  updateFrame();
});

const updateFrame = () => {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;

  timer = setTimeout(() => {
    x -= 45;
    updateFrame();
  }, 3000);
};

updateFrame();
