// --- Lab 1 - Punto 1: Manejo de JSON
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

// --- Lab 1 - Punto 2: Clonación y fusión de JSON
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

// --- Lab 1 - Punto 3: Estructuras de datos (Arreglos, Pilas y Colas)

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

// --- Lab 1 - Punto 4: Programación de Algoritmos

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



////////////////////////////////////////////////////////////////////////
// --- Punto 1 del Laboratorio 2 --- Programación Funcional
//
console.log("///////Punto 1 del Laboratorio 2///////////");
// Currying: Función para calcular el costo total
function calcularCostoConsulta(precioPorConsulta) {
    return function (numeroDeConsultas) {
        return precioPorConsulta * numeroDeConsultas;
    };
}

// Ejemplo de uso de currying
let costoConsulta = calcularCostoConsulta(50000); // Cada consulta cuesta 50,000
console.log("Costo total (3 consultas):", costoConsulta(3)); // Resultado: 150,000


//
// Función flecha: Calcular tiempo promedio de espera
let calcularTiempoPromedio = (tiempos) => {
    let suma = 0;
    for (let i = 0; i < tiempos.length; i++) {
        suma += tiempos[i]; // Sumar cada tiempo al total
    }
    return suma / tiempos.length; // Dividir la suma total entre la cantidad de elementos
};

// Ejemplo de uso
let tiemposPromedio = [15, 20, 10, 25]; // En minutos
console.log("Tiempo promedio de espera:", calcularTiempoPromedio(tiemposPromedio)); // Resultado: 17.5 minutos



//
// Recursión: Calcular horas totales de consulta
function calcularHorasTotales(horasPorDia, dias = 7) {
    if (dias === 0) return 0; // Caso base
    return horasPorDia + calcularHorasTotales(horasPorDia, dias - 1); // Recursión
}

// Ejemplo de uso de recursión
let horasDiarias = 4; // Cada día el doctor atiende 4 horas
console.log("Horas totales de consulta en una semana:", calcularHorasTotales(horasDiarias)); // Resultado: 28 horas


//
// Composición de funciones: Aplicar descuentos
function aplicarDescuento(costo, descuento) {
    return costo - costo * (descuento / 100);
}

function calcularCostoConDescuento(precioPorConsulta, numeroDeConsultas, descuento) {
    let costoTotal = calcularCostoConsulta(precioPorConsulta)(numeroDeConsultas); // Currying
    return aplicarDescuento(costoTotal, descuento); // Composición
}

// Ejemplo de uso de composición
let costoFinal = calcularCostoConDescuento(50000, 3, 10); // 10% de descuento
console.log("Costo final con descuento:", costoFinal); // Resultado: 135,000
console.log(" ");

////////////////////////////////////////////////////////////////////////
// --- Punto 3 del Laboratorio 2 --- Programación Orientada a Objetos
//
// Clase Doctor
class Doctor {
    // Constructor que inicializa las propiedades del doctor
    constructor(nombre, especialidad, experiencia) {
        this.nombre = nombre; // Nombre del doctor
        this.especialidad = especialidad; // Especialidad médica
        let _experiencia = experiencia; // Encapsulación: experiencia protegida

        // Getter para acceder a años de experiencia
        this.getExperiencia = () => _experiencia;

        // Setter para modificar años de experiencia con validación
        this.setExperiencia = (nuevaExperiencia) => {
            if (nuevaExperiencia >= 0) {
                _experiencia = nuevaExperiencia;
            } else {
                console.error("La experiencia debe ser un número positivo.");
            }
        };
    }

    // Método para mostrar la información del doctor
    mostrarInformacion() {
        return `Dr. ${this.nombre}, Especialidad: ${this.especialidad}, Experiencia: ${this.getExperiencia()} años.`;
    }

    // Método para calcular el total de pacientes atendidos por el doctor
    calcularPacientesAtendidos(consultasPorDía, díasTrabajados) {
        return consultasPorDía * díasTrabajados;
    }
}

// Subclase Cirujano que extiende la clase Doctor
class Cirujano extends Doctor {
    // Constructor que extiende el constructor de la clase base
    constructor(nombre, especialidad, experiencia, operacionesPorMes) {
        super(nombre, especialidad, experiencia); // Llama al constructor de la clase base
        this.operacionesPorMes = operacionesPorMes; // Propiedad adicional específica de Cirujano
    }

    // Sobrescribe el método para calcular el número de pacientes atendidos
    calcularPacientesAtendidos(consultasPorDía, díasTrabajados) {
        // Polimorfismo: usa operaciones en lugar de consultas
        return this.operacionesPorMes;
    }

    // Método específico para mostrar operaciones realizadas
    mostrarOperacionesRealizadas() {
        return `El Dr. ${this.nombre} realiza un promedio de ${this.operacionesPorMes} operaciones por mes.`;
    }
}

// Ejemplo de usoPunto 3 del Laboratorio 2
console.log("///////Punto 3 del Laboratorio 2///////////");
const doctor1 = new Doctor("Juan Pérez", "Cardiología", 10);
console.log(doctor1.mostrarInformacion());
console.log("Pacientes atendidos:", doctor1.calcularPacientesAtendidos(5, 20));

const cirujano1 = new Cirujano("Ana Gómez", "Cirugía General", 15, 30);
console.log(cirujano1.mostrarInformacion());
console.log("Pacientes atendidos (Cirujano):", cirujano1.calcularPacientesAtendidos());
console.log(cirujano1.mostrarOperacionesRealizadas());
console.log(" ");

////////////////////////////////////////////////////////////////////////
// --- Trabajo Grupal --- 
//
// --- Punto 1 :  Ya era parte de lo desarrollado en el laboratorio 2

////////////////////////////////////////////////////////////////////////
// --- PUNTO 2: Implementación de Algoritmos y Estructuras de Datos ---

// Verificar si window.doctoresArray está inicializado
if (!window.doctoresArray || !Array.isArray(window.doctoresArray)) {
    console.warn("window.doctoresArray no está inicializado. Inicializando con un arreglo vacío.");
    window.doctoresArray = []; // Inicializa como un arreglo vacío si no está definido
}

// Gestión de citas con pila (Last In, First Out)
const pilaCitasGrupo = []; // Nueva pila de citas

export function agregarCitaGrupo(cita) {
    pilaCitasGrupo.push(cita); // Agrega la cita al final de la pila
}

export function atenderCitaGrupo() {
    return pilaCitasGrupo.pop(); // Remueve la última cita agregada
}

// Ejemplo de uso para citas con pila
console.log("/////// --- Trabajo Grupal ---  Ejemplo de uso para citas con pila///////////");
agregarCitaGrupo({ paciente: "Juan", doctor: "Dr. Pérez", hora: "10:00" });
agregarCitaGrupo({ paciente: "Ana", doctor: "Dra. Gómez", hora: "10:30" });
console.log("Citas en la pila:", pilaCitasGrupo);
console.log("Atendiendo cita:", atenderCitaGrupo());
console.log("Citas restantes:", pilaCitasGrupo);
console.log(" ");

// Gestión de pacientes con cola (First In, First Out)
const colaPacientesGrupo = []; // Nueva cola de pacientes

export function agregarPacienteGrupo(paciente) {
    colaPacientesGrupo.push(paciente); // Añade al final de la cola
}

export function atenderPacienteGrupo() {
    return colaPacientesGrupo.shift(); // Remueve al primer paciente de la cola
}

// Ejemplo de uso para pacientes con cola
console.log("/////// --- Trabajo Grupal ---  Ejemplo de uso para pacientes con cola///////////");
agregarPacienteGrupo("Pedro");
agregarPacienteGrupo("María");
console.log("Pacientes en la cola:", colaPacientesGrupo);
console.log("Atendiendo paciente:", atenderPacienteGrupo());
console.log("Pacientes restantes:", colaPacientesGrupo);
console.log(" ");

// Algoritmos de búsqueda y ordenamiento

// Búsqueda por especialidad
export function buscarPorEspecialidadGrupo(especialidad) {
    if (!window.doctoresArray || !Array.isArray(window.doctoresArray)) {
        console.error("window.doctoresArray no está inicializado o no es un arreglo.");
        return []; // Devuelve un arreglo vacío en caso de error
    }
    return window.doctoresArray.filter((doctor) => doctor.especialidad === especialidad);
}

// Ejemplo de uso de búsqueda por especialidad
console.log("/////// --- Trabajo Grupal ---  Ejemplo de uso para Búsqueda por especialidad///////////");
console.log("Doctores en Cardiología:", buscarPorEspecialidadGrupo("Cardiología"));
console.log(" ");

// Ordenamiento por años de experiencia
export function ordenarDoctoresPorAñosDeExperienciaGrupo() {
    if (!window.doctoresArray || !Array.isArray(window.doctoresArray)) {
        console.error("window.doctoresArray no está inicializado o no es un arreglo.");
        return []; // Devuelve un arreglo vacío en caso de error
    }
    return [...window.doctoresArray].sort((a, b) => b.experiencia - a.experiencia);
}

// Ejemplo de uso de ordenamiento por experiencia
console.log("/////// --- Trabajo Grupal ---  Ejemplo de uso para Ordenamiento por años de experiencia///////////");
console.log("Doctores ordenados por experiencia:", ordenarDoctoresPorAñosDeExperienciaGrupo());
console.log(" ");

// --- Punto 3 :  Ya era parte de lo desarrollado en el laboratorio 2

// --- Punto 4 :  Ya era parte de lo desarrollado en el laboratorio 2

// --- Punto 5: Programación Asíncrona y Eventos ---

// Simulación de un registro de citas con async/await y promesas
console.log("/////// --- Trabajo Grupal ---  Simulación de un registro de citas con async/await y promesas///////////");
export async function registrarCita(cita) {
    try {
        console.log("Iniciando registro de cita...");
        // Simular una API que registra la cita con una promesa
        const respuesta = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.1) { // 90% de éxito
                    resolve(`Cita registrada: ${JSON.stringify(cita)}`);
                } else {
                    reject("Error al registrar la cita.");
                }
            }, 2000); // Simula un retraso de 2 segundos
        });

        console.log(respuesta);
    } catch (error) {
        console.error("Error durante el registro de cita:", error);
    }
}
console.log(" ");

// Ejemplo de uso de la función asíncrona
const citaEjemplo = { paciente: "Pedro", doctor: "Dr. Pérez", hora: "11:00" };
registrarCita(citaEjemplo);

// Listener para confirmar la cita
console.log("/////// --- Trabajo Grupal ---   Listener para confirmar la cita///////////");
document.addEventListener("DOMContentLoaded", () => {
    const confirmarCitaBtn = document.getElementById("confirmarCita");
    if (confirmarCitaBtn) {
        confirmarCitaBtn.addEventListener("click", async () => {
            console.log("Evento: Confirmar cita");
            await registrarCita({
                paciente: "María",
                doctor: "Dra. Gómez",
                hora: "12:00",
            });
        });
    }
});
console.log(" ");

// Event listener para solicitar información de un doctor
console.log("/////// --- Trabajo Grupal ---   Event listener para solicitar información de un doctor///////////");
document.addEventListener("DOMContentLoaded", () => {
    const solicitarInfoBtn = document.getElementById("solicitarInfo");
    if (solicitarInfoBtn) {
        solicitarInfoBtn.addEventListener("click", () => {
            console.log("Evento: Solicitar información de un doctor");
            const doctorInfo = buscarDoctor("Dr. Juan Pérez"); // Reutiliza la función de búsqueda
            if (doctorInfo) {
                console.log("Información del doctor:", doctorInfo);
            } else {
                console.error("Doctor no encontrado.");
            }
        });
    }
});
console.log(" ");