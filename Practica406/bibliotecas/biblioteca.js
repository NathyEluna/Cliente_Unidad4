"use strict";

//Funciones del ejercicio 01.
//Función para crear los checkboxes.
export const crearCheckboxes = () => {
    for(let i = 0; i < 100; i++){
        //Math.floor para redondear y math.random para generar los números.
        const random = Math.floor(Math.random() * 901) + 100;
        
        //Crear un input y añadir los atributos para que sea un checkbox.
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `check-${i + 1}`;
        checkbox.value = random;

        //Crear el label del input type checkbox.
        const label = document.createElement("label");
        label.for = `check-${i + 1}`;
        label.textContent = random;

        document.getElementById("container-boxes").appendChild(checkbox);
        document.getElementById("container-boxes").appendChild(label);
    };//for.
};//crear checkboxes.

export const marcarPares = () => {
    //Después de buscar por todos los input con atributo type="checkbox", dividimos su número por módulo 2 para obtener si es par o no.
    //Si es par ponemos el valor de checked a true.
    document.querySelectorAll("#container-boxes input[type='checkbox']").forEach(checkbox => {
        if(parseInt(checkbox.value) % 2 === 0){
            checkbox.checked = true;
        };//if.
    });//for each.
};//marcar pares.

//Función para desmarcar todos.
export const desmarcarTodos = () => {
    //Después de buscar por todos los input con atributo type="checkbox", ponemos el valor de checked a falso.
    document.querySelectorAll("#container-boxes input[type='checkbox']").forEach(checkbox =>{
        checkbox.checked = false;
    });
};//desmarcar todos.

//Funciones del ejercicio 02.
//Función para crear un párrafo.
export const crearParrafo = () => {
    //Verificar que ambos campos estén llenos.
    if(!document.getElementById("text").value || !document.getElementById("estilo").value){
        insultarUsuario("Por favor, deja de ser imbécil y rellena todos los campos antes de intentar crear un párrafo.", "resultado");
        return;
    };

    //Limpiar el mensaje de error.
    limpiarError();

    //Crear un nuevo párrafo con el texto y el estilo seleccionados.
    const parrafo = document.createElement("p");

    //Guardar el contenido del textarea como contenido del párrafo.
    parrafo.textContent = document.getElementById("text").value;

    //Guardar el valor del selector para poner el estilo seleccionado. 
    //Los valores son los nombres de las clases con el estilo seleccionado.
    parrafo.className = document.getElementById("estilo").value;

    //Agregar el párrafo al div resultado.
    document.getElementById("resultado").appendChild(parrafo);
};//crear parrafo.

//Función para insultar el usuário.
const insultarUsuario = (mensaje, container) => {
    //Eliminar el mensaje de error para que no se repitan.
    limpiarError();

    //Crear el mensaje de error dentro de la div resultado.
    const error = document.createElement("p");
    error.id = "error";
    error.textContent = mensaje;

    document.getElementById(`${container}`).appendChild(error);
};//insultar usuario.

//Eliminar el mensaje de error si ya existe un mensaje.
const limpiarError = () => {
    if(document.getElementById("error")){
        document.getElementById("error").remove();
    };
};//limpiar error.

//Funciones del ejercicio 03.
export const guardarDisco = (discos) => {
    const nombre = document.getElementById("nombre").value;
    const grupo = document.getElementById("grupo").value;
    const anio = document.getElementById("anio").value;
    const tipo = document.getElementById("tipo").value;
    const localizacion = document.getElementById("localizacion").value;
    const prestado = document.getElementById("prestado").checked;

    //Verificar si algún campo está vacío y muestra un mensaje de error.
    if(!nombre || !grupo || !anio || !tipo || !localizacion){
        insultarUsuario(" Completa todos los campos de una vez, ¿o necesitas ayuda extra?", "listado");
        return discos;
    };

    //Limpiar el mensaje de error.
    limpiarError();

    //Crear el objeto disco.
    const disco = {
        "nombre" : nombre,
        "grupo" : grupo,
        "anio" : parseInt(anio),
        "tipo" : tipo,
        "localizacion" : localizacion,
        "prestado" : prestado || false,
    };

    const discosActualizados = [...discos, disco];

    //Limpiar el formulario.
    limpiarFormulario();

    //Añadir el disco al array de discos.
    return discosActualizados;
};//guardar disco.

export const mostrarDiscos = (discos) => {
    //Limpiar listado anterior.
    document.getElementById("listado").innerHTML = "";

    discos.forEach(disco => {
        const divDisco = document.createElement("div");
        
        divDisco.className = "disco-item";
        divDisco.innerHTML = `
            <p><strong>Nombre del Disco:</strong> ${disco.nombre}</p>
            <p><strong>Grupo:</strong> ${disco.grupo}</p>
            <p><strong>Año:</strong> ${disco.anio}</p>
            <p><strong>Tipo:</strong> ${disco.tipo}</p>
            <p><strong>Localización:</strong> ${disco.localizacion}</p>
            <p><strong>Prestado:</strong> ${disco.prestado ? "Sí" : "No"}</p>`;
        document.getElementById("listado").appendChild(divDisco);
    });
};//mostrar discos.

//Limpia los campos del formulario después de guardar un disco.
export const limpiarFormulario = () => {
    document.getElementById("form").reset();
};

//Funciones del ejercicio 05.
//Función para agregar el estilo de error.
export const crearError = (input, mensaje) => {
    input.classList.add("error");
    const label = document.querySelector(`label[for='${input.id}']`);
    if (label) {
        label.classList.add("error-tag");
    };
    document.getElementById("mensaje").textContent = mensaje;
};

//Función para restablecer el estilo de error.
export const resetError = (input) => {
    input.classList.remove("error");
    const label = document.querySelector(`label[for='${input.id}']`);
    if(label){
        label.classList.remove("error-tag");
    };
};
