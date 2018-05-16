const left = document.querySelector(".left");
const right = document.querySelector(".right");
const mainlogo = document.querySelector(".headlogo");
const back = document.querySelector(".btnBack");
const h1 = document.querySelector("h1");
firstSpan = document.querySelector(".typed");

let typeRan = false;
//door events
left.addEventListener("click", openDoors);
right.addEventListener("click", openDoors);
back.addEventListener("click", closeDoors);
//mainlogo.addEventListener("click", closeDoors);
h1.addEventListener("click", function() {
  if (firstSpan.textContent === "AM") {
    var typed = new Typed(".typed", {
      strings: ["Surf", "Design", "Code", "Love", "AM"],
      typeSpeed: 100,
      loop: false,
      backSpeed: 50
    });
  }
});

function closeDoors() {
  left.classList.remove("animleft");
  right.classList.remove("animright");
  mainlogo.classList.remove("logoapear");
}

function openDoors() {
  left.classList.add("animleft");
  right.classList.add("animright");
  mainlogo.classList.add("logoapear");

  if (!typeRan) {
    setTimeout(() => {
      var typed = new Typed(".typed", {
        strings: ["Surf", "Design", "Code", "Love", "AM"],
        typeSpeed: 100,
        loop: false,
        backSpeed: 50
      });
      typeRan = true;
    }, 1000);
  }
}
