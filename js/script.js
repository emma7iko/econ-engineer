function calculate_factor() {
  var i = parseFloat(document.getElementById("i").value);
  i = (i / 100);
  var n = parseInt(document.getElementById("n").value);
  var factor = document.getElementById("factor").value;
  var result = 0;

  if (factor == "P/F") {
      result = Math.pow((1 + i), -n);
  } else if (factor == "P/A") {
      result = (Math.pow((1 + i), n) - 1) / (i * Math.pow((1 + i), n));
  } else if (factor == "P/G") {
      var eq1 = (Math.pow((1 + i), n) - 1) / (i * Math.pow((1 + i), n));
      var eq2 = n / (Math.pow((1 + i), n));
      var eq3 = 1 / i;
      result = eq3 * (eq1 - eq2);
  } else if (factor == "F/P") {
      result = Math.pow((1 + i), n);
  } else if (factor == "F/A") {
      result = (Math.pow((1 + i), n) - 1) / i;
  } else if (factor == "F/G") {
      var eq1 = (Math.pow((1 + i), n) - 1) / i;
      var eq2 = 1 / i;
      result = eq2 * (eq1 - n);
  } else if (factor == "A/P") {
      result = (i * Math.pow((1 + i), n)) / (Math.pow((1 + i), n) - 1);
  } else if (factor == "A/F") {
      result = i / (Math.pow((1 + i), n) - 1);
  } else if (factor == "A/G") {
      var eq1 = 1 / i;
      var eq2 = n / (Math.pow(1 + i, n) - 1);
      result = eq1 - eq2;
  } else {
      result = "ERROR";
  }

  result = result.toFixed(5);
  var final_result = "(" + factor + ", " + (i * 100) + "%, " + n + ") = " + result;
  document.getElementById("result").innerHTML = final_result;
}
