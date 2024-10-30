import {cambiarColorFondo} from "../bibliotecas/biblioteca.js";

window.onload = () => {
    //En lugar de "click", ponemos "dlbclick" para que el color de fondo cambie al dar dos clicks en la página.
    document.addEventListener("dblclick", () =>{
        cambiarColorFondo();
    });
};