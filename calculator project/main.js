function calculate() {
  try {
    var display = document.querySelector(".display input");
    var result = eval(display.value);
    display.value = result;
  } catch (error) {
    alert("error" + error.message);
  }
}
