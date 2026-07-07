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