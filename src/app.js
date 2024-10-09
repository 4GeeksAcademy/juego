document.addEventListener("DOMContentLoaded", function() {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  let attempts = 0;

  window.guessNumberGame = function() {
    const userGuess = document.getElementById("guessInput").value;

    if (isNaN(userGuess)) {
      alert("Ingresa un numero valido.");
      return;
    }

    const guess = parseInt(userGuess);
    attempts++;

    if (guess === randomNumber) {
      alert(
        `Felicitaciones Javier! Adivinaste el numero correcto en ${attempts} intentos.`
      );

      randomNumber = Math.floor(Math.random() * 10) + 1;
      attempts = 0;
      document.getElementById("guessInput").value = "";
    } else if (guess > randomNumber) {
      alert("Tu numero es muy alto Javier, intenta uno mas bajo.");
    } else {
      alert("Tu numero es muy bajo Javier, intenta uno mas alto.");
    }
  };
});
