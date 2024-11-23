import { useEffect, useState } from "react";
import "./localizador.css";

const Localizador = () => {
    const vInicial = {x: 0, y: 0};
    const [coordenadas, setCoordenadas] = useState(vInicial);

    //Manejar el evento de movimiento del ratón.
    const mostrarCoordenadas = (event) => {
        setCoordenadas({x: event.clientX, y: event.clientY});
    };

    useEffect(() => {
        //Añadir el evento al montar el componente.
        window.addEventListener("mousemove", mostrarCoordenadas);

        //Eliminar el evento al desmontar el componente.
        return () => {
            window.removeEventListener("mousemove", mostrarCoordenadas);
        };
    }, []);
    return (
        <>
            <div className="localizador">
                <h2>Localizador</h2>
                <p>Coordenadas del Ratón: X - {coordenadas.x} Y - {coordenadas.y}</p>
            </div>
        </>
    );
};

export default Localizador;