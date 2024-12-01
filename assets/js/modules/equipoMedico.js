// --- Punto 1: Manejo de JSON
// Cargar los datos de los doctores desde un archivo JSON
export function initEquipoMedico() {
    const contenedorDoctores = document.getElementById("contenedor-doctores");

    // Cargar datos desde el archivo JSON
    fetch("/assets/data/doctores.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then((doctores) => {
            console.log("Datos cargados:", doctores);

            // --- Mostrar tarjetas de doctores con más de 5 años de experiencia
            doctores.forEach(({ nombre, especialidad, experiencia, imagen, detalles: { horarios, contacto } }) => {
                if (experiencia > 5) {
                    const cardHTML = `
                        <div class="card m-2 text-center" style="width: 24rem;">
                            <img src="${imagen}" class="card-img-top" alt="Foto de ${nombre}">
                            <div class="card-body">
                                <h5 class="card-title">${nombre}</h5>
                                <p class="card-text">${especialidad}</p>
                                <p class="card-text">Experiencia: ${experiencia} años</p>
                                <p class="card-text"><strong>Horarios:</br></strong> ${horarios.join(", ")}</p>
                                <p class="card-text"><strong>Contacto:</br></strong> ${contacto}</p>
                            </div>
                        </div>
                    `;
                    contenedorDoctores.innerHTML += cardHTML;
                }
            });

            // --- Guardar los doctores en una variable global para otros puntos
            window.doctoresArray = doctores;
        })
        .catch((error) => {
            console.error("Error al cargar el archivo JSON:", error);
        });
}

// --- Punto 2: Clonación y fusión de JSON
// Clonar un objeto JSON
function clonarObjeto(doctor) {
    return JSON.parse(JSON.stringify(doctor));
}

// Fusionar dos objetos JSON
function fusionarObjetos(doctor, servicios) {
    return { ...doctor, serviciosDisponibles: servicios };
}

// Ejemplo de uso (se ejecuta tras cargar los doctores)
setTimeout(() => {
    const doctorEjemplo = clonarObjeto(window.doctoresArray[0]);
    console.log("Doctor clonado:", doctorEjemplo);

    const serviciosEjemplo = ["Consulta general", "Chequeo cardiovascular"];
    const doctorFusionado = fusionarObjetos(doctorEjemplo, serviciosEjemplo);
    console.log("Doctor fusionado con servicios:", doctorFusionado);

    // Mostrar el objeto fusionado como JSON
    console.log("JSON.stringify del doctor fusionado:", JSON.stringify(doctorFusionado));
}, 2000); // Asegurarse de que los doctores se hayan cargado antes

// --- Punto 3: Estructuras de datos (Arreglos, Pilas y Colas)

// Arreglo para almacenar doctores (ya cargado en `window.doctoresArray`)

// Pila para manejar citas de pacientes
const pilaCitas = [];
function agregarCita(cita) {
    pilaCitas.push(cita); // Última cita añadida
}
function atenderCita() {
    return pilaCitas.pop(); // Última cita añadida es la primera en atenderse
}

// Cola para manejar el orden de llegada de pacientes
const colaPacientes = [];
function agregarPaciente(paciente) {
    colaPacientes.push(paciente); // Añade al final
}
function atenderPaciente() {
    return colaPacientes.shift(); // Atiende al primero en la cola
}

// Ejemplo de uso
setTimeout(() => {
    agregarCita({ paciente: "Juan", doctor: "Dr. Pérez", hora: "10:00" });
    agregarCita({ paciente: "Ana", doctor: "Dra. Gómez", hora: "10:30" });
    console.log("Citas en la pila:", pilaCitas);
    console.log("Atendiendo cita:", atenderCita());
    console.log("Citas restantes:", pilaCitas);

    agregarPaciente("Pedro");
    agregarPaciente("María");
    console.log("Pacientes en la cola:", colaPacientes);
    console.log("Atendiendo paciente:", atenderPaciente());
    console.log("Pacientes restantes:", colaPacientes);
}, 2000);

// --- Punto 4: Programación de Algoritmos

// Algoritmo de búsqueda
function buscarDoctor(nombreBuscado) {
    for (let doctor of window.doctoresArray) {
        if (doctor.nombre === nombreBuscado) {
            return doctor;
        }
    }
    return null; // Devuelve null si no encuentra el doctor
}

// Ejemplo de búsqueda
setTimeout(() => {
    const doctorEncontrado = buscarDoctor("Dra. Ana Gómez");
    if (doctorEncontrado) {
        console.log("Doctor encontrado:", doctorEncontrado);
    } else {
        console.log("Doctor no encontrado");
    }
}, 2000);

// Algoritmo de ordenamiento
function ordenarDoctoresPorExperiencia() {
    window.doctoresArray.sort((a, b) => b.experiencia - a.experiencia);
    console.log("Doctores ordenados por experiencia:", window.doctoresArray);
}

// Ejemplo de ordenamiento
setTimeout(() => {
    ordenarDoctoresPorExperiencia();
}, 2000);
