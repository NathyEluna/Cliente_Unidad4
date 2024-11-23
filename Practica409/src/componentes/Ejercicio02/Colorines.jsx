import { useEffect, useState } from "react";
import { getRandomColor } from "../../bibliotecas/biblioteca.js";
import "./colorines.css";

const Colorines = () => {
    const vInicial = "#FFFFFF";
    const [color, setColor] = useState(vInicial);

    //Generar el color con la función getRandomColor y actualizar en el estado con ese color.
    const colorines = () => {
        const nuevoColor = getRandomColor();
        setColor(nuevoColor);
    };

    useEffect(() => {
        //Cambiar el color de fondo al montar o cuando el color cambie.
        document.body.style.backgroundColor = color;

        //Añadir para al hacer doble clic cambiar el color.
        document.addEventListener("dblclick", colorines);

        //Limpiar el evento al desmontar el componente.
        return () => {
            document.removeEventListener("dblclick", colorines);
            document.body.style.backgroundColor = vInicial;
        }
    }, [color]);

    return (
        <>
            <div className="colorines">
                <h2>Colorines</h2>
                <p>Hace doble clic en cualquier parte del documento para cambiar el color de fondo.</p>
            </div>
        </>
    );
};

export default Colorines;