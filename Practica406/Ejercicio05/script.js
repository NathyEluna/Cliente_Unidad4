"use strict";
import { crearError, resetError} from "../bibliotecas/biblioteca.js";

window.onload = () => {
    document.getElementById("formulario").addEventListener("submit", (event) => {
        //Evitar que se recargue la página.
        event.preventDefault();

        //Variables para los campos.
        const nombre = document.getElementById("nombre");
        const grupo = document.getElementById("grupo");
        const anio = document.getElementById("anio");
        const tipo = document.getElementById("tipo");
        const localizacion = document.getElementById("localizacion");

        //Validación de los campos.
        let esValido = true;

        //Validar Nombre del Disco (mínimo 5 caracteres).
        if(nombre.value.length < 5){
            esValido = false;
            crearError(nombre, "El nombre del disco debe tener al menos 5 caracteres.");
        }else{
            resetError(nombre);
        };

        //Validar Grupo de Música (mínimo 5 caracteres).
        if(grupo.value.length < 5){
            esValido = false;
            crearError(grupo, "El grupo de música debe tener al menos 5 caracteres.");
        }else{
            resetError(grupo);
        };

        //Validar Año (4 caracteres numéricos).
        const anioRegex = /^\d{4}$/;
        if(!anioRegex.test(anio.value)){
            esValido = false;
            crearError(anio, "El año de publicación debe tener 4 caracteres numéricos.");
        }else{
            resetError(anio);
        };

        //Validar Tipo de Música (debe estar seleccionado).
        if(tipo.value === ""){
            esValido = false;
            crearError(tipo, "Debes seleccionar un tipo de música.");
        }else{
            resetError(tipo);
        };

        //Validar Localización (formato ES-001AA). De ChatGPT.
        const localizacionRegex = /^[A-Za-z]{2}-\d{3}[A-Za-z]{2}$/;
        if(!localizacionRegex.test(localizacion.value)){
            esValido = false;
            crearError(localizacion, "El formato de localización es incorrecto. Ejemplo: ES-001AA");
        }else{
            resetError(localizacion);
        };

        //Si todo es válido, mostramos un mensaje de éxito.
        if(esValido){
            document.getElementById("mensaje").textContent = "Disco guardado correctamente!";
            document.getElementById("mensaje").style.color = "green";
            document.getElementById("formulario").reset();
        }else{
            document.getElementById("mensaje").textContent = "Corrige los errores en el formulario.";
            document.getElementById("mensaje").style.color = "red";
        };
    });

    
};//window onload