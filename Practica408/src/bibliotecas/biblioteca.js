//Devuelve un UUID aleatorio para identificar elementos.
export const generarUuidAleatorio = () => {
    return crypto.randomUUID();
};

//Funciones del ejercicio 1.
//Función para generar un número aleatorio entre 1 y 100.
export const generarNumeroAleatorio = (estado, setEstado) => {
    let num;

    //Utilizamos el do-while para que los números no se repitán.
    do{
        num = Math.floor(Math.random() * 100) + 1;
    }
    while(estado.includes(num));

    //Actualizar el estado con el número nuevo.
    setEstado([...estado, num]);
};