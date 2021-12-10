const charSprite = document.querySelector(".Character_spritesheet");
let lastDirection;

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  lastDirection = event.key;
  if (event.key == "w" || event.key == "ArrowUp") {
    charSprite.classList.remove("face-down");
    charSprite.classList.remove("face-left");
    charSprite.classList.remove("face-right");
    charSprite.classList.add("face-up");
  } else if (event.key == "s" || event.key == "ArrowDown") {
    charSprite.classList.add("face-down");
    charSprite.classList.remove("face-left");
    charSprite.classList.remove("face-right");
    charSprite.classList.remove("face-up");
  } else if (event.key == "a" || event.key == "ArrowLeft") {
    charSprite.classList.remove("face-down");
    charSprite.classList.add("face-left");
    charSprite.classList.remove("face-right");
    charSprite.classList.remove("face-up");
  } else if (event.key == "d" || event.key == "ArrowRight") {
    charSprite.classList.remove("face-down");
    charSprite.classList.remove("face-left");
    charSprite.classList.add("face-right");
    charSprite.classList.remove("face-up");
  }
  // event.key is a string representing which key has been pressed
});
