let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

// Start Game
document.addEventListener("keypress", function () {
    if (started === false) {
        console.log("Game Started");
        started = true;
        setTimeout(levelUp, 500);
    }
});

// Button Flash (Game)
function buttonflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 400);
}

// Button Flash (User)
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 300);
}

// Level Up
function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `Level is ${level}`;

    let random = Math.floor(Math.random() * btns.length);
    let randomcolor = btns[random];

    let randombttns = document.getElementById(randomcolor);

    gameseq.push(randomcolor);
    console.log(gameseq);

    buttonflash(randombttns);
}

// Button Press
function btnpress() {
    let btn = this;
    userflash(btn);

    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    checkAns(userseq.length - 1);
}

// Check Answer
function checkAns(index) {
    if (userseq[index] === gameseq[index]) {
        if (userseq.length === gameseq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over!Your Score was <b>${level}</b> <br>Press any key to restart`;
        document.body.style.backgroundColor = "red";

        setTimeout(function () {
            document.body.style.backgroundColor = "white";
        }, 200);

        resetGame();
    }
}

// Reset Game
function resetGame() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}

// Button Event Listeners
let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnpress);
}
