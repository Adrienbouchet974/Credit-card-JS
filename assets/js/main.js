//pour récupérer le formulaire
const input = document.querySelector("#form");

//pour récupérer les inputs
const input_number = document.querySelector("#number");
const input_last_name = document.querySelector("#Nom");
const input_first_name = document.querySelector("#Prenom");
const input_expiration = document.querySelector("#Expiration");
const input_crypto = document.querySelector("#crypto");

//pour récupérer le texte
const card_numero = document.querySelector("#Num_card");
const card_nom = document.querySelector("#card_nom");
const card_prenom = document.querySelector("#card_prenom");
const card_expiration = document.querySelector("#card_expiration");
const card_crypto = document.querySelector("#cryptogramme");

const value_card = input_number.value;
const value_last_name = input_last_name.value;
const value_first_name = input_first_name.value;
const value_expiration = input_expiration.value;
const value_crypto = input_crypto.value;

const credit_card = document.querySelector("#credit_card");
console.log(card_crypto.textContent = `${value_crypto}`)

function entire_flip(){
    credit_card.addEventListener("mouseover", () => {
        credit_card.classList.add("flip");
            card_numero.style.display = "none";
            card_nom.style.display = "none";
            card_prenom.style.display = "none";
            card_expiration.style.display = "none";
            card_crypto.style.display = "";
            credit_card.classList.add("flip_verso");
            credit_card.style.background = "url('../images/template_back.png') no-repeat";
    })
    credit_card.addEventListener("mouseout", () => {
        credit_card.classList.remove("flip");
        credit_card.classList.remove("flip_verso");
        credit_card.style.background = "";
        card_numero.style.display = "";
            card_nom.style.display = "";
            card_prenom.style.display = "";
            card_expiration.style.display = "";
            card_crypto.style.display = "none";
    })
}

input.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const value_card = input_number.value;
    const value_last_name = input_last_name.value;
    const value_first_name = input_first_name.value;
    const value_expiration = input_expiration.value;
    const value_crypto = input_crypto.value;

    const card_length = value_card.length;
    const expiration_length = value_expiration.length;

    if(card_length == 16 && value_card.match(/([0-9]{16})/)){

        card_numero.textContent = ` ${value_card}`;
        
    }else{
        alert("Votre numéro de carte bancaire doit posséder 16 chiffres");
    }

    if(value_last_name.match(/\w/)){

        card_nom.textContent = ` ${value_last_name}`;
        
    }else{
        alert("Votre nom ne doit pas comporter de nombres");
    }

    if(value_first_name.match(/\w/)){

        card_prenom.textContent = ` ${value_first_name}`;
        
    }else{
        alert("Votre prénom ne doit pas comporter de nombres");
    }

    if(expiration_length == 5 && value_expiration.match(/([0-9]{2})[/]([0-9]{2})/)){

        card_expiration.textContent = ` ${value_expiration}`;
        
    }else{
        alert("le format de la date est une série de 2 nombres séparée par un /. Exemple : 14/96");
    }
    if(value_crypto.match(/[0-9]{3}/)){

        card_crypto.textContent = ` ${value_crypto}`;
        card_crypto.style.display = "none";
        
    }else{
        alert("le cryptogramme ne doit comporter que 3 chiffres");
    }
    
    if(card_numero.textContent == ` ${value_card}` && card_nom.textContent == ` ${value_last_name}` && card_prenom.textContent == ` ${value_first_name}` && card_expiration.textContent == ` ${value_expiration}` && card_crypto.textContent == ` ${value_crypto}`){
        entire_flip()
    }else{
        return entire_flip();
    }

});


    
    
    