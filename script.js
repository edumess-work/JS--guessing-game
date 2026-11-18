const secretNumber = Math.floor(Math.random() * 50) + 1;
let attempts = 0;


function startGame () {

    while (true) { let guess = prompt("Enter a number:"); 


        if (guess === null || guess === "") {
            alert("Game cancelled.");
            break;

        }
    guess = Number(guess) ;
    if (Number.isNaN(guess)) {
    alert("Please enter a valid number.");
    continue;
}
    attempts++;

    if (guess > secretNumber) {
        alert("Too high! Try again.");
          }

        else if (guess < secretNumber) {
        alert ("Too low! Try again.");
        }

        else { alert("Congratulations! You got it in " + attempts + " attempts.");
         break;
        }
       
       }
    
}

startGame();