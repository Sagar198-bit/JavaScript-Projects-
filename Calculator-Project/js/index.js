const numbers_button = document.getElementById("calculator-btn");
const Total_Calculations = document.getElementById("Total_calculation");
const All_Clear = document.getElementById("All_Clear");
const clear = document.getElementById("clear");

// all clear function
function AllClear() {
  document.getElementById("Total").innerHTML = "";
  document.getElementById("digits_operands").innerHTML = "";
}

function RemoveTotal() {
  document.getElementById("Total").innerHTML = "";
}

// clicking number and operands functionlity.....
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
});

// Total Functionlity.....
Total_Calculations.addEventListener("click", (e) => {
  const numbers_operands = document.getElementById("digits_operands").innerHTML;

  const Total = eval(numbers_operands);
  document.getElementById("Total").classList.add("text-lg");
  document.getElementById("Total").innerHTML = `Total : ${Total}`;
});

// All clear Functionlity...
All_Clear.addEventListener("click", AllClear);

// clear Functionlity ...

clear.addEventListener("click", () => {
  const str = document.getElementById("digits_operands").innerHTML;

  if (str === "") {
    return;
  } else {
    function newstr() {
      return str.slice(0, -1);
    }
    document.getElementById("digits_operands").innerHTML = newstr();
    RemoveTotal();
  }
});
