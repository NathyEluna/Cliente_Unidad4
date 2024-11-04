"use strict";

//Función para crear la tabla(lienzo).
export const crearTabla = (lienzo) => {
    //Antes había intentado crear la tabla directamente en lienzo con innerHTML pero solo <table></table> era creado.
    //Entonces yo tuve que crear esa variable para primero crear la tabla y entonces añadirla a el elemento DIV.
    let tabla = `<table id="lienzo-tabla">`;

    //He utilizado for para la creación de la tabla con 50 de ancho y 60 de largo.
    for (let i = 0; i < 50; i++) {
        tabla += `<tr>`;
        for (let j = 0; j < 60; j++) {
            tabla += `<td class="lienzo-celda"></td>`;
        };//for j.
        
        tabla += `</tr>`;
    };//for i.
    tabla += `</table>`;

    //Después añadimos la tabla directament al div.
    lienzo.innerHTML = tabla;
};

//Función para seleccionar los colores.
//Al final he intentado de diversas maneras, pero la única que ha funcionado ha sido utilziando el callback. Tuve que buscar para que servía el callback y como utilizarlo.
export const seleccionarColor = (callback) => {
    const colores = document.getElementById("pintura-tabla");
    

    colores.onclick = (event) => {
        const celda = event.target;

        if(celda.tagName === "TD"){
            //Removemos la clase "border" de las celdas que ya la tenga.
            const seleccionado = document.getElementsByClassName("border");
            Array.from(seleccionado).forEach((celda) => {
                celda.classList.remove("border");
            });

            //Actualizamos la clase del color y llamamos al callback.
            const nuevoColor = celda.className; //Cambiamos el color para el seleccionado.
            
            //Llamamos a la función de callback para actualizar el color.
            callback(nuevoColor);
            celda.classList.add("border");
        };
    };
};

//Función para borrar el lienzo.
export const borrarLienzo = () => {
    //Aquí buscamos por las celdas del lienzo y cambiamos el color de fondo para blanco.
    Array.from(document.getElementsByClassName("lienzo-celda")).forEach(celda => {
        celda.className = "lienzo-celda white";
    });
};