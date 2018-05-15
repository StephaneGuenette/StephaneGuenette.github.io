const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");
const test = document.querySelectorAll(".test");
const logos = document.querySelectorAll(".logo");
const mainlogo = document.querySelector(".headlogo");

//open doors on click
container.addEventListener("click", () => {
  left.classList.add("animleft");
  right.classList.add("animright");
  mainlogo.classList.add("logoapear");
});
//close doors on ESC keydown
document.addEventListener("keydown", e => {
  if (e.keyCode === 27) {
    left.classList.remove("animleft");
    right.classList.remove("animright");
    mainlogo.classList.remove("logoapear");
  }
});

//both logo sides (show hide the blured layer)
test.forEach(test => {
  test.addEventListener("mouseenter", () => {
    logos[1].style.opacity = "0";
    logos[3].style.opacity = "0";
  });
  test.addEventListener("mouseleave", () => {
    logos[1].style.opacity = "1";
    logos[3].style.opacity = "1";
  });
});
