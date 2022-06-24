const btns = document.querySelectorAll(".number");
const img = document.querySelector(".center-img");

imgs = [
  "url(/static/odd.jpg)",
  "url(/static/even.jpg)",
  "url(/static/odd.jpg)",
  "url(/static/even.jpg)",
  "url(/static/odd.jpg)",
  "url(/static/even.jpg)",
  "url(/static/odd.jpg)",
  "url(/static/even.jpg)",
  "url(/static/odd.jpg)",
  "url(/static/even.jpg)",
];

const imgHandler = (index) => {
  const { style } = img;
  style.backgroundImage = imgs[index];
};

btns.forEach((btn, index) => {
  btn.addEventListener("mouseover", (e) => {
    imgHandler(index);
  });
});
