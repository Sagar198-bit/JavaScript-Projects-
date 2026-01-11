const numbers_button = document.getElementById("calculator-btn");
const Total_Calculations = document.getElementById("Total_calculation");


numbers_button.addEventListener("click", function (event) {
  if (event.target.id === "calculator-btn") {
    return;
  }

  if (
    (event.target.innerHTML === "AC") |
    (event.target.innerHTML === "C") |
    (event.target.innerHTML === "=")
  ) {
    return;
  }

  document.getElementById(
    "digits_operands"
  ).innerHTML += `${event.target.innerHTML}`;

  console.log(document.getElementById("digits_operands"));
});


Total_Calculations.addEventListener('click')