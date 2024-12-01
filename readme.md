# Proyecto: Página Web del Hospital Privado

## Descripción
Este proyecto consiste en el desarrollo del sitio web de un hospital privado. El sitio incluye las páginas principales: Home, Equipo Médico y Contacto.

## Instrucciones para Visualizar
1. Clona este repositorio: `git clone <URL_DEL_REPOSITORIO>`.
2. Abre el archivo `index.html` en tu navegador web.

## Estructura de Carpetas
```plaintext
HOSPITAL_M2/
├── assets/
│   ├── css/
│   │   └── main.css
│   ├── data/
│   │   └── doctores.json
│   ├── img/
│   │   ├── doctor1.png
│   │   ├── doctor2.png
│   │   ├── doctor3.png
│   │   └── doctor4.png
│   └── js/
│       ├── modules/
│       │   ├── home.js
│       │   ├── equipoMedico.js
│       │   ├── contacto.js
│       │   └── telefono.js
│       └── scripts.js
├── index.html
├── equipo-medico.html
├── contacto.html
├── README.md

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
  - **`telefono.js`**: Función especializada en la validación de números de teléfono.
- El archivo principal **`scripts.js`** detecta la página actual y ejecuta el módulo correspondiente.

#### Depuración y Debugging
   - Uso del método `console.log()` en diferentes puntos del proyecto para depuración y mensajes informativos.
   - Instrucciones para usar el `debugger` para rastrear errores en el código.

---

## Laboratorio Virtual 1: Funcionalidades Agregadas (Módulo 3)

### 1. Manejo de Objetos JSON
- Se implementó un objeto JSON (`doctores.json`) para almacenar la información de los doctores del hospital.
- La información incluye:
  - Nombre, especialidad, años de experiencia.
  - Información adicional como horarios disponibles y datos de contacto.
- Se utilizó `destructuring` para acceder y mostrar las propiedades específicas en la consola y en la interfaz web.

### 2. Operaciones con JSON
- **Clonación:**
  - Se creó una copia de `doctoresArray` y se modificó sin afectar el original.
- **Merge:**
  - Se fusionó la información de los doctores con otra lista de servicios médicos.
- **Recorrido y stringify:**
  - Se recorrió el objeto JSON para mostrar los datos en el navegador.
  - Se utilizó `JSON.stringify()` para convertir el objeto JSON en una cadena y mostrarla en la consola.

### 3. Implementación de Estructuras de Datos
- **Arreglos:**
  - Se almacenó la lista de doctores en un arreglo, permitiendo operaciones como agregar, eliminar y buscar doctores.
- **Pilas:**
  - Se implementó una pila para gestionar las citas de los pacientes. La última cita agendada es atendida primero.
- **Colas:**
  - Se simuló el orden de llegada de los pacientes utilizando una cola en la página de contacto.

### 4. Programación de Algoritmos
- **Algoritmo de Búsqueda:**
  - Permite encontrar un doctor específico en el arreglo de doctores utilizando el nombre como criterio.
- **Algoritmo de Ordenamiento:**
  - Ordena los doctores por años de experiencia de manera ascendente.
  - La complejidad es `O(n log n)` para el ordenamiento.

## Conceptos Utilizados

### Manejo de JSON
- Se implementaron las operaciones de clonación, fusión y recorrido de objetos JSON para optimizar la gestión de datos.

### Estructuras de Datos
- **Arreglos:** Manejo dinámico de listas para agregar, eliminar y buscar información.
- **Pilas:** Gestión de citas para priorizar la última agendada.
- **Colas:** Orden de llegada de pacientes simulado en la página de contacto.

### Algoritmos
- **Búsqueda:** Eficiente para encontrar doctores por nombre.
- **Ordenamiento:** Permite organizar los doctores de manera óptima según la experiencia.

### Explicación de Complejidad
- **Búsqueda:** La complejidad es `O(n)` ya que recorre el arreglo linealmente.
- **Ordenamiento:** Utiliza `sort()`, con complejidad `O(n log n)`.

---
