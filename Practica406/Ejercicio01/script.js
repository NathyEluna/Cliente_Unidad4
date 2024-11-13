"use strict";
import { crearCheckboxes, marcarPares, desmarcarTodos } from "../bibliotecas/biblioteca.js";

window.onload = () => {
    //Llamada a la función para crear los checkboxes.
    crearCheckboxes();

    //Añadir los eventos a los botones.
    document.getElementById("marcar").addEventListener("click", () =>{
        marcarPares();
    }, false);

    document.getElementById("desmarcar").addEventListener("click", () =>{
        desmarcarTodos();
    }, false);
};//window onload.