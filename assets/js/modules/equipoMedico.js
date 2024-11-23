// Función para inicializar la página de Equipo Médico
export function initEquipoMedico() {
    // Datos estáticos de los doctores
    const doctores = [
        { nombre: "Dr. Juan Pérez", especialidad: "Cardiología", experiencia: 10 },
        { nombre: "Dra. Ana López", especialidad: "Pediatría", experiencia: 4 },
        { nombre: "Dr. Carlos Martínez", especialidad: "Neurología", experiencia: 8 },
        { nombre: "Dra. Laura Gómez", especialidad: "Dermatología", experiencia: 3 }
    ];

    // Selecciona el contenedor donde se mostrarán los doctores con experiencia > 5 años
    const contenedorDoctores = document.querySelector(".container");

    // Itera sobre los doctores y agrega solo aquellos con más de 5 años de experiencia
    doctores.forEach((doctor) => {
        if (doctor.experiencia > 5) {
            const parrafo = document.createElement("p");
            parrafo.textContent = `${doctor.nombre} - ${doctor.especialidad} (${doctor.experiencia} años de experiencia)`;
            contenedorDoctores.appendChild(parrafo);
        }
    });
}