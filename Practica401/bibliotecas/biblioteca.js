"use strict";

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    };

    return color;
};

export const cambiarColorFondo = () => {
  const pantalla = document.body;
  pantalla.style.backgroundColor = getRandomColor();
};