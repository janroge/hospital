export function initHome() {
    // Solicitar datos al usuario (solo en la página de inicio)
    const nombre = prompt("Por favor, ingresa tu nombre:");
    const email = prompt("Por favor, ingresa tu correo electrónico:");
    const telefono = prompt("Por favor, ingresa tu número de teléfono:");

    // Validar datos ingresados
    let mensajeError = "";

    if (!email.includes("@")) {
        mensajeError += "El correo no es válido.\n"; // Validar correo
    }

    if (isNaN(telefono) || telefono.length < 8) {
        mensajeError += "El teléfono debe ser numérico y tener al menos 8 dígitos.\n"; // Validar teléfono
    }

    // Mostrar resultados
    if (mensajeError) {
        // Si hay errores, mostrar mensaje de error
        alert("Hubo un error con los datos ingresados:\n" + mensajeError);
    } else {
        // Si los datos son válidos, mostrar mensaje de confirmación
        alert("¡Gracias por registrarte, " + nombre + "! Los datos ingresados son válidos.");
        console.log("Nombre: " + nombre);
        console.log("Email: " + email);
        console.log("Teléfono: " + telefono);
    }
}