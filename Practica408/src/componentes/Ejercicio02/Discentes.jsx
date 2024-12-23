import { generarUuidAleatorio } from "../../bibliotecas/biblioteca.js";
import Discente from "./Discente.jsx";

const Discentes = (props) => {
    const {discentes, headshot} = props;
    
    return(
        <>
            <div>
                {discentes.map((discente) => {
                        return (
                            <Discente
                                key={generarUuidAleatorio()}
                                id={discente.id}
                                nombre={discente.nombre}
                                apellidos={discente.apellidos}
                                curso={discente.curso}
                                aficiones={discente.aficiones}
                                comida={discente.comida}
                                headshot={headshot}
                            />
                        );
                    })
                }
            </div>
        </>
    );
};

export default Discentes;