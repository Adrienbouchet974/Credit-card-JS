const input = document.querySelector("#form");
console.log(input);

const input_number = document.querySelector("#number");
const input_last_name = document.querySelector("#Nom");
const input_first_name = document.querySelector("#Prénom");


input.addEventListener("submit", function(event) {
    event.preventDefault();
    const value_card = input_number.value;
    const value_last_name = input_last_name.value;
    const value_first_name = input_first_name.value;

    console.log(value_card);
    console.log(value_last_name);
    console.log(value_first_name);
})
