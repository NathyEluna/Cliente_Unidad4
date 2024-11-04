"use strict";
import { crearTabla, seleccionarColor, borrarLienzo } from "./bibliotecas/biblioteca.js";
//Al final he conseguido que pinte al mantener presionado el ratón y no clicando para empezar a pintar y parar.

window.onload = () => {
    //Guardamos la referencia del elemento donde se creará la tabla.
    const lienzo = document.getElementById("lienzo");
    //Variable para verificar si estamos pintando o no.
    let pintando = false;
    //Color inicial.
    let colorSeleccionado = "white";

    //Llamada a la función para inicializar el selector de colores.
    seleccionarColor((nuevoColor) =>{
        //Actualizamos el color seleccionado.
        colorSeleccionado = nuevoColor;
    });
    //Llamada a la función para crear la tabla.
    crearTabla(lienzo);

    //Empezar a pintar.
    lienzo.addEventListener("mousedown", () => {
        pintando = true;
    }, false);
    //Parar de pintar.
    lienzo.addEventListener("mouseup", () => {
        pintando = false;
    }, false);
    //Pintar al mover el ratón.
    lienzo.addEventListener("mouseover", (event) => {
        if(pintando && event.target.tagName === "TD"){
            //Aplica el color seleccionado.
            event.target.className = `lienzo-celda ${colorSeleccionado}`;
        };
    }, false);

    //Evento del botón de borrar el lienzo.
    document.getElementById("borrar").addEventListener("click", () =>{
        borrarLienzo();
    }, false);
};//window onload.