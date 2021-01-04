const btns = document.querySelectorAll(".number");
const img = document.querySelector(".center-img");

imgs = [
    "url(src/img/odd.jpg)",
    "url(src/img/even.jpg)",
    "url(src/img/odd.jpg)",
    "url(src/img/even.jpg)",
    "url(src/img/odd.jpg)",
    "url(src/img/even.jpg)",
    "url(src/img/odd.jpg)",
    "url(src/img/even.jpg)",
    "url(src/img/odd.jpg)",
    "url(src/img/even.jpg)",
];

const imgHandler = index => {
    const { style } = img;
    style.backgroundImage = imgs[index];
};

btns.forEach((btn, index) => {
    btn.addEventListener("mouseover", e => { imgHandler(index) });
});