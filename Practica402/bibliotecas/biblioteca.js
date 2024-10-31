"use strict";
//Ejercicio 01.
//Función utilizada para hacer con que el contenido aparezca al haver click en los bloques "Elemento n".
export const magiaAparecer = () => {
    //Guardamos todos los elementos "h3" para añadir el evento a ellos.
    const titulos = document.getElementsByTagName("h3");

    for(let i = 0; i < titulos.length; i++){
        titulos[i].addEventListener("click", () =>{
            //Para todos los elementos "pares", tomamos su próximo hermano y lo guardamos.
            const parafo = titulos[i].nextElementSibling;
            
            //Añadimos la clase "magia" al elemento hermano para que aparezca en la página.
            parafo.classList.toggle("magia");
        }, false)
    };
};

//Ejercicio 02
export const name2 = () => {

};

export const name3 = () => {

};