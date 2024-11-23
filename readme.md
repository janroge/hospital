# Proyecto: Página Web del Hospital Privado

## Descripción

Este proyecto representa el sitio web de un hospital privado. El sitio incluye las páginas principales: Home, Equipo Médico y Contacto.

## Instrucciones para visualizar

1. Descargar este proyecto en formato zip o clonar el repositorio.
2. Abrir el archivo `index.html` en un navegador web.

## Estructura de carpetas

- `/index.html` - Página principal (Home).
- `/equipo-medico.html` - Página del equipo médico.
- `/contacto.html` - Página de contacto.
- `/assets/css/main.css` - Archivo de estilos CSS principal.
- `/assets/scss/` - Carpeta de archivos SCSS para la modularización de estilos.
- `/assets/img/` - Carpeta con imágenes y mapa.
- `/assets/js/scripts.js` - Archivo de JavaScript para funcionalidades interactivas.
- `/node_modules/` - Módulos instalados de npm, incluyendo Bootstrap y Popper.js.

## Vistas y funcionalidades

- **Home (index.html)**: Proporciona una visión general de los servicios del hospital, testimonios de pacientes y enlaces de navegación.
- **Equipo Médico (equipo-medico.html)**: Muestra una lista con cuatro doctores, su especialidad y un breve perfil.
- **Contacto (contacto.html)**: Incluye un formulario de contacto y un mapa estático de la ubicación del hospital.

## Créditos

- **mapa.png**
  - Licencia: Creative Commons Attribution-Share Alike 2.5 Generic
  - Fuente: [Houston Medical Center Map](https://commons.wikimedia.org/wiki/File:Houston_Medical_Center_Map.png)
- **exclamation-triangle-fill.svg / heart-pulse.svg / card-checklist.svg**
  - Licencia: The MIT License (MIT)
  - Fuente: [Bootstrap Icons](https://icons.getbootstrap.com/)
- **doctor1.png**
  - Licencia: CC BY 4.0 Attribution 4.0 International Deed (CC BY 4.0)
  - Fuente: [Vectorportal](https://vectorportal.com/es/vector/doctor-con-una-carpeta/35588)
- **logo.svg**
  - Licencia: Creative Commons Deed CC0
  - Fuente: [Public Domain Vectors](https://publicdomainvectors.org/en/free-clipart/Hospital-sign/45161.html)

---

## Integración de SASS y Bootstrap

### Estructura Modular con SASS (Taller 2)

El proyecto utiliza una estructura de carpetas 7-1 para organizar los archivos SCSS de forma modular, facilitando la gestión y personalización de estilos. Los estilos personalizados se aplican a través de los siguientes archivos:

- **`_variables.scss`**: Define variables personalizadas para colores, tipografía y espaciados.
- **`_mixins.scss`**: Incluye mixins para código reutilizable y responsividad.
- **`_components.scss`**: Archivos parciales para componentes como botones y formularios.
- **`_layout.scss`**: Archivos parciales para la estructura de diseño general, incluyendo encabezado, pie de página y navegación.
- **`main.scss`**: Archivo principal que importa todos los parciales y genera el CSS final.

### Personalización de Bootstrap

Se integra Bootstrap en el proyecto y se personalizan algunas de sus variables para adaptar el diseño a la identidad del hospital:

- **Colores personalizados**: `$primary`, `$secondary`, y `$danger` para adaptar los colores base de Bootstrap.
- **Tipografía y tamaños de fuente**: `$font-family-base`, `$font-size-base` para personalizar la tipografía.
- **Botones**: Se ajustan los espaciados y el borde de los botones a través de `$btn-padding-y`, `$btn-padding-x`, y `$btn-border-radius`.

### Componentes de Bootstrap Utilizados

Se implementaron al menos tres componentes de Bootstrap para mejorar la accesibilidad y apariencia del sitio:

- **Botones**: Botones personalizados en color y tamaño para llamadas a la acción.
- **Formulario**: Formulario de contacto en la página de Contacto.
- **Cards**: Se utilizan tarjetas para la visualización del equipo médico y servicios médicos.

---

### Event Loop en JavaScript
El **event loop** es el mecanismo que permite a JavaScript manejar tareas asíncronas, como eventos del usuario o peticiones de red, de forma no bloqueante.

- **Stack (Pila):** Maneja las tareas sincrónicas. Cada vez que se llama a una función, se apila en el stack.
- **Heap (Montón):** Almacena objetos y variables en memoria.
- **Queue (Cola):** Cola de tareas asíncronas. Cuando las tareas asíncronas están listas, se pasan al stack mediante el event loop.

---

## Actualización del Proyecto: Página Web del Hospital Privado

### Nuevas Funcionalidades Implementadas

#### Funcionalidades de JavaScript
1. **Solicitar información del usuario (Home)**
   - Muestra un prompt para que el usuario ingrese su nombre, correo electrónico y número de teléfono.
   - Valida que el correo electrónico contenga un `@` y que el número de teléfono sea numérico y tenga al menos 8 dígitos.
   - Muestra alertas al usuario con errores específicos en caso de datos inválidos.

2. **Lista dinámica de doctores (Equipo Médico)**
   - Utilizando un ciclo `for`, se genera dinámicamente una lista de doctores en la página del equipo médico.
   - Se filtran los doctores con más de 5 años de experiencia utilizando condicionales para mostrarlos en la interfaz.

3. **Manejo de errores (Contacto)**
   - En la validación de datos del formulario de contacto, se implementó un bloque `try/catch` para manejar errores.
   - Si el usuario ingresa un número de teléfono en formato incorrecto o un correo no válido, se muestra un mensaje de error.

#### Modularización de JavaScript
- Todo el JavaScript está organizado en módulos:
  - **`home.js`**: Contiene las funcionalidades específicas para la página de inicio (Home).
  - **`equipoMedico.js`**: Contiene las funcionalidades específicas para la página del equipo médico.
  - **`contacto.js`**: Contiene las funcionalidades específicas para la página de contacto.
- El archivo principal **`scripts.js`** detecta la página actual y ejecuta el módulo correspondiente.

#### Estilos y Personalización
1. **Modo Oscuro**
   - Implementación de un botón que permite alternar entre modo claro y oscuro.
   - El estado del modo (oscuro o claro) se guarda en `localStorage` para mantener la preferencia del usuario entre sesiones.
   - Los estilos de fondo y color de texto fueron personalizados para que reflejen el modo seleccionado en toda la página.

2. **Personalización de Bootstrap con SASS**
   - Los estilos de Bootstrap fueron modificados para que reflejen la identidad del hospital:
     - Colores: `$primary` (personalizado), `$secondary`, `$danger`.
     - Tipografía: `$font-family-base`, `$font-size-base`.
     - Espaciados: `$spacer`, `$btn-padding`.

### Instrucciones Adicionales
1. **Event Loop (JavaScript)**:
   - Explicación en el README sobre cómo funciona el `event loop` en JavaScript (stack, heap y queue).
   - Detalles sobre cómo se ejecutan las tareas asíncronas en el entorno del navegador.

2. **Depuración y Debugging**:
   - Uso del método `console.log()` en diferentes puntos del proyecto para depuración y mensajes informativos.
   - Instrucciones para usar el `debugger` para rastrear errores en el código.

---
