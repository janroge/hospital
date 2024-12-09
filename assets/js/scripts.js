/*console.log("Inicio de archivo scripts.js");

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
    //initTelefonoValidation(); // Ejecutar validación de teléfono solo en la página de contacto
}*/


console.log("Inicio de archivo scripts.js");

// Detectar la página actual
const rutaActual = window.location.pathname;

console.log("Página actual:", rutaActual);

// Ejecutar funciones según la página
if (rutaActual.includes("index.html")) {
    import('./modules/home.js').then(module => {
        module.initHome();
    }).catch(err => console.error("Error cargando el módulo home:", err));
}

if (rutaActual.includes("equipo-medico.html")) {
    import('./modules/equipoMedico.js').then(module => {
        module.initEquipoMedico();
    }).catch(err => console.error("Error cargando el módulo equipoMedico:", err));
}

if (rutaActual.includes("contacto.html")) {
    import('./modules/contacto.js').then(module => {
        module.initContacto();
    }).catch(err => console.error("Error cargando el módulo contacto:", err));
}
