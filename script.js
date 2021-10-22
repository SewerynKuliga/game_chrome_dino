const character = document.querySelector(".character");
const block = document.querySelector(".block");
const result = document.querySelector(".result")
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
        result.style.display = "block";
        document.querySelector(".result").innerHTML = "Game Over. Score: " + Math.floor(counter / 100);
        block.style.animation = "none";
        counter = NaN;

    } else {
        counter++;
        document.querySelector(".scoreSpan").innerHTML = Math.floor(counter / 100);
    }
}, 10);