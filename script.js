const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;

function handleKeyUp(event) {
  if (event.keyCode === 32) {
    if(!isJumping) {
    jump();
    }
  }
}

function jump() {
  let position = 0;
  isJumping = true;

  let upInterval = setInterval(() => {
    if (position >= 150) {
      // Descendo
      clearInterval(upInterval);

      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval);
          isJumping = false
        } else {
          position -= 20;
          dino.style.bottom = position + 'px';
        }
      }, 20);
    } else {
      // Subindo
      position += 20;
      dino.style.bottom = position + 'px';
    }
  }, 20);
}

function creatCactus() {
  const cactus = document.createElement('div');
  let cactusPosition = 1000;

  cactus.classList.add('cactus');
  background.appendChild(cactus);
  cactus.style.left = cactusPosition + 'px';
}

creatCactus();
document.addEventListener('keyup', handleKeyUp);