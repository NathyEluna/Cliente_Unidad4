import Aficiones from "./Aficiones.jsx";

const Discente = (props) => {
    const {id, nombre, apellidos, curso, aficiones, comida} = props;
    return(
        <>
            <section className="discente-contenedor">
                <div className="discente-nombre">
                    <h2>Nombre del discente {id}:</h2>
                    <h3>{nombre} {apellidos}</h3>
                </div>

                <section className="discente-info">
                    <div className="discente-curso">
                        <h2>Curso:</h2>
                        <h3>{curso}</h3>
                    </div>

                    <div className="discente-aficiones">
                        <h2>Aficiones:</h2>
                        <Aficiones aficiones={aficiones}/>
                    </div>

                    <div className="discente-comida">
                        <h2>Comida:</h2>
                        <h3>{comida}</h3>
                    </div>
                    </section>
                </section>
        </>
    );
};

export default Discente;