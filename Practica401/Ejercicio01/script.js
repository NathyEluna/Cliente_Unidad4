"use strict";

window.onload = () => {
    const comenzar = document.getElementById("comenzar");
    const detener = document.getElementById("detener");
    const saludos = document.getElementById("saludos");
    let id = null;

    comenzar.addEventListener("click", (event) =>{
        if(!id){
            id = setInterval(() => {
                saludos.innerHTML += `<h1>¡Hola Feo!</h1>`;
            }, 1000);
        }
    }, false);
    detener.addEventListener("click", (event) => {
        clearInterval(id);
        id = null;
    }, false);
};//window.onload