import "../../css/aficiones.css";
import { generarUuidAleatorio } from "../../bibliotecas/biblioteca.js";

const Aficiones = (props) => {
    const {aficiones} = props;

    return(
        <>
            <div>
                <ul>
                    {aficiones.map((aficion) => {
                            return (
                                <li key={generarUuidAleatorio()} className="discentes-aficion">{aficion}</li>
                            );
                        })
                    }
                </ul>
            </div>
        </>
    );
};

export default Aficiones;