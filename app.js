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

let btnClicked = false;
let initialDeg = 0;
let spins = 0;
btnStart.addEventListener(`click`, () => {
  if (!btnClicked) {
    if (spins === 10) {
      spins = 0;
    }
    spins++;
    btnClicked = true;
    let spinDeg = 0;
    let randomDeg = Math.random() * 360;
    if (spins === 1) {
      //Spin 1 is random
      let rngVar = randomDeg;
      //Prevents landing on cell 1
      while (rngVar > 79 && rngVar < 101.5) {
        rngVar = Math.random() * 360;
      }
      spinDeg = rngVar;
    }
    if (spins === 2) {
      spinDeg = Math.random() * 22.5 + 79; //On Spin 2 always land on cell 1
    }
    if (spins === 3) {
      //Spin 3 is random
      let rngVar = randomDeg;
      //Prevents landing on cell 1
      while (rngVar > 79 && rngVar < 101.5) {
        rngVar = Math.random() * 360;
      }
      //Prevents landing on cell 2
      while (rngVar > 259.8 && rngVar < 282.3) {
        rngVar = Math.random() * 360;
      }
      spinDeg = rngVar;
    }
    if (spins === 4) {
      spinDeg = Math.random() * 22.5 + 259.8; //On Spin 4 always land on cell 2
    }
    if (spins === 5) {
      //Spin 5 is random
      let rngVar = randomDeg;
      //Prevents landing on cell 1
      while (rngVar > 79 && rngVar < 101.5) {
        rngVar = Math.random() * 360;
      }
      //Prevents landing on cell 2
      while (rngVar > 259.8 && rngVar < 282.3) {
        rngVar = Math.random() * 360;
      }
      spinDeg = rngVar;
    }
    if (spins === 6) {
      spinDeg = Math.random() * 22.5 + 79; //On Spin 6 always land on cell 1
    }
    if (spins === 7) {
      //Spin 7 is random
      let rngVar = randomDeg;
      //Prevents landing on cell 1
      while (rngVar > 79 && rngVar < 101.5) {
        rngVar = Math.random() * 360;
      }
      //Prevents landing on cell 2
      while (rngVar > 259.8 && rngVar < 282.3) {
        rngVar = Math.random() * 360;
      }
      spinDeg = rngVar;
    }
    if (spins === 8) {
      spinDeg = Math.random() * 22.5 + 259.8; //On Spin 8 always land on cell 2
    }
    if (spins === 9) {
      //Spin 9 is random
      let rngVar = randomDeg;
      //Prevents landing on cell 1
      while (rngVar > 79 && rngVar < 101.5) {
        rngVar = Math.random() * 360;
      }
      //Prevents landing on cell 2
      while (rngVar > 259.8 && rngVar < 282.3) {
        rngVar = Math.random() * 360;
      }
      spinDeg = rngVar;
    }
    if (spins === 10) {
      spinDeg = Math.random() * 22.5 + 79; //On Spin 10 always land on cell 1 and reset spins counter
      spins = 0;
    }

    if (spinDeg <= 11.2 || spinDeg >= 348.8) {
      console.log(cell3Value);
    } else if (spinDeg <= 33.7 && spinDeg >= 11.3) {
      console.log(cell10Value);
    } else if (spinDeg <= 56.3 && spinDeg >= 33.8) {
      console.log(cell9Value);
    } else if (spinDeg <= 78.9 && spinDeg >= 56.4) {
      console.log(cell14Value);
    } else if (spinDeg <= 101.5 && spinDeg >= 79) {
      console.log(cell1Value);
    } else if (spinDeg <= 124.1 && spinDeg >= 101.6) {
      console.log(cell11Value);
    } else if (spinDeg <= 146.7 && spinDeg >= 124.2) {
      console.log(cell7Value);
    } else if (spinDeg <= 169.3 && spinDeg >= 146.8) {
      console.log(cell15Value);
    } else if (spinDeg <= 191.9 && spinDeg >= 169.4) {
      console.log(cell4Value);
    } else if (spinDeg <= 214.5 && spinDeg >= 192) {
      console.log(cell6Value);
    } else if (spinDeg <= 237.1 && spinDeg >= 214.6) {
      console.log(cell5Value);
    } else if (spinDeg <= 259.7 && spinDeg >= 237.2) {
      console.log(cell13Value);
    } else if (spinDeg <= 282.3 && spinDeg >= 259.8) {
      console.log(cell2Value);
    } else if (spinDeg <= 304.9 && spinDeg >= 282.4) {
      console.log(cell12Value);
    } else if (spinDeg <= 327.5 && spinDeg >= 305) {
      console.log(cell8Value);
    } else if (spinDeg <= 348.7 && spinDeg >= 327.6) {
      console.log(cell16Value);
    }

    console.log(spinDeg);
    spinDeg = spinDeg + 720;
    wheelElement.style.transition = `all 5s ease `;
    wheelElement.style.transform = `rotate(${spinDeg}deg)`;

    setTimeout(() => {
      wheelElement.style.transition = `all 0s `;
      wheelElement.style.transform = `rotate(${spinDeg - 720}deg)`;
      btnClicked = false;
    }, 5000);
  }
});
