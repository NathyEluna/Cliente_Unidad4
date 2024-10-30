"use strict";
import { mostrarCoordenadas } from "../bibliotecas/biblioteca.js";

window.onload = () => {
    document.addEventListener("mousemove", (event) => {
        mostrarCoordenadas(event);
    });
};