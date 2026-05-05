import { useNavigate } from "react-router-dom";

function Inicio() {
    const navegar = useNavigate();

    return (
        <div>
            <button onClick={() => navegar("/Efecto")}>Ir a otra página</button>
            <br />
            <button onClick={() => navegar("/Ejercicio1")}>Ejercicio1</button>
            <br />
            <button onClick={() => navegar("/Formulario")}>Formulario</button>
        </div>
    );
}

export default Inicio;