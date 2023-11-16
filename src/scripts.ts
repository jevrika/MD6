const button = document.querySelectorAll<HTMLButtonElement>('.button');

const box = document.querySelectorAll<HTMLDivElement>('.box');

button[0].addEventListener('click', () => {
  box[0].style.backgroundColor = 'yellow';
});

button[1].addEventListener('click', () => {
  box[1].textContent = 'SUCCESS';
});

button[2].addEventListener('click', () => {
  box[2].style.display = 'none';
});

button[3].addEventListener('click', () => {
  if (box[3].style.visibility === 'hidden') {
    box[3].style.visibility = 'visible';
  } else {
    box[3].style.visibility = 'hidden';
  }
});

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

const colors = [
  getRandomColor(),
  getRandomColor(),
  getRandomColor(),
  getRandomColor(),
  getRandomColor(),
];

let currentIndex = 0;

button[4].addEventListener('click', () => {
  box[4].style.background = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
});

let secondsElapsed = 0;

button[5].addEventListener('click', () => {
  function performAction() {
    setTimeout(() => {
      secondsElapsed += 1;
      box[5].innerHTML = String(secondsElapsed);
      if (secondsElapsed < 10) {
        performAction();
      }
    }, 3 * 1000);
  }
  performAction();
});

const containerToChangeColor = document.querySelector<HTMLBodyElement>('body');

button[6].addEventListener('click', () => {
  for (let i = 0; i < box.length; i += 1) {
    box[i].style.backgroundColor = '#18D5E1';
  }
  containerToChangeColor.style.background = '#000000';
});

box[0].addEventListener('mouseenter', () => {
  box[0].style.background = 'red';
});

let timer = 0;
let timerF: any;

box[4].addEventListener('mouseenter', () => {
  timerF = setInterval(() => {
    if ((timer) < 10) {
      timer += 1;
      box[4].innerHTML = String(timer);
    }
  }, 1000);
});

box[4].addEventListener('mouseout', () => {
  clearInterval(timerF);
  timer = 0;
  box[4].innerHTML = String(0);
});

const inputElement = document.querySelector<HTMLInputElement>('.textInput');
const displayElement = document.querySelector<HTMLDivElement>('.box-for-text');

inputElement.addEventListener('input', () => {
  displayElement.textContent = `${inputElement.value}`;
});
