import Aficiones from "./Aficiones.jsx";

const Discente = (props) => {
    const {id, nombre, apellidos, curso, aficiones, comida, headshot} = props;
    return(
        <>
            <br/><br/>
            <section className="discente-contenedor" onClick={() => {
                headshot(id);
            }}>
                <div className="discente-nombre">
                    <h2>Nombre del discente {id}:</h2>
                    <h3>{nombre} {apellidos}</h3>
                </div>
                <br/>
                <section className="discente-info">
                    <div className="discente-curso">
                        <h2>Curso:</h2>
                        <h3>{curso}</h3>
                    </div>
                    <br/>
                    <div className="discente-aficiones">
                        <h2>Aficiones:</h2>
                        <Aficiones aficiones={aficiones}/>
                    </div>
                    <br/>
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