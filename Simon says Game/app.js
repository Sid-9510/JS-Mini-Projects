let gameSeq = [];
let usrSeq = [];

let btns = ["red", "yellow", "green", "purple"]; // Step 2

// Step 1 - Start the game by pressing any key.

let started = false;
let level = 0;

let h2 = document.querySelector("h2"); // Step 2

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game started");
    started = true;

    levelUp();
  }
});

// Step 2 - Flash button and LevelUp

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function usrFlash(btn) {
  // Step 3
  btn.classList.add("usrFlash");
  setTimeout(function () {
    btn.classList.remove("usrFlash");
  }, 250);
}

function levelUp() {
  usrSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  // Random btn Choose
  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);

  //   console.log(randIdx);
  //   console.log(randColor);
  //   console.log(randBtn);
  gameSeq.push(randColor);
  console.log(gameSeq);

  gameFlash(randBtn);
}
function checkAns(idx) {
  if (usrSeq[idx] === gameSeq[idx]) {
    if(usrSeq.length == gameSeq.length){
      setTimeout("levelUp()", 1000);
    }
    
  }else{
    h2.innerHTML = `Game over! Your scor is <b>${level}</b> <br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
         document.querySelector("body").style.backgroundColor = "beige"; 
    }, 200);
    reset();
  }
}
// Step 3 - Button Event listeners
function btnPress() {
  let btn = this;
  // console.log(btn);
  usrFlash(btn);

  usrColor = btn.getAttribute("id");
  // console.log(usrColor);
  usrSeq.push(usrColor);
  //   console.log(usrSeq);
  checkAns(usrSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset(){
  started = 0;
  gameSeq = [];
  usrSeq = [];
  level = 0;
}
