"use strict";
import { cargarPiezas, reiniciarJuego, comprobarSolucion } from "./bibliotecas/biblioteca.js";

window.onload = () => {
    //Llamada a la función de cargar las piezas en el elemento de piezas.
    cargarPiezas(document.getElementById("piezas"));

    //Evento dragstart para arrastrar las piezas.
    document.getElementById("zona-arrastrable").addEventListener("dragstart", (event) => {
        //Ya que clicamos en la imagen, tenemos que llamar a su padre para asegurarnos que contiene la clase "pieza".
        if (event.target.parentNode.classList.contains("pieza")){
            //Configurar dataTransfer con el id de la pieza.
            event.dataTransfer.setData("idPieza", event.target.parentNode.id);
        };
    });

    //Permitir arrastre sobre el contenedor del panel y el contenedor de piezas.
    document.getElementById("zona-arrastrable").addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    //Evento drop para soltar las piezas en zonas válidas.
    document.getElementById("zona-arrastrable").addEventListener("drop", (event) => {
        event.preventDefault();
        
        const idPieza = event.dataTransfer.getData("idPieza");
        const pieza = document.getElementById(idPieza);

        // Solo permitir el drop en elementos con la clase "soltable".
        if (event.target.classList.contains("soltable") && event.target.children.length === 0) {
            event.target.appendChild(pieza); //Mueve la pieza al área de drop válida.

        //Comprobar si el tablero está completo.
        const completo = Array.from(document.querySelectorAll("#panel .grilla"))
        .every((grilla) => grilla.children.length > 0);
    
        if (completo) {
            //Llamada a la función para comprobar si el rompecabezas fue completado correctamente.
            comprobarSolucion();
        };
        } else if (event.target.id === "piezas" && pieza) {
            document.getElementById("piezas").appendChild(pieza); //Devuelve la pieza al área original.
        };
    });

    //Añadir el evento para reiniciar el juego.
    document.getElementById("reset").addEventListener("click", () => {
        reiniciarJuego(
            document.getElementById("piezas"),
        document.getElementById("panel"));
    }, false);
};//window onload.