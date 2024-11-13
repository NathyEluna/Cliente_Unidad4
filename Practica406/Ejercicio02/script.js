"use strict";
import { crearParrafo } from "../bibliotecas/biblioteca.js";

window.onload = () => {
    //Añadir el evento al botón de crear párrafos.
    document.getElementById("crear-parrafo").addEventListener("click", () => {
        //Llamada a la función para crear el párrafo
        crearParrafo();
    }, false)
};//window onload