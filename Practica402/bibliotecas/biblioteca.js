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
//Función para abrir la pestaña correspondiente o cerrarla si ya está abierta.
export const activarPestana = (pestana) => {
    //Verifica si la pestaña ya tiene la clase "activa" para permitir cerrar la pestaña al hacer clic nuevamente sobre ella.
    if(document.getElementsByClassName("tab")[pestana].classList.contains("activa")){
        document.getElementsByClassName("tab")[pestana].classList.remove("activa");
        document.getElementsByClassName("info")[pestana].classList.remove("activa");
    }else{
        //Si no tiene la clase "activa", significa que no hay pestañas abiertas o que la pestaña que queremos abrir está cerrada.
        for (let i = 0; i < document.getElementsByClassName("tab").length; i++) {
            document.getElementsByClassName("tab")[i].classList.toggle("activa", i === pestana);
            document.getElementsByClassName("info")[i].classList.toggle("activa", i === pestana);
        };
    };
};