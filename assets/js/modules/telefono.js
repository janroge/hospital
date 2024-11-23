export function initTelefonoValidation() {
    console.log("Validación de teléfono inicializada");

    // Solicitar el teléfono al usuario
    const telefono = prompt("Por favor, ingrese su número de teléfono:");

    // Agregar un punto de depuración
    debugger;

    try {
        // Verificar si el teléfono no es un número o si tiene menos de 8 dígitos
        if (isNaN(telefono) || telefono.length < 8) {
            throw new Error("El número de teléfono debe ser numérico y contener al menos 8 dígitos.");
        }
        console.log("Número de teléfono válido:", telefono);
    } catch (error) {
        console.error("Error en la validación del teléfono:", error.message);
        alert("Error: " + error.message);
    }
}