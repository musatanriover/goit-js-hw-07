const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");


nameInput.addEventListener("input", () => {
 
  const inputValue = nameInput.value;

  nameOutput.textContent = inputValue === "" ? "Anonymous" : inputValue;
});
