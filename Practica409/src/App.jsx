import { useState } from "react";
import './App.css';
import Contenedor from "./componentes/contenedores/Contenedor.jsx";
import Localizador from "./componentes/Ejercicio01/Localizador.jsx";
import Colorines from "./componentes/Ejercicio02/Colorines.jsx";
import Contador from "./componentes/Ejercicio03/Contador.jsx";
import Cronometro from "./componentes/Ejercicio04/Cronometro.jsx";

function App() {
  const vInicial = false;
  const [mostrarLocalizador, setMostrarLocalizador] = useState(vInicial);
  const [mostrarColorines, setMostrarColorines] = useState(vInicial);
  const [mostrarContador, setMostrarContador] = useState(vInicial);
  const [mostrarCronometro, setMostrarCronometro] = useState(vInicial);

  const desmontarLocalizador = () => {
    setMostrarLocalizador(!mostrarLocalizador);
  };

  const desmontarColorines = () => {
    setMostrarColorines(!mostrarColorines);
  };

  const desmontarContador = () => {
    setMostrarContador(!mostrarContador);
  };

  const desmontarCronometro = () => {
    setMostrarCronometro(!mostrarCronometro);
  };

  return (
    <>
      <Contenedor>
        <h1>Práctica 4.09</h1>
        <div className="contenedor-componentes">
          <button onClick={() => {
            desmontarLocalizador();
          }}>
            {mostrarLocalizador ? "Desmontar Localizador" : "Montar Localizador"}
          </button>
          {mostrarLocalizador && <Localizador/>}
        </div>
        <br/>
        <div className="contenedor-componentes">
          <button onClick={() => {
            desmontarColorines();
          }}>
            {mostrarColorines ? "Desmontar Colorines" : "Montar Colorines"}
          </button>
          {mostrarColorines && <Colorines/>}
        </div>
        <br/>
        <div className="contenedor-componentes">
          <button onClick={() => {
            desmontarContador();
          }}>
            {mostrarContador ? "Desmontar Contador" : "Montar Contador"}
          </button>
          {mostrarContador && <Contador/>}
        </div>
        <br/>
        <div className="contenedor-componentes">
          <button onClick={() => {
            desmontarCronometro();
          }}>
            {mostrarCronometro ? "Desmontar Cronómetro" : "Montar Cronómetro"}
          </button>
          {mostrarCronometro && <Cronometro/>}
        </div>
      </Contenedor>
    </>
  )
};

export default App;
