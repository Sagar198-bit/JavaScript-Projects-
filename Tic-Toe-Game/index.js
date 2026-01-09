const Arrayofvalue = new Array(9).fill(undefined);
let BtnValue = undefined;
const buttonContainer = document.getElementById("btn-container");

const playerchoice = document.getElementById("choose-symbol");

playerchoice.addEventListener("click", function (event) {
  const buttonX = document.getElementById("X");
  const buttonO = document.getElementById("O");
  const choosed = document.getElementById("choosed-Symbol");

  console.log(event.target.id);

  if (event.target.id === "X") {
    BtnValue = true;
    buttonX.disabled = true;

    if (!buttonX.disabled) {
      buttonX.disabled = true;
    }

    if (!buttonO.disabled) {
      buttonO.disabled = true;
    }

    choosed.innerHTML = "";
    choosed.innerHTML = `First Player choose ${event.target.innerHTML}`;
  }
  if (event.target.id === "O") {
    BtnValue = false;
    buttonX.disabled = true;
    if (!buttonX.disabled) {
      buttonX.disabled = true;
    }

    if (!buttonO.disabled) {
      buttonO.disabled = true;
    }
    choosed.innerHTML = "";
    choosed.innerHTML = `First Player choose ${event.target.innerHTML}`;
  }
});

function Celebration() {
  const jsConfetti = new JSConfetti();

  jsConfetti.addConfetti({
    confettiColors: [
      "#ff0a54",
      "#ff477e",
      "#ff7096",
      "#ff85a1",
      "#fbb1bd",
      "#f9bec7",
    ],
  });
}

function disableGameButtons() {
  const buttons = buttonContainer.querySelectorAll("button");

  buttons.forEach((btn) => {
    btn.disabled = true;
  });
}

function checkWinner() {
  if (
    Arrayofvalue[0] !== undefined &&
    Arrayofvalue[1] !== undefined &&
    Arrayofvalue[2] !== undefined
  ) {
    if (
      Arrayofvalue[0] === Arrayofvalue[1] &&
      Arrayofvalue[1] === Arrayofvalue[2]
    ) {
      Celebration();
      document.getElementById("anonunce-label").innerHTML = `
Congratulations Winner is ${Arrayofvalue[0]} 🎉`;
      disableGameButtons();
    }
  }
  if (
    Arrayofvalue[3] !== undefined &&
    Arrayofvalue[4] !== undefined &&
    Arrayofvalue[5] !== undefined
  ) {
    if (
      Arrayofvalue[3] === Arrayofvalue[4] &&
      Arrayofvalue[4] === Arrayofvalue[5]
    ) {
      Celebration();
      document.getElementById("anonunce-label").innerHTML = `
Congratulations Winner is ${Arrayofvalue[3]} 🎉`;
      disableGameButtons();
    }
  }
  if (
    Arrayofvalue[6] !== undefined &&
    Arrayofvalue[7] !== undefined &&
    Arrayofvalue[8] !== undefined
  ) {
    if (
      Arrayofvalue[6] === Arrayofvalue[7] &&
      Arrayofvalue[7] === Arrayofvalue[8]
    ) {
      Celebration();
      document.getElementById("anonunce-label").innerHTML = `
Congratulations Winner is ${Arrayofvalue[6]} 🎉`;
      disableGameButtons();
    }
  }
  if (
    Arrayofvalue[0] !== undefined &&
    Arrayofvalue[3] !== undefined &&
    Arrayofvalue[6] !== undefined
  ) {
    if (
      Arrayofvalue[0] === Arrayofvalue[3] &&
      Arrayofvalue[3] === Arrayofvalue[6]
    ) {
      Celebration();
      document.getElementById("anonunce-label").innerHTML = `
Congratulations Winner is ${Arrayofvalue[0]} 🎉`;
      disableGameButtons();
    }
  }
  if (
    Arrayofvalue[1] !== undefined &&
    Arrayofvalue[4] !== undefined &&
    Arrayofvalue[7] !== undefined
  ) {
    if (
      Arrayofvalue[1] === Arrayofvalue[4] &&
      Arrayofvalue[4] === Arrayofvalue[7]
    ) {
      Celebration();
      document.getElementById("anonunce-label").innerHTML = `
Congratulations Winner is ${Arrayofvalue[1]} 🎉`;
      disableGameButtons();
    }
  }
  if (
    Arrayofvalue[2] !== undefined &&
    Arrayofvalue[5] !== undefined &&
    Arrayofvalue[8] !== undefined
  ) {
    if (
      Arrayofvalue[2] === Arrayofvalue[5] &&
      Arrayofvalue[5] === Arrayofvalue[8]
    ) {
      Celebration();
      document.getElementById("anonunce-label").innerHTML = `
Congratulations Winner is ${Arrayofvalue[2]} 🎉`;
      disableGameButtons();
    }
  }
  if (
    Arrayofvalue[0] !== undefined &&
    Arrayofvalue[4] !== undefined &&
    Arrayofvalue[8] !== undefined
  ) {
    if (
      Arrayofvalue[0] === Arrayofvalue[4] &&
      Arrayofvalue[4] === Arrayofvalue[8]
    ) {
      Celebration();
      document.getElementById("anonunce-label").innerHTML = `
Congratulations Winner is ${Arrayofvalue[0]} 🎉`;
      disableGameButtons();
    }
  }
  if (
    Arrayofvalue[2] !== undefined &&
    Arrayofvalue[4] !== undefined &&
    Arrayofvalue[6] !== undefined
  ) {
    if (
      Arrayofvalue[2] === Arrayofvalue[4] &&
      Arrayofvalue[4] === Arrayofvalue[6]
    ) {
      Celebration();
      document.getElementById("anonunce-label").innerHTML = `
Congratulations Winner is ${Arrayofvalue[2]} 🎉`;
      disableGameButtons();
    }
  }
  if (
    Arrayofvalue[0] !== undefined &&
    Arrayofvalue[1] !== undefined &&
    Arrayofvalue[2] !== undefined &&
    Arrayofvalue[3] !== undefined &&
    Arrayofvalue[4] !== undefined &&
    Arrayofvalue[5] !== undefined &&
    Arrayofvalue[6] !== undefined &&
    Arrayofvalue[7] !== undefined &&
    Arrayofvalue[8] !== undefined
  ) {
    document.getElementById(
      "anonunce-label"
    ).innerHTML = `Game has been Tie Please Try Again !!`;
    disableGameButtons();
  }
}

buttonContainer.addEventListener("click", function (event) {
  if (event.target.id === "btn-container") {
    event.stopPropagation();
    return;
  }
  const button = document.getElementById(event.target.id);

  if (BtnValue === true) {
    if ((button.innerHTML === "X") | (button.innerHTML === "O")) {
      return;
    } else {
      button.innerHTML = "X";
      Arrayofvalue[button.id] = "X";
      BtnValue = false;
      checkWinner();
    }
  }
  if (BtnValue === false) {
    if ((button.innerHTML === "X") | (button.innerHTML === "O")) {
      return;
    } else {
      button.innerHTML = "O";
      Arrayofvalue[button.id] = "O";
      BtnValue = true;
      checkWinner();
    }
  }
});
