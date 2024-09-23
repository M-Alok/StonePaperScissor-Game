let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let userScoreText = document.querySelector("#your-score");
let compScoreText = document.querySelector("#comp-score");

choice.forEach((ele) => {
    ele.addEventListener("click", () => {
        let userChoice = ele.getAttribute("id");
        playGame(userChoice);
    });
});

const playGame = (userChoice) => {
    let compChoice = genCompChoice();
    if (compChoice === userChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "stone") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

const genCompChoice = () => {
    const options = ["stone", "paper", "scissor"];
    const ranChoice = Math.floor(Math.random() * 3);
    return options[ranChoice];
}

const drawGame = () => {
    msg.innerText = "Game Draw! Play Again";
    msg.style.background = "grey";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScoreText.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.background = "green";
    } else {
        compScore++;
        compScoreText.innerText = compScore;
        msg.innerText = `You Lost. ${compChoice} beats your ${userChoice}`;
        msg.style.background = "red";
    }
}