import { useState } from "react"
//creamos la funcion
function Nombre() {
    //creo la variable que se va a guardar la entrada y el metodo setNombre para mostrar el dato de entrada
    const [nombre, setNombre] = useState("");
    //creo una constante para limpiar el dato de entrada en el caso de que el nombre se escriba mal
    const limpiar = () => {
        setNombre(""); 
    };
    return (
        <div style={{ padding: "20px" }}>
            <label>Escribe tu nombre: </label>
            <input 
                type="text" 
                onChange={(e) => setNombre(e.target.value)} 
                minLength={1}
                maxLength={20}
            />
            <br />
            <button onClick={limpiar}>Borrar</button>
            <h2>Resultado: {nombre}</h2> 
        </div>
    );
}

export default Nombre;
