const d2 = document.querySelector(".d2");
const btn1 = document.querySelector(".btn1");
const div_hide = document.querySelector(".div_hide");
const boxx = document.querySelector(".boxx");
const x = document.querySelector(".fa-x");



d2.addEventListener("click", (e) => {
    div_hide.style.display = "block"
});
btn1.addEventListener("click", (e) => {
    div_hide.style.display = "block"
});
x.addEventListener("click", (e) => {
    div_hide.style.display = "none"
});
boxx.addEventListener("click", (e) => {
    div_hide.style.display = "none"

})