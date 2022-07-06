var result = document.querySelector(".result");
var btn = document.querySelector(".btn");

btn.addEventListener("click", handler);

function handler() {
    result.innerHTML = Math.random() * 100;
    result.innerHTML = Math.floor(result.innerHTML) + 1;
}