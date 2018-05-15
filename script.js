const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");
const test = document.querySelectorAll(".test");
const logos = document.querySelectorAll(".logo");
const mainlogo = document.querySelector(".headlogo");

//open doors on click
left.addEventListener("click", openDoors);
right.addEventListener("click", openDoors);
//close doors on ESC keydown
// document.addEventListener("keydown", closeDoors);
mainlogo.addEventListener("click", close);
document.addEventListener("keydown", closeDoors);

function close() {
  left.classList.remove("animleft");
  right.classList.remove("animright");
  mainlogo.classList.remove("logoapear");
}

function openDoors() {
  left.classList.add("animleft");
  right.classList.add("animright");
  mainlogo.classList.add("logoapear");
}

function closeDoors(e) {
  if (e.keyCode === 27) {
    close();
  }
}

setTimeout(function() {
  openDoors();
}, 3000);
