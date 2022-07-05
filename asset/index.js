var result = document.querySelector(".result");
var btn = document.querySelector(".btn");

btn.addEventListener("click", () => {

    result.innerHTML = Math.random() * 100;
    result.innerHTML = Math.floor(result.innerHTML) + 1;

});