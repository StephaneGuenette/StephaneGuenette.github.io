const left = document.querySelector(".left");
const right = document.querySelector(".right");
const mainlogo = document.querySelector(".headlogo");
const back = document.querySelector(".btnBack");

//door events
left.addEventListener("click", openDoors);
right.addEventListener("click", openDoors);
back.addEventListener("click", closeDoors);
//mainlogo.addEventListener("click", closeDoors);

function closeDoors() {
  left.classList.remove("animleft");
  right.classList.remove("animright");
  mainlogo.classList.remove("logoapear");
}

function openDoors() {
  left.classList.add("animleft");
  right.classList.add("animright");
  mainlogo.classList.add("logoapear");
}
