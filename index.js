// 🔊 Preload all sounds
const sounds = {
  "1": new Audio("sounds/tom1.mp3"),
  "2": new Audio("sounds/tom2.mp3"),
  "3": new Audio("sounds/tom3.mp3"),
  "4": new Audio("sounds/hihat.mp3"),
  "5": new Audio("sounds/snare.mp3"),
  "6": new Audio("sounds/kick.mp3"),
  "7": new Audio("sounds/crash.mp3"),
  "8": new Audio("sounds/ride.mp3"),
  "9": new Audio("sounds/splash.mp3"),
  "z": new Audio("sounds/1.mp3"),
  "s": new Audio("sounds/2.mp3"),
  "x": new Audio("sounds/3.mp3"),
  "d": new Audio("sounds/4.mp3"),
  "c": new Audio("sounds/5.mp3"),
  "v": new Audio("sounds/6.mp3"),
  "g": new Audio("sounds/7.mp3"),
  "b": new Audio("sounds/8.mp3"),
  "h": new Audio("sounds/9.mp3"),
  "n": new Audio("sounds/10.mp3"),
  "j": new Audio("sounds/11.mp3"),
  "m": new Audio("sounds/12.mp3"),
  ",": new Audio("sounds/13.mp3"),
  "l": new Audio("sounds/14.mp3"),
  ".": new Audio("sounds/15.mp3"),
  ";": new Audio("sounds/16.mp3"),
  "/": new Audio("sounds/17.mp3")
};

// ⏩ Ensure all sounds are preloaded
for (let key in sounds) {
  sounds[key].preload = 'auto';
  sounds[key].load();
}

// 🥁 Reuse preloaded sounds
function makeSound(key) {
  if (sounds[key]) {
    // Create a clone to allow overlapping playback (if needed)
    const soundClone = sounds[key].cloneNode();
    soundClone.play();
  } else {
    console.log("No sound for key:", key);
  }
}

// DETECTING KEY PRESS:
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// KEY ANIMATION
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector('[id="' + currentKey + '"]');
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

// DETECTING BUTTON PRESS:
document.querySelectorAll(".button, .key, .blackkey").forEach(function(el) {
  el.addEventListener("click", function() {
    var buttonTextContent = this.textContent.trim().toLowerCase();
    makeSound(buttonTextContent);
    buttonAnimation(buttonTextContent);
  });
});
