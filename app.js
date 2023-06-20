const wheelElement = document.querySelector(`.wheel`);
const btnStart = document.querySelector(`.btn-start`);
const cell1 = document.querySelector(`.cell1`);
const cell2 = document.querySelector(`.cell2`);
const cell3 = document.querySelector(`.cell3`);
const cell4 = document.querySelector(`.cell4`);
const cell5 = document.querySelector(`.cell5`);
const cell6 = document.querySelector(`.cell6`);
const cell7 = document.querySelector(`.cell7`);
const cell8 = document.querySelector(`.cell8`);
const cell9 = document.querySelector(`.cell9`);
const cell10 = document.querySelector(`.cell10`);
const cell11 = document.querySelector(`.cell11`);
const cell12 = document.querySelector(`.cell12`);
const cell13 = document.querySelector(`.cell13`);
const cell14 = document.querySelector(`.cell14`);
const cell15 = document.querySelector(`.cell15`);
const cell16 = document.querySelector(`.cell16`);

const cell1Value = cell1.querySelector(`b`).textContent;
const cell2Value = cell2.querySelector(`b`).textContent;
const cell3Value = cell3.querySelector(`b`).textContent;
const cell4Value = cell4.querySelector(`b`).textContent;
const cell5Value = cell5.querySelector(`b`).textContent;
const cell6Value = cell6.querySelector(`b`).textContent;
const cell7Value = cell7.querySelector(`b`).textContent;
const cell8Value = cell8.querySelector(`b`).textContent;
const cell9Value = cell9.querySelector(`b`).textContent;
const cell10Value = cell10.querySelector(`b`).textContent;
const cell11Value = cell11.querySelector(`b`).textContent;
const cell12Value = cell12.querySelector(`b`).textContent;
const cell13Value = cell13.querySelector(`b`).textContent;
const cell14Value = cell14.querySelector(`b`).textContent;
const cell15Value = cell15.querySelector(`b`).textContent;
const cell16Value = cell16.querySelector(`b`).textContent;

console.log(cell2Value);
let btnClicked = false;
let initialDeg = 0;
btnStart.addEventListener(`click`, () => {
  if (!btnClicked) {
    btnClicked = true;
    let randomDeg = Math.random() * 360;
    if (randomDeg <= 11.2 || randomDeg >= 348.8) {
      console.log(cell3Value);
    } else if (randomDeg <= 33.7 && randomDeg >= 11.3) {
      console.log(cell10Value);
    } else if (randomDeg <= 56.3 && randomDeg >= 33.8) {
      console.log(cell9Value);
    } else if (randomDeg <= 78.9 && randomDeg >= 56.4) {
      console.log(cell14Value);
    } else if (randomDeg <= 101.5 && randomDeg >= 79) {
      console.log(cell1Value);
    } else if (randomDeg <= 124.1 && randomDeg >= 101.6) {
      console.log(cell11Value);
    } else if (randomDeg <= 146.7 && randomDeg >= 124.2) {
      console.log(cell7Value);
    } else if (randomDeg <= 169.3 && randomDeg >= 146.8) {
      console.log(cell15Value);
    } else if (randomDeg <= 191.9 && randomDeg >= 169.4) {
      console.log(cell4Value);
    } else if (randomDeg <= 214.5 && randomDeg >= 192) {
      console.log(cell6Value);
    } else if (randomDeg <= 237.1 && randomDeg >= 214.6) {
      console.log(cell5Value);
    } else if (randomDeg <= 259.7 && randomDeg >= 237.2) {
      console.log(cell13Value);
    } else if (randomDeg <= 282.3 && randomDeg >= 259.8) {
      console.log(cell2Value);
    } else if (randomDeg <= 304.9 && randomDeg >= 282.4) {
      console.log(cell12Value);
    } else if (randomDeg <= 327.5 && randomDeg >= 305) {
      console.log(cell8Value);
    } else if (randomDeg <= 348.7 && randomDeg >= 327.6) {
      console.log(cell16Value);
    }

    console.log(randomDeg);
    randomDeg = randomDeg + 720;
    wheelElement.style.transition = `all 5s ease `;
    wheelElement.style.transform = `rotate(${randomDeg}deg)`;

    setTimeout(() => {
      wheelElement.style.transition = `all 0s `;
      wheelElement.style.transform = `rotate(${randomDeg - 720}deg)`;
      btnClicked = false;
    }, 5000);
  }
});
