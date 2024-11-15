import { useState } from "react";
import { generarUuidAleatorio, generarNumeroAleatorio} from "../../bibliotecas/biblioteca.js";
import "../../css/listado.css"; 

const Listado = () => {
  let estadoInicial = [];

  let [listado, setListado] = useState(estadoInicial);

  //Función para borrar el listado.
  const borrarListado = () => {
    setListado([]);
  }

  return (
    <>
      <div>
        <button onClick={generarNumeroAleatorio(listado, setListado)}>Generar</button>
        <button onClick={borrarListado()}>Eliminar</button>
        <ul>
          {listado.map((num) => {
            return (
              <li key={generarUuidAleatorio()}>{num}</li>
            );
          })
          }
        </ul>
      </div>
    </>
  );
};

export default Listado;