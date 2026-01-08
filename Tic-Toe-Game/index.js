//Logic of tic-toe-game....

const Arrayofvalue = new Array(9).fill(undefined);
let BtnValue = true;
const buttonContainer = document.getElementById("btn-container");

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
      document.getElementById("winner-anonunce-label").innerHTML = `
Congratulations Winner is ${Arrayofvalue[0]} 🎉 <button class="h-[10px] w-[50px]">Reset ?</button>`;
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
      document.getElementById("winner-anonunce-label").innerHTML = `
Congratulations Winner is ${Arrayofvalue[0]} 🎉`;
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
      document.getElementById("winner-anonunce-label").innerHTML = `
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
      document.getElementById("winner-anonunce-label").innerHTML = `
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
      document.getElementById("winner-anonunce-label").innerHTML = `
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
      document.getElementById("winner-anonunce-label").innerHTML = `
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
      document.getElementById("winner-anonunce-label").innerHTML = `
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
      document.getElementById("winner-anonunce-label").innerHTML = `
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
      "winner-anonunce-label"
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

  if (BtnValue) {
    if ((button.innerHTML === "X") | (button.innerHTML === "O")) {
      return;
    } else {
      button.innerHTML = "X";
      Arrayofvalue[button.id] = "X";
      BtnValue = false;
      checkWinner();
    }
  } else {
    if ((button.innerHTML === "X") | (button.innerHTML === "O")) {
      return;
    } else {
      button.innerHTML = "O";
      Arrayofvalue[button.id] = "O";
      BtnValue = true;
      checkWinner();
    }
  }

  // invoking the function.....
});
