let keys = document.querySelectorAll(".key");
window.addEventListener("keydown", playSound);
keys.forEach((key) => {
  key.addEventListener("TransitionEvent", removeTransition);
});

function playSound(event) {
  let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}
function removeTransition(event) {
  if (event.propertyName !== "transform") return;
  event.target.classList.remove("playing");
}
