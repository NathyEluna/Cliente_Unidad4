"use strict";
//Función generada por ChatGPT para generar colores aleatorios. 
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    };

    return color;
};

//Ejercicio 02.
export const cambiarColorFondo = () => {
  const pantalla = document.getElementById("contenido");
  //Generar colores con la función anterior
  const color = getRandomColor();

  //Cambiar el color de fondo directamente con estilo en línea.
  pantalla.style.backgroundColor = color;
};

//Ejercicio 03
export const mostrarCoordenadas = (event) => {
  const coordernadasRaton = document.getElementById("coordenadas");

  const x = event.clientX;//Guardar la posición x.
  const y = event.clientY;//Guardar la posición y.

  coordernadasRaton.textContent = `Coordenadas del Ratón - X:${x} Y:${y}`;
};