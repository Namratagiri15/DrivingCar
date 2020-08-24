const character = document.querySelector('#character');
const block = document.querySelector("#block");
const score = document.querySelector(".score");
let counter = 0;

function moveLeft() {
    left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if (left > 0 ) {
        left -= 100;
        character.style.left = left + "px";
    }
}

function moveRight() {
    left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if (left < 200 ) {
        left += 100;
        character.style.left = left + "px";
    }
}

document.addEventListener("keydown", (e)=> {
    if(e.key === "ArrowRight"){moveRight()}
    if(e.key === "ArrowLeft"){moveLeft()}
});

block.addEventListener("animationiteration",()=>{
    let random = Math.floor(Math.random()* 3);
    left = random * 100;
    block.style.left = left+ "px";
    counter++;
    score.innerHTML = "Your score is "+counter;
})

setInterval(()=>{
    let blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if (blockLeft == characterLeft && blockTop < 600 && blockTop> 400) {
        block.style.animation = "none";
        counter= 0;
        alert("You lost the game")
    }
},1);

function startGame() {
    counter= 0;
    window.location.reload();
}

document.getElementById("left").addEventListener("touchstart",moveLeft);
document.getElementById("right").addEventListener("touchstart",moveRight);


// Notes:
// The animationiteration event occurs when a CSS animation is repeated.
