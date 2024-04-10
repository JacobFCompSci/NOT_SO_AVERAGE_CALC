// Average Calc

// Listener

var calc = document.getElementById("calc-ave");

calc.addEventListener("click", calcAverage);
// Function

function calcAverage() {
  //Input

  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let num3 = +document.getElementById("num3").value;

  // Process

  let average = (num1 + num2 + num3) / 3;
  let sum = num1 + num2 + num3;
  let product = num1 * num2 * num3;
  let remainder = num1 % num2;
  let power = num1 ** num2;
  let rounded = num1.toFixed(2);
  let tan = Math.tan(num3);
  let random = Math.random() * (num1 - num2 + 1) + num1;

  // Output
  document.getElementById("ave").innerHTML = average;
  document.getElementById("sum").innerHTML = sum;
  document.getElementById("prod").innerHTML = product;
  document.getElementById("remain").innerHTML = remainder;
  document.getElementById("power").innerHTML = power;
  document.getElementById("round").innerHTML = rounded;
  document.getElementById("tan").innerHTML = tan;
  document.getElementById("random-num").innerHTML = random;
}
