//pour récupérer le formulaire
const input = document.querySelector("#form");
console.log(input);

//pour récupérer les inputs
const input_number = document.querySelector("#number");
const input_last_name = document.querySelector("#Nom");
const input_first_name = document.querySelector("#Prenom");
const input_expiration = document.querySelector("#Expiration");

//pour récupérer le texte
const card_numero = document.querySelector("#Num_card");
const card_nom = document.querySelector("#card_nom");
const card_prenom = document.querySelector("#card_prenom");
const card_expiration = document.querySelector("#card_expiration");


input.addEventListener("submit", function(event) {
    event.preventDefault();

    const value_card = input_number.value;
    const value_last_name = input_last_name.value;
    const value_first_name = input_first_name.value;
    const value_expiration = input_expiration.value;
    
    console.log(value_card);
    console.log(value_last_name);
    console.log(value_first_name);
    console.log(value_expiration);
    
    card_numero.textContent += ` ${value_card}`;
    card_nom.textContent += ` ${value_last_name}`;
    card_prenom.textContent += ` ${value_first_name}`;
    card_expiration.textContent += ` ${value_expiration}`;

    })