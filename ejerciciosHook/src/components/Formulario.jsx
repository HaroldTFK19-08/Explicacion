import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Formulario() {

  // Hook para navegar entre páginas
    const navegar = useNavigate();

    // Hook para manejar el formulario
    const {
        register: registrar, // conecta los inputs
        handleSubmit: manejarEnvio, // controla el envío
        formState: { errors: errores }, // guarda errores
        reset: limpiarFormulario // limpia el formulario
    } = useForm();

    // Esta función se ejecuta cuando el formulario es válido
    const alEnviar = (datos) => {

    // Muestra los datos en consola
    console.log(datos);

    // Guarda los datos en el navegador
    localStorage.setItem("usuario", JSON.stringify(datos));

    // Limpia el formulario
    limpiarFormulario();

    // Redirige a otra página
    navegar("/");
    };

    return (
        <div>
        <h2>Registro</h2>

        {/* Formulario */}
        <form onSubmit={manejarEnvio(alEnviar)}>

            {/* INPUT NOMBRE */}
            <input
                type="text"
                placeholder="Nombre"
                {...registrar("nombre", { required: true })}
            />
            {/* Si hay error, muestra mensaje */}
            {errores.nombre && <p>El nombre es obligatorio</p>}

            {/* INPUT CORREO */}
            <input
            type="email"
            placeholder="Correo"
            {...registrar("correo", {
                required: true,
                pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
            })}
            />
            {errores.correo && <p>Correo inválido</p>}

            {/* INPUT CONTRASEÑA */}
            <input
            type="password"
            placeholder="Contraseña"
            {...registrar("password", {
                required: true,
                minLength: 6,
            })}
            />
            {errores.password && <p>Mínimo 6 caracteres</p>}

            {/* BOTÓN */}
            <button type="submit">Registrar</button>

        </form>
        </div>
    );
}

export default Formulario;