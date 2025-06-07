let playGame = confirm("Shall we play rock, paper or scissors? ");
if (playGame) {
  //play
  while (playGame) {
    const playerchoice = prompt("Please Enter rock , paper or scissors.");
    if (playerchoice || playerchoice === "") {
      const playerOne = playerchoice.trim().toLowerCase();
      if (
        playerOne === "rock" ||
        playerOne === "paper" ||
        playerOne === "scissors"
      ) {
        const computerChoice = Math.floor(Math.random() * 3);
        const rpsArray = ["rock", "paper", "scissors"];
        const computer = rpsArray[computerChoice];

        const result =
          playerOne === computer
            ? "Tie game!"
            : playerOne === "rock" && computer === "paper"
            ? `playerOne: ${playerOne}\ncomputer:${computer}\ncomputer wins!`
            : playerOne === "paper" && computer === "scissors"
            ? `playerOne: ${playerOne}\ncomputer:${computer}\ncomputer wins!`
            : playerOne === "scissors" && computer === "rock"
            ? `playerOne: ${playerOne}\ncomputer:${computer}\ncomputer wins!`
            : `playerOne: ${playerOne}\ncomputer:${computer}\nplayerOne wins!`;
        alert(result);
        playGame = confirm("Play again?");
        if (!playGame) alert("ok, Thank you for playing");
        continue;
      } else {
        alert("you didn't want to play rock,paper or scissors.");
        continue;
      }
    } else {
      alert("I guess you changed your mind , May next time .");
      break;
    }
  }
} else {
  alert("ok beye");
}
