const form = document.getElementById("gradeForm");
const input = document.getElementById("marks");
const message = document.getElementById("grade");

form.addEventListener("submit", (event) => {
  event.preventDefault(); //prevents reloading of page
  validateInput(input);
});

function validateInput(input) {
  console.log("input skeleton", input);
  console.log("input value", input.value);

  const checkInput = input.value;
  if (checkInput > 79 && checkInput < 100) {
    console.log("A");
    message.innerHTML = `<li>Grade Score A</li>`;
  } else if (checkInput >= 60 && checkInput <= 79) {
    console.log("B");
    message.innerHTML = `<li>Grade Score B</li>`;
  } else if (checkInput > 49 && checkInput <= 59) {
    console.log("C");
    message.innerHTML = `<li>Grade Score C</li>`;
  } else if (checkInput > 40 && checkInput <= 49) {
    console.log("D");
    message.innerHTML = `<li>Grade Score D</li>`;
  } else if (checkInput >= 0 && checkInput <= 40) {
    console.log("E");
    message.innerHTML = `<li>Grade Score E</li>`;
  } else {
    console.log("error, marks should be between 0 and 100");
    message.innerHTML = `<li style="color:red" >Errror</li>`;
  }
}
