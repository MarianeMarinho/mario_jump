const mario = document.querySelector(".mario");
const pipes = document.querySelector(".pipes");
const clouds = document.querySelector(".clouds");

const jump = () => {
   mario.classList.add("jump");
   setTimeout(() => {
      mario.classList.remove("jump");
   }, 500);
};

let score = 0;
let contadorTempo = 0;
const scoreNum = document.querySelector(".score-num");

const loop = setInterval(() => {
   contadorTempo += 10;

   if (contadorTempo >= 100) {
      score++;
      scoreNum.textContent = score;
      contadorTempo = 0;
   }

   const cloudsPosition = +window.getComputedStyle(clouds).right.replace("px", "");

   const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

   const pipePosition = pipes.offsetLeft;
   if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 105) {
      pipes.style.animation = "none";
      pipes.style.left = `${pipePosition}px`;

      mario.style.animation = "none";
      mario.style.bottom = `${marioPosition}px`;

      mario.src = "./imgs/game-over.png";
      mario.style.width = "75px";
      mario.style.marginLeft = "50px";

      clouds.style.animation = "none";
      clouds.style.right = `${cloudsPosition}px`;
      clearInterval(loop);
   }
}, 10);

document.addEventListener("keydown", jump);
