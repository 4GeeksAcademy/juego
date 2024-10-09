document.addEventListener("DOMContentLoaded", function() {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  let attempts = 0;

  window.guessNumberGame = function() {
    const userGuessInput = document.getElementById("guessInput");
    const userGuess = userGuessInput.value;
    const resultBox = document.getElementById("resultBox");

    resultBox.style.display = "none";
    resultBox.className = "default";

    if (isNaN(userGuess) || userGuess.trim() === "") {
      resultBox.textContent = "Ingresa un número válido.";
      resultBox.style.display = "block";
      userGuessInput.style.borderColor = "";
      return;
    }

    const guess = parseInt(userGuess);
    attempts++;

    if (guess === randomNumber) {
      resultBox.textContent = `¡Felicitaciones Javier! Adivinaste el número correcto en ${attempts} intentos.`;
      resultBox.className = "default";
      resultBox.style.display = "block";
      resetGame();
    } else {
      userGuessInput.style.borderColor = "red";

      if (guess > randomNumber) {
        resultBox.textContent =
          "Tu número es muy alto Javier, intenta uno más bajo.";
      } else {
        resultBox.textContent =
          "Tu número es muy bajo Javier, intenta uno más alto.";
      }
      resultBox.style.display = "block";

      if (attempts >= 3) {
        resultBox.textContent = `¡Perdiste! El número correcto era ${randomNumber}.`;
        resultBox.className = "correct";
        resultBox.style.display = "block";
        resetGame();
      }
    }
  };

  function resetGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").style.borderColor = "";
  }
});
