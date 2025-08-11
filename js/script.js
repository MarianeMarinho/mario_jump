const mario = document.querySelector(".mario");
const pipes = document.querySelector(".pipes");

const jump = () => {
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  const pipePosition = pipes.offsetLeft;
  //console.log(marioPosition);

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 105) {
    pipes.style.animation = "none";
    pipes.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./imgs/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";
  }
}, 10);

document.addEventListener("keydown", jump);
