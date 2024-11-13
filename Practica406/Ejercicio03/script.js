"use strict";
import { guardarDisco, mostrarDiscos } from "../bibliotecas/biblioteca.js";

window.onload = () => {
    //Array para guardar los discos y mostrarlos.
    let discos = [];
    
    //Añadir los eventos a los botones.
    document.getElementById("guardar").addEventListener("click", () => {
        discos = guardarDisco(discos);
    }, false)

    document.getElementById("mostrar").addEventListener("click", () => {
        mostrarDiscos(discos);
    }, false)

    //console.log(discos);
    
};//window onload
