"use strict";
import {} from "../bibliotecas/biblioteca.js";

window.onload = () => {
    //Elementos del formulario.
    const provinciaSelect = document.getElementById("provincia");
    const poblacionSelect = document.getElementById("poblacion");
    const formulario = document.getElementById("formulario");
    const mensaje = document.getElementById("mensaje");
 
    //Opciones de poblaciones por provincia.
    const poblaciones = {
         "Alicante": ["Alicante", "Elche", "Petrer"],
         "Castellón": ["Castellón", "Oropesa", "Vinaroz"],
         "Valencia": ["Valencia", "Xàtiva", "Torrent"]
    };
 
    //Evento de cambio en la provincia.
    provinciaSelect.addEventListener("change", () => {
        const provinciaSeleccionada = provinciaSelect.value;

        //Limpiar las opciones de poblacion y agregar la nueva lista.
        //Reset.
        poblacionSelect.innerHTML = '<option value="noSeleccionado">No seleccionado</option>';
        
        if(provinciaSeleccionada !== "noSeleccionado"){
            poblaciones[provinciaSeleccionada].forEach(poblacion => {
                const option = document.createElement("option");
                option.value = poblacion;
                option.textContent = poblacion;
                poblacionSelect.appendChild(option);
            });
        };
    });
 
     //Validación al enviar el formulario.
    formulario.addEventListener("submit", (event) => {
        //Evitar que se recargue la página.
        event.preventDefault();

        const provinciaSeleccionada = provinciaSelect.value;
        const poblacionSeleccionada = poblacionSelect.value;
 
         //Validar si ambos campos han sido seleccionados correctamente.
        if (provinciaSeleccionada === "noSeleccionado" || poblacionSeleccionada === "noSeleccionado") {
            mensaje.textContent = "Por favor, selecciona una provincia y una población válidas.";
        }else {
            mensaje.textContent = `Provincia: ${provinciaSeleccionada}, Población: ${poblacionSeleccionada}`;
        };
    });
};//window onload