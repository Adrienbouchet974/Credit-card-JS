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


input.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const value_card = input_number.value;
    const value_last_name = input_last_name.value;
    const value_first_name = input_first_name.value;
    const value_expiration = input_expiration.value;
    const value_crypto = input_crypto.value;
    console.log(value_crypto);

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
    

});
















// const credit_card = document.querySelector("#credit_card");
// const info_0 = document.querySelector("#Num_card");
// const infos = document.querySelector(".info");
// // const info_1 = document.querySelector("#card_nom");
// // const info_2 = document.querySelector("#card_prenom");
// // const info_3 = document.querySelector("#card_expiration");
// const info_4 = document.querySelector("#cryptogramme");
// const h1 = credit_card.children[1];
// console.log(h1.textContent = "bonjour");



// console.log(credit_card);
// info_4.style.display = "none";
// console.log(info_4.style.display == "none");

// credit_card.addEventListener("click", function(){
//     if(info_4.style.display == "none"){
//         credit_card.classList.add("flip");
//     }
//     credit_card.addEventListener("transitionend", () => {
//         credit_card.classList.remove("flip");
//         info_0.style.display = "none";
//         infos.style.display = "none";
//         info_4.style.display = "";
//         credit_card.style.background = "url('../assets/images/template_back.png')"
//         credit_card.style.backgroundRepeat = "no-repeat";
//         credit_card.classList.add("flip_verso");
//         credit_card.children[1].textContent = `${value_crypto}`;
//     })
    
    
    
    
// })

// credit_card.addEventListener("click", function(){
    
    
    
//     if(info_4.style.display == ""){
//         credit_card.classList.remove("flip_verso");
//         credit_card.classList.add("flip");
//         credit_card.addEventListener("transitionend", () => {
//             info_0.style.display = "";
//             infos.style.display = "";
//             h1.textContent = `${value_crypto}`;
//             credit_card.classList.remove("flip_verso");
//             credit_card.classList.add("flip_verso");
//             credit_card.style.background = "url('../assets/images/template_credit_card.png')"
//             credit_card.style.backgroundRepeat = "no-repeat";
//         })
//     }
// })
// console.log(info_0.add);