let bill_input = document.querySelector(".bill");
let per_input = document.querySelector(".tip");
let btn = document.querySelector(".btn");
let total_txt = document.querySelector(".total");

btn.addEventListener("click", () => {
    let bill = bill_input.value;
    let perc = per_input.value;

    let total = bill * (1 + perc / 100);
    total_txt.innerText = "$" + total.toFixed(2);
})