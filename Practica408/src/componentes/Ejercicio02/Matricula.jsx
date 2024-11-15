import { useState } from "react";
import Discentes from "./Discentes.jsx";
import listado from "../../objetos/matriculados.json";

const Matricula = () => {
    const inicio = listado.discentes;
    const [ discentes, setDiscentes] = useState();

    const filtrar2Daw = () => {
        const daw2 = discentes.filter(discente =>{
            return discente.curso === "2DAW";
        });

        setDiscentes();
    };

    return (
    <>
        <button onClick={() =>{
            filtrar2Daw();
        }}>Filtrar Discentes 2º DAW</button>
        <button>Filtrar Primer Curso</button>
        <button>Filtrar Ciclo DAW</button>
        <button>Filtrar Aficion Lectura</button>
        <button>Ordenar Apellidos</button>
        <button>Reiniciar</button>
        <div>
            <Discentes discentes={listado.discentes}/>
        </div>
    </>
  )
};

export default Matricula;