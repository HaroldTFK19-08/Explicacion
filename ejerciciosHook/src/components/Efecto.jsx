import { useEffect } from "react";

function Efecto() {

    useEffect(() => {
        console.log("El componente se cargó");

        setTimeout(() => {
        console.log("Datos cargados");
        }, 2000);
    }, []);

    return <h1>Componente listo</h1>;
}

export default Efecto;