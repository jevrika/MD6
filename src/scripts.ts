const buttonForTextChanging = document.querySelector<HTMLButtonElement>('.button--second');
const divTextToChange = document.querySelector('.box-second-text');

buttonForTextChanging.addEventListener('click', () => {
  divTextToChange.textContent = 'SUCCESS';
});

const buttonForHiding = document.querySelector<HTMLButtonElement>('.button--third');
const divToHide = document.querySelector<HTMLDivElement>('.box-3');

buttonForHiding.addEventListener('click', () => {
  divToHide.style.display = 'none';
});

const buttonToHideAndShow = document.querySelector<HTMLButtonElement>('.button--fourth');
const divToHideAndShow = document.querySelector<HTMLDivElement>('.box-4');

buttonToHideAndShow.addEventListener('click', () => {
  if (divToHideAndShow.style.visibility === 'hidden') {
    divToHideAndShow.style.visibility = 'visible';
  } else {
    divToHideAndShow.style.visibility = 'hidden';
  }
});

const buttonForColorChanging = document.querySelector<HTMLButtonElement>('.button--fifth');
const divColortToChange = document.querySelector<HTMLDivElement>('.box-5');

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

buttonForColorChanging.addEventListener('click', () => {
  divColortToChange.style.background = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
});

const buttonForTimer = document.querySelector<HTMLButtonElement>('.button--sixth');
const divForTimer = document.querySelector<HTMLDivElement>('.box-sixth-text');

let secondsElapsed = 0;

buttonForTimer.addEventListener('click', () => {
  function performAction() {
    setTimeout(() => {
      secondsElapsed += 1;
      divForTimer.innerHTML = String(secondsElapsed);
      if (secondsElapsed < 10) {
        performAction();
      }
    }, 3 * 1000);
  }
  performAction();
});

const buttonForColorChangingForAllDivs = document.querySelector<HTMLButtonElement>('.button--seventh');

const containerToChangeColor = document.querySelector<HTMLDivElement>('body');

const firstDivToChangeColor = document.querySelector<HTMLDivElement>('.box-1');
const secondDivToChangeColor = document.querySelector<HTMLDivElement>('.box-2');
const thirdtDivToChangeColor = document.querySelector<HTMLDivElement>('.box-3');
const fourthDivToChangeColor = document.querySelector<HTMLDivElement>('.box-4');
const fifthtDivToChangeColor = document.querySelector<HTMLDivElement>('.box-5');
const sixthtDivToChangeColor = document.querySelector<HTMLDivElement>('.box-6');

buttonForColorChangingForAllDivs.addEventListener('click', () => {
  firstDivToChangeColor.style.background = '#18D5E1';
  secondDivToChangeColor.style.background = '#18D5E1';
  thirdtDivToChangeColor.style.background = '#18D5E1';
  fourthDivToChangeColor.style.background = '#18D5E1';
  fifthtDivToChangeColor.style.background = '#18D5E1';
  sixthtDivToChangeColor.style.background = '#18D5E1';

  containerToChangeColor.style.background = '#000000';
});

const divTochangeColorMouseOver = document.querySelector<HTMLDivElement>('.box-1');

divTochangeColorMouseOver.addEventListener('mouseover', () => {
  divTochangeColorMouseOver.style.background = 'red';
});
