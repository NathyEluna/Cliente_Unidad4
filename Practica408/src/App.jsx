import "./App.css";
import Contenedor from "./componentes/contenedores/Contenedor.jsx";
import Listado from "./componentes/Ejercicio01/Listado.jsx";
import Matricula from "./componentes/Ejercicio02/Matricula.jsx";

function App(){
  return (
    <>
      <Contenedor>
        <Contenedor>
          <h1>Ejercicio 01</h1>
          <Listado/>
        </Contenedor>
        <br/>
        <Contenedor>
          <h1>Ejercicio 02</h1>
          <br/>
          <Matricula/>
        </Contenedor>
      </Contenedor>
    </>
  )
};

export default App;
