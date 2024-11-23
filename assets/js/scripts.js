console.log("Inicio de archivo scripts.js");

import { initHome } from './modules/home.js';
import { initEquipoMedico } from './modules/equipoMedico.js';
import { initContacto } from './modules/contacto.js';
import { initTelefonoValidation } from './modules/telefono.js'; // Importar validación de teléfono

// Detectar la página actual
const rutaActual = window.location.pathname;

console.log("Página actual:", rutaActual);

// Ejecutar funciones según la página
if (rutaActual.includes("index.html")) {
    initHome();
}

if (rutaActual.includes("equipo-medico.html")) {
    initEquipoMedico();
}

if (rutaActual.includes("contacto.html")) {
    initContacto();
    initTelefonoValidation(); // Ejecutar validación de teléfono solo en la página de contacto
}