"use strict";

//Funciones relacionadas con las piezas del juego.
//Función para crear las piezas del juego dentro de un array de piezas.
export const crearPiezas = () =>{
    const piezas = [...Array(9).keys()].map(i => {
        const pieza = document.createElement("div");
        pieza.classList.add("pieza"); //Clase css de cada pieza.
        pieza.draggable = true; //Para que la pieza sea arrastable.
        pieza.id = `${i}`;
        pieza.dataset.id = i; //Asignar un identificador único a cada pieza.

        //Crear un elemento img.
        const img = document.createElement("img");
        img.src = `./assets/img/${i}.jpg`;
        img.classList.add("imagen");
        img.alt = `Pieza ${i}`;

        pieza.appendChild(img);
        return pieza;
    });

    return piezas;
};

//Función para poner las piezas en el contenedor de piezas.
export const cargarPiezas = (container) => {
    // Borra cualquier pieza anterior
    container.innerHTML = "";
    barajarArray(crearPiezas()).forEach(pieza =>container.appendChild(pieza));
};

//Función para barajar el array de piezas. Directamente de nuestro amigo ChatGPT.
export const barajarArray= (array) =>{
    return array.sort(() => Math.random() - 0.5);
};

//Funciones relacionadas con el panel del juego.
//Función para comprobar si las piezas están en la posición correcta con el data-position.
export const comprobarSolucion = () => {
    const grillas = Array.from(document.getElementsByClassName("grilla"));

    const completo = grillas.every(grilla => {
        const pieza = grilla.firstChild;
        return pieza && parseInt(pieza.dataset.id) === parseInt(grilla.dataset.position);
    });

    if(completo){
        if (!document.getElementById("mensaje")) {
            const mensaje = document.createElement("p");
            mensaje.id = "msj";
            mensaje.textContent = "¡Enhorabuena! Has resuelto el rompecabezas.";
            panel.appendChild(mensaje);
        };
    };
};

//Función para reiniciar el juego.
export const reiniciarJuego = (containerPiezas, panel) => {
    // Limpiar el contenedor de piezas y el panel
    containerPiezas.innerHTML = "";
    panel.querySelectorAll(".grilla").forEach(grilla => {
        grilla.innerHTML = ""
    });

    //Eliminar mensaje.
    const mensaje = document.getElementById("msj");
    if(mensaje){
        mensaje.remove();
    };

    // Cargar las piezas de nuevo en el contenedor
    cargarPiezas(containerPiezas);
};
