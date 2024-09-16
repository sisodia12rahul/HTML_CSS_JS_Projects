let gameSeq = [];
let userSeq = [];

const btns = ["red", "blue", "yellow", "purple"];

let started = false;
let level = 0;
let highScore = 0;

let h4 = document.querySelector("h4");
let body = document.querySelector("body");
let p = document.createElement("p");
let scoreContainer = document.querySelector(".highScore");
scoreContainer.appendChild(p);



document.addEventListener("keypress", () => {
    if (started === false) {
        started = true;
       console.log("Game is Started");

        nextSequence();
}});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 300);
}
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 300);
}

function nextSequence() {
    userSeq = [];
    level++;
    h4.innerText = `Level : ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor= btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);

    gameFlash(randBtn);
}

function checkAnswer(idx) {
  
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(nextSequence, 700);
        }
} else {
    h4.innerHTML = "Game Over! Your score was [ " + level + " ]. <br> <p>Press any key to restart</p>";
    body.classList.add("gameOver");
    setTimeout(() => {
        body.classList.remove("gameOver");
    }, 300);
    if(highScore < level) {
        highScore = level;
        p.innerText = `Highest Score is : ${highScore}`
    };
    reset();
 
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn)
 
   userColor = btn.getAttribute("id");
   userSeq.push(userColor);

   checkAnswer(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".box");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
    
    
}

function reset(){
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}

