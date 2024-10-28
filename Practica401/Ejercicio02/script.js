import {cambiarColorFondo} from "../bibliotecas/biblioteca.js";

window.onload = () => {
    const pantalla = document.body;

    pantalla.addEventListener("click", () =>{
        cambiarColorFondo();
    });
    console.log()
};