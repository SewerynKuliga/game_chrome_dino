var character = document.querySelector(".character");
var block = document.querySelector(".block");
let counter = 0;
function jump() {
    if (character.classList == "animate") { return }
    character.classList.add("animate");
    setTimeout(() => {
        character.classList.remove("animate")
    }, 300);
}

const checkDead = setInterval(() => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 32 && blockLeft > -20 && characterTop >= 220) {
        block.style.animation = "none";
        alert("Game Over. score: " + Math.floor(counter / 100));
        counter = 0;
        block.style.animation = "block 1s infinite linear";
    } else {
        counter++;
        document.querySelector(".scoreSpan").innerHTML = Math.floor(counter / 100);
    }
}, 10);