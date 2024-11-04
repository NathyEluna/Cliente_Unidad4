"use strict";

export const crearTabla = () => {
    const lienzo = document.getElementById("lienzo");

    lienzo.innerHTML += `<table>`;

    for (let i = 0; i < 60; i++) {
        lienzo.innerHTML += `<tr>`;
        for (let j = 0; j < 50; j++) {
            lienzo.innerHTML += `<td></td>`;
        };//for j.
        
        lienzo.innerHTML += `</tr>`;
    };//for i.
    lienzo.innerHTML += `</table>`;
};

//lienzo.innerHTML += ``;

//columnas = 50 filas = 60