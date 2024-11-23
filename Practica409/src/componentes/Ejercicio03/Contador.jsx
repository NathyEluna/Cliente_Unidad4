import { useEffect, useState } from "react";
import "./contador.css";

const Contador = () => {
    const [mensaje, setMensaje] = useState("Estimado usuario/a, has pulsado 0 veces el ratón.");
    const [clicks, setClicks] = useState(0);

    //Actualizar el mensaje a cada 5 clicks, comprobando si el numero de clicks es un múltiplo de 5.
    useEffect(() => {
        if(clicks % 5 === 0){
            setMensaje(`Estimado usuario/a, has pulsado ${clicks} veces el ratón.`)
        }
    }, [clicks]);

    //Función para contar los clicks.
    const contador = () => {
        setClicks((clk) => clk + 1);
    };

    useEffect (() => {
        //Añadir el evento de contar cada click al documento.
        document.addEventListener("click", contador);

        //Eliminar el evento de contar clicks del documento.
        return () => {
            document.removeEventListener("click", contador);
        };
    }, []);

    return (
        <>
            <div className="contador">
                <h3>Contador:</h3>
                <p>{mensaje}</p>
            </div>
        </>
    );
};

export default Contador;