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

const balanceBoard = document.querySelector(`.balance`);
const heading = document.querySelector(`.heading`);
const backdrop = document.querySelector(`.backdrop`);
const bonusGame = document.querySelector(`.bonus-game`);

const wheelSpinSound = new Audio(`./assets/sound/wheelSound.wav`);
const freeSpinSound = new Audio(`./assets/sound/freeSpinsSound.wav`);

let btnClicked = false;
let initialDeg = 0;
let spins = 0;
let balance = 0;
let totalWin = 0;
let currentWin = 0;
let freeSpinsTriggered = false;
let freeSpins = 0;

btnStart.addEventListener(`click`, () => {
  if (!btnClicked) {
    if (spins === 10) {
      spins = 0;
    }
    wheelSpinSound.play();
    heading.style.color = "white";
    heading.textContent = `Желаем Ви успех!`;
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
      spinDeg = Math.random() * 21 + 79; //On Spin 2 always land on cell 1
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
      spinDeg = Math.random() * 21 + 259.8; //On Spin 4 always land on cell 2
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
      spinDeg = Math.random() * 21 + 79; //On Spin 6 always land on cell 1
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
      spinDeg = Math.random() * 21 + 259.8; //On Spin 8 always land on cell 2
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
      spinDeg = Math.random() * 21 + 79; //On Spin 10 always land on cell 1 and reset spins counter
      spins = 0;
    }
    // spinDeg = 256; // Uncomment to check Free Spins
    checkValue(spinDeg);

    spinDeg = spinDeg + 720;
    wheelElement.style.transition = `all 5s ease `;
    wheelElement.style.transform = `rotate(${spinDeg}deg)`;

    setTimeout(() => {
      wheelElement.style.transition = `all 0s `;
      wheelElement.style.transform = `rotate(${spinDeg - 720}deg)`;
      btnClicked = false;
      balanceBoard.textContent = totalWin;

      if (freeSpinsTriggered) {
        backdrop.style.display = "block";
        bonusGame.style.display = "flex";
        freeSpinSound.play();
        //Inside free spins
        setTimeout(() => {
          backdrop.style.display = "none";
          bonusGame.style.display = "none";

          heading.style.color = "purple";
          heading.textContent = `Брой безплатни завъртания ${freeSpins} от 3`;
          btnClicked = true;
          bonusGameSpins();
        }, 4000);
        //End of free spins
      } else {
        heading.style.color = "green";
        heading.textContent = `Поздравления! Вие спечелихте ${currentWin} кредита!`;
      }
    }, 5000);
  }
});

function checkValue(spinDeg, isBonusTriggered) {
  let bonusWin = 0;
  if (spinDeg <= 11.2 || spinDeg >= 348.8) {
    currentWin = Number(cell3Value);
    totalWin += Number(cell3Value);
    console.log(cell3Value);
  } else if (spinDeg <= 33.7 && spinDeg >= 11.3) {
    currentWin = Number(cell10Value);
    totalWin += Number(cell10Value);
    console.log(cell10Value);
  } else if (spinDeg <= 56.3 && spinDeg >= 33.8) {
    currentWin = Number(cell9Value);
    totalWin += Number(cell9Value);
    console.log(cell9Value);
  } else if (spinDeg <= 78.9 && spinDeg >= 56.4) {
    currentWin = Number(cell14Value);
    totalWin += Number(cell14Value);
    console.log(cell14Value);
  } else if (spinDeg <= 101.5 && spinDeg >= 79) {
    currentWin = Number(cell1Value);
    totalWin += Number(cell1Value);
    console.log(cell1Value);
  } else if (spinDeg <= 124.1 && spinDeg >= 101.6) {
    currentWin = Number(cell11Value);
    totalWin += Number(cell11Value);
    console.log(cell11Value);
  } else if (spinDeg <= 146.7 && spinDeg >= 124.2) {
    currentWin = Number(cell7Value);
    totalWin += Number(cell7Value);
    console.log(cell7Value);
  } else if (spinDeg <= 169.3 && spinDeg >= 146.8) {
    currentWin = Number(cell15Value);
    totalWin += Number(cell15Value);
    console.log(cell15Value);
  } else if (spinDeg <= 191.9 && spinDeg >= 169.4) {
    currentWin = Number(cell4Value);
    totalWin += Number(cell4Value);
    console.log(cell4Value);
  } else if (spinDeg <= 214.5 && spinDeg >= 192) {
    currentWin = Number(cell6Value);
    totalWin += Number(cell6Value);
    console.log(cell6Value);
  } else if (spinDeg <= 237.1 && spinDeg >= 214.6) {
    currentWin = Number(cell5Value);
    totalWin += Number(cell5Value);
    console.log(cell5Value);
  } else if (spinDeg <= 259 && spinDeg >= 237.2) {
    freeSpinsTriggered = true;
    console.log(`You win Free Spins`);
    console.log(cell13Value);
  } else if (spinDeg <= 282.3 && spinDeg >= 259) {
    currentWin = Number(cell2Value);
    totalWin += Number(cell2Value);
    console.log(cell2Value);
  } else if (spinDeg <= 304.9 && spinDeg >= 282.4) {
    currentWin = Number(cell12Value);
    totalWin += Number(cell12Value);
    console.log(cell12Value);
  } else if (spinDeg <= 327.5 && spinDeg >= 305) {
    currentWin = Number(cell8Value);
    totalWin += Number(cell8Value);
    console.log(cell8Value);
  } else if (spinDeg <= 348.7 && spinDeg >= 327.6) {
    currentWin = Number(cell16Value);
    totalWin += Number(cell16Value);
    console.log(cell16Value);
  }
  if (isBonusTriggered) {
    bonusWin = currentWin;
    return bonusWin;
  }
}

function bonusSpin() {
  heading.style.color = "purple";
  freeSpins++;
  heading.textContent = `Брой безплатни завъртания ${freeSpins} от 3`;
  spinDeg = Math.random() * 360 + 720;
  wheelElement.style.transition = `all 5s ease `;
  wheelElement.style.transform = `rotate(${spinDeg}deg)`;
  wheelSpinSound.play();
  setTimeout(() => {
    wheelElement.style.transition = `all 0s `;
    wheelElement.style.transform = `rotate(${spinDeg - 720}deg)`;
  }, 5000);
  return spinDeg - 720;
}
function bonusGameSpins() {
  let bonusWin = 0;
  let spin1Deg = 0;
  let spin2Deg = 0;
  let spin3Deg = 0;
  spin1Deg = bonusSpin();
  setTimeout(() => {
    spin2Deg = bonusSpin();
  }, 6000);
  setTimeout(() => {
    spin3Deg = bonusSpin();
  }, 12000);
  setTimeout(() => {
    console.log(spin1Deg, spin2Deg, spin3Deg);
    let win1 = checkValue(spin1Deg, true);
    let win2 = checkValue(spin2Deg, true);
    let win3 = checkValue(spin3Deg, true);
    bonusWin = win1 + win2 + win3;
    balance += bonusWin;
    balanceBoard.textContent = balance;
    heading.style.color = "green";
    heading.textContent = `Поздравления! Вие спечелихте ${bonusWin} кредита от бонус играта!`;
    btnClicked = false;
    freeSpins = 0;
  }, 18000);
}
