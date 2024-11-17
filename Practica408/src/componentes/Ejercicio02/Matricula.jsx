import { useState } from "react";
import Discentes from "./Discentes.jsx";
import listado from "../../objetos/matriculados.json";

const Matricula = () => {
    const inicio = listado.discentes;
    const [ discentes, setDiscentes] = useState(inicio);
    const [ order, setOrder] = useState("asc");

    //Filtrar alumnos de 2 DAW.
    const filtrar2Daw = () => {
        const daw2 = discentes.filter(discente =>{
            return discente.curso === "2DAW";
        });

        setDiscentes(daw2);
    };

    //Filtrar alumnos por primer curso.
    const filtrar1Curso = () => {
        const curso1 = discentes.filter((discente) => {
            return discente.curso.startsWith("1");
        });
        setDiscentes(curso1);
    };

    //Filtrar alumnos de DAW.
    const filtrarDaw = () => {
        const daw = discentes.filter((discente) => {
            return discente.curso.includes("DAW");
        });
        setDiscentes(daw);
    };

    //Filtrar alumnos que tienen afición por lectura.
    const filtrarAficion = (hobby) => {
        const aficion = discentes.filter((discente) => {
            return discente.aficiones.includes(hobby);
        });
        setDiscentes(aficion);
    };

    //Ordenar alumnos por apellido.
    const ordernarApellido = () => {
        const ordenNuevo = order === "asc" ? "des" : "asc";
        const ordenado = [...discentes].sort((x, y) => {
            return ordenNuevo === "asc" 
                //Ascendente  
                ? x.apellidos.localeCompare(y.apellidos)
                //Descendente
                : y.apellidos.localeCompare(x.apellidos);
        });
        setOrder(ordenNuevo);
        setDiscentes(ordenado);
    };

    //Reiniciar el listado, sin ningún filtro.
    const reiniciar = () => {
        setDiscentes(inicio);
    };

    //Eliminar el alumno al clicar en el en la lista.
    const eliminarClicando = (id) => {
        const idAlumno = discentes.filter((discente) => {
            return discente.id !== id;
        });
        setDiscentes(idAlumno);
    };

    return (
    <>
        
        <h3>Selección de filtros para los discentes:</h3>
        <br/>
        <button onClick={() =>{
            filtrar2Daw();
        }}>Discentes 2º DAW</button>

        <button onClick={() => {
            filtrar1Curso();
        }}>Primer Curso</button>

        <button onClick={() => {
            filtrarDaw();
        }}>Ciclo DAW</button>
        
        <button onClick={() => {
            filtrarAficion("lectura");
        }}>Aficion Lectura</button>
        
        <button onClick={() => {
            ordernarApellido();
        }}>Ordenar</button>
        
        <button onClick={() => {
            reiniciar();
        }}>Reiniciar</button>
        
        <div>
            {/*Pasamos la función de eliminar un alumno al clicar.*/}
            <Discentes 
                discentes={discentes}
                headshot={eliminarClicando}
            />
        </div>
    </>
  )
};

export default Matricula;