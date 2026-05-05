//Importamos useState para poder cambiar el estado de los datos
import { useState } from "react";

function Ejercicio1() {
    //creo las variable nombre para guardar el dato y para setNombre para poder cambiar los datos de la variable nombre y useState con un valor inicial vacio
    const [nombre, setNombre] = useState("");
    //creo la const limpiar para despues resetear la informacion que se va a mostrar
    const limpiar=()=>{
            setNombre("");
        }
        //return para devolver valores ingresados
    return (
        <div>
        <input
            type="text"
            placeholder="Escribe tu nombre"
        //codigo para cambiar el dato inicial, por el dato ya ingresado por el usuario en el input
            onChange={(e) => setNombre(e.target.value)}
        />
        <br />
        {/*Boton para que cuando le unda click se borre lo que se muestra en pantalla */}
        <button onClick={limpiar}>Limpiar</button>
        {/*Uso el h2 para mostrar el dato ingresado por el usuario */}
        <h2>Hola: {nombre}</h2>
        </div>
    );
}

export default Ejercicio1;
