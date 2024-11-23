import { useEffect, useState } from "react";
import "./cronometro.css";

const Cronometro = () => {
    let intervalo;
    const vInicial = 0;
    const [mensaje, setMensaje] = useState("Cronómetro en marcha...");
    const [segundos, setSegundos] = useState(vInicial);
    const [centesimas, setCentesimas] = useState(vInicial);
    //Estado para controlar si el cronómetro está activo o no.
    const [activo, setActivo] = useState(true);

    //Empezar el cronómetro al montar el componente.
    useEffect(() => {
        if(activo){
            intervalo = setInterval(() => {
                setCentesimas((num) => {
                    //Si el valor de las centésimas es menor que 99 cambiamos el estado de las centésimas.
                    if(num < 99){
                        return num + 1;
                    }else{
                        //Si el valor de las centésimas es igual a 100(1 segundo) actualizamos el estado de segundos.
                        setSegundos((num) => num + 1);
                        //Reiniciamos las centésimas a 0.
                        return 0;
                    };
                });
            }, 10);//A cada 10ms incrementamos centésimas.
        };//if.

        //Limpiar el intervalo al desmontar el componente.
        return () => {
            if(intervalo){
                clearInterval(intervalo);
            };//if.
        };//return.
    }, [activo]);//empezar.

    //Parar el cronómetro.
    const parar = () => {
        setActivo(false);
        setMensaje("Cronómetro detenido.");    
        if(intervalo){
            clearInterval(intervalo);
        };//if.
    };//parar.

    //Reiniciar el cronómetro.
    const reiniciar = () => {
        setActivo(true);
        setSegundos(vInicial);
        setCentesimas(vInicial);
        setMensaje("Cronómetro reiniciado.");
    };//reiniciar.

    return (
        <>
            <div className="cronometro">
                <h3>Cronómetro:</h3>
                <p>
                    {/*padstart sirve para rellenar el início de la string con 0 si no tiene 2 dígitos.*/}
                    {String(segundos).padStart(2, "0")}:
                    {String(centesimas).padStart(2, "0")}
                 </p>
                <button onClick={parar}>Parar</button>
                <button onClick={reiniciar}>Reiniciar</button>
                <p>{mensaje}</p>
            </div>
        </>
    );
};

export default Cronometro;