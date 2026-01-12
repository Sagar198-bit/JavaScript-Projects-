// scripting for Tip Calculator.....

const Amount_Input_box = document.getElementById("Amount-Input");
const Tip_Percentage_container = document.getElementById(
  "Tip-Percentage-container"
);

let Total_Tip;
const Total_People = document.getElementById("Total_People");

function calculateTip(Amount, Tip) {
  if (Number(Amount)) {
    const TipAmount = (Amount * Tip) / 100;
    return TipAmount;
  }
}

function PerPersonTip() {
  return Total_Tip / Number(event.target.value);
}

Tip_Percentage_container.addEventListener("click", (e) => {
  if (e.target.id === "Tip-Percentage-container") {
    return;
  }
  const Amount = Number(Amount_Input_box.value);
  const Tip = Number(e.target.value);
  if (Amount !== "") {
    Total_Tip = Number(calculateTip(Amount, Tip));
    document.getElementById("Per-Person-Tip").innerHTML = `$ ${Total_Tip}`;
  }
});

Total_People.addEventListener("keyup", (event) => {
  if (Total_Tip) {
    const Per_People_Tip = PerPersonTip();
    document.getElementById("Tip-Amount").innerHTML = `$ ${Per_People_Tip}`;
  }
});
