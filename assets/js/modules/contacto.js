export function initContacto() {
    console.log("Inicializando Contacto");


////////////////////////////////////////////////////////////////////////
// --- Punto 2 del Laboratorio 2 --- Programación Orientada a Eventos y Programación Asíncrona
//
console.log("///////Punto 2 del Laboratorio 2///////////");
// --- Capturar el envío del formulario ---
const formulario = document.querySelector("form");                              // Selecciona el formulario en la página.
formulario.addEventListener("submit", (event) => {
    event.preventDefault();                                                     // Evita que la página se recargue al enviar el formulario.
    const nombre = document.getElementById("nombre").value;                     // Obtiene el valor del campo "nombre".
    const mensaje = document.getElementById("mensaje").value;                   // Obtiene el valor del campo "mensaje".

    // Muestra una alerta de confirmación al usuario.
    alert(`¡Gracias ${nombre} por tu mensaje! Lo revisaremos pronto.`);
    console.log("Formulario enviado:", { nombre, mensaje });                    // Muestra los datos en la consola.

    // Dispara un evento personalizado llamado "nuevoPaciente".
    const eventoNuevoPaciente = new CustomEvent("nuevoPaciente", {
        detail: {                                                               // El evento incluye datos adicionales (nombre del paciente y hora actual).
            nombre: nombre || "Paciente Anónimo",                               // Si no hay nombre, usa "Paciente Anónimo".
            hora: new Date().toLocaleTimeString(),                              // Obtiene la hora actual en formato local.
        },
    });
    document.dispatchEvent(eventoNuevoPaciente);                                // Lanza el evento para que otros puedan escucharlo.
});

// --- Escuchar evento personalizado ---
document.addEventListener("nuevoPaciente", (event) => {
    const { nombre, hora } = event.detail;                                      // Desestructura el evento para obtener nombre y hora.
    const notificacion = document.createElement("div");                         // Crea un elemento <div>.
    notificacion.className = "alert alert-success mt-3";                        // Asigna clases de Bootstrap para estilos.
    notificacion.textContent = `Nuevo paciente registrado: ${nombre} a las ${hora}`; // Establece el contenido del mensaje.
    formulario.appendChild(notificacion);                                       // Agrega la notificación al formulario.

    // Elimina la notificación después de 5 segundos.
    setTimeout(() => {
        notificacion.remove();
    }, 5000);                                                                   // 5000 ms = 5 segundos
});

// --- Función async/await para simular una API REST ---
async function obtenerDoctores() {
    try {
        console.log("Simulando llamada a la API...");
        const respuesta = await simularAPI();                                   // Llama a la función simularAPI (devuelve una Promise).
        console.log("Datos de doctores obtenidos:", respuesta);                 // Muestra los datos obtenidos.
    } catch (error) {
        console.error("Error al obtener datos de la API:", error);              // Registra el error en consola.
        manejarError(error);                                                    // Llama a una función de manejo de errores.
    }
}

// Simular una API con Promise
function simularAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {                                                      // Simula un retraso de 2 segundos.
            const exito = Math.random() > 0.2;                                  // Genera un éxito con 80% de probabilidad.
            if (exito) {
                resolve([
                    { nombre: "Dr. Juan Pérez", especialidad: "Cardiología" },
                    { nombre: "Dra. Ana López", especialidad: "Pediatría" },
                ]);                                                             // Devuelve datos de doctores si tiene éxito.
            } else {
                reject("No se pudo conectar a la API.");                        // Genera un error si falla.
            }
        }, 2000);                                                               // Tiempo de espera de 2000 ms.
    });
}

// Función para manejar errores
function manejarError(error) {
    alert("Error: " + error);                                                   // Muestra el error al usuario en una alerta.
}

// Llama a la función async al cargar la página
obtenerDoctores();
}