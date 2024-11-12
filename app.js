let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "green", "blue"]

let started = false;
let level = 0;
let span = document.querySelector('span')
let h3 = document.querySelector('h3')

// Event listener for starting game
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game is started");
        started = true;
    }
    span.innerText = ""
    this.body.style.backgroundColor = "slategray"
    levelup();

})

// Code for button flash action
function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250)
}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 500)
}


// logic for level up of game according to right answers
function levelup() {
    userseq = [];
    level++;;

    h3.innerText = `Level ${level}`;


    let randomidx = Math.floor(Math.random() * 4);
    let randomcolor = btns[randomidx];
    let randombtn = document.querySelector(`.${randomcolor}`)
    gameseq.push(randomcolor);
    console.log(gameseq);



    btnflash(randombtn);
}


// Logic for checking appropriate procedure
function checkans(useidx) {
    if (gameseq[useidx] == userseq[useidx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 1000);
        }

    }
    else {
        h3.innerHTML = `Game Over!  Your Score was  <span style="Font-weight:bold">${level}</span> <br> Press Any Key to Start`
        document.querySelector('body').style.backgroundColor = "red"
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = "white"
        }, 200);


        reset();

    }
}
function btnpressed() {
    let btn = this;
    userflash(btn)
    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor)
    console.log(userseq);

    checkans(userseq.length - 1);

}

let allbtns = document.querySelectorAll(".box")
for (btn of allbtns) {
    btn.addEventListener("click", btnpressed);
}

// Logic for resetting the game after game over
function reset() {
    started = false;
    userseq = []
    gameseq = [];
    started = false;
    level = 0;

}