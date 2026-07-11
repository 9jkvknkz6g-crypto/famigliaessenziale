window.addEventListener("load",()=>{

console.log("Essenziale è online 🌿");

});
let lastScroll = 0;

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    if(currentScroll > lastScroll && currentScroll > 80){

        header.classList.add("hide");

    }else{

        header.classList.remove("hide");

    }

    lastScroll = currentScroll;

});

document.getElementById("newsletter-form").addEventListener("submit", async function(e) {

    e.preventDefault();

    const email = document.getElementById("newsletter-email").value;

    const response = await fetch("https://app.kit.com/forms/9673113/subscriptions", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            email_address: email
        })
    });

    const message = document.getElementById("newsletter-message");

    if(response.ok){

        message.innerHTML = "🤍 Grazie! Controlla la tua email per confermare l'iscrizione.";

        document.getElementById("newsletter-form").reset();

    } else {

        message.innerHTML = "Qualcosa è andato storto. Riprova.";

    }

});