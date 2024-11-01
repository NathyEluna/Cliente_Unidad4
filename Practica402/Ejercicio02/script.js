"use strict";
import { activarPestana } from "../bibliotecas/biblioteca.js";

window.onload = () => {
    //Al final no he creado una función para añadir los eventos a las pestañas porque solo ocurre una vez, sin necesidad de una función.
    for (let i = 0; i < document.getElementsByClassName("tab").length; i++) {
        document.getElementsByClassName("tab")[i].addEventListener("click", () => {
            activarPestana(i);
        }, false);
    };

    //Al cargar la página ya tenemos una pestaña abierta.
    activarPestana(0);
};//window onload