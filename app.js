const charSprite = document.querySelector(".Character_spritesheet");
let lastDirection;

document.addEventListener("keypress", function (event) {
  lastDirection = event.key;
  if (event.key == "w") {
    charSprite.classList.remove("face-down");
    charSprite.classList.remove("face-left");
    charSprite.classList.remove("face-right");
    charSprite.classList.add("face-up");
  } else if (event.key == "s") {
    charSprite.classList.add("face-down");
    charSprite.classList.remove("face-left");
    charSprite.classList.remove("face-right");
    charSprite.classList.remove("face-up");
  } else if (event.key == "a") {
    charSprite.classList.remove("face-down");
    charSprite.classList.add("face-left");
    charSprite.classList.remove("face-right");
    charSprite.classList.remove("face-up");
  } else if (event.key == "d") {
    charSprite.classList.remove("face-down");
    charSprite.classList.remove("face-left");
    charSprite.classList.add("face-right");
    charSprite.classList.remove("face-up");
  }
  // event.key is a string representing which key has been pressed
});
