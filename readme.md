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

## Laboratorio Virtual 2 - Actualización del README

### Implementaciones y Funcionalidades

#### Punto 1: Programación Funcional

1. **Currying**: Implementación de una función para calcular el costo total de los servicios de un paciente basado en el número de consultas realizadas y el precio por consulta.
   - Ejemplo de uso: `calcularCostoConsulta(50000)(3)` devuelve `150000`.

2. **Función Flecha**: Uso de una función flecha para calcular el tiempo promedio de espera de los pacientes.
   - Ejemplo: Dado `[15, 20, 10, 25]`, el resultado es `17.5` minutos.

3. **Recursión**: Implementación de una función recursiva para calcular el total de horas de consulta de un doctor durante una semana.
   - Ejemplo: Si el doctor trabaja 4 horas diarias, el resultado es `28` horas.

4. **Composición de Funciones**: Uso de composición para aplicar descuentos en el costo de consultas basado en el número de consultas realizadas.
   - Ejemplo: `calcularCostoConDescuento(50000, 3, 10)` devuelve `135000` con un descuento del 10%.

#### Punto 2: Programación Orientada a Eventos y Programación Asíncrona

1. **Eventos en la Página de Contacto**:
   - Listener para capturar el envío del formulario. Se muestra un mensaje de confirmación al usuario con los datos ingresados.
   - Creación y disparo de un evento personalizado `nuevoPaciente`, que simula la llegada de un nuevo paciente, mostrando una notificación en la página.

2. **Async/Await para Simulación de API**:
   - Uso de `async/await` para simular una llamada a una API REST que obtiene los datos de los doctores. Manejo de casos de éxito y error mediante `Promise`.
   - Implementación de manejo de errores utilizando `try/catch`. En caso de error, se utiliza un callback para mostrar un mensaje al usuario.

#### Punto 3: Programación Orientada a Objetos

1. **Clase `Doctor`**:
   - Propiedades: `nombre`, `especialidad` y `años de experiencia`.
   - Métodos:
     - `mostrarInformacion()`: Devuelve una cadena con la información del doctor.
     - `calcularPacientesAtendidos(numDias)`: Calcula el total de pacientes atendidos basado en los días trabajados.

2. **Subclase `Cirujano`**:
   - Extiende la funcionalidad de la clase `Doctor`.
   - Métodos:
     - Sobrescribe `calcularPacientesAtendidos` para calcular el número de operaciones realizadas en lugar de consultas.
   - Encapsulamiento: Implementación de getters y setters para la propiedad `años de experiencia`.

---

### Archivos Modificados

- **`scripts.js`**:
  - Actualización Configuración para cargar las funciones según la página activa (ahora se importan los js solo cuando se está en la página)

- **`contacto.js`**:
  - Implementación de eventos personalizados y simulación de API en la página de contacto.

- **`equipoMedico.js`**:
  - Implementación de la programación funcional y objetos relacionados con los doctores.

- **`contacto.html`**:
  - Ajustes menores para pruebas y despliegue de eventos.

### Instrucciones

1. Abre el proyecto en un servidor local o directamente en el navegador (se recomienda Live Server).
2. Revisa la funcionalidad en las diferentes páginas (`equipo-medico.html` y `contacto.html`).
3. Verifica la consola para los mensajes de debug y confirmación de funcionalidades.

# Trabajo Grupal: Desarrollo Completo del Sistema del Hospital con JavaScript Avanzado

## Descripción General
Este proyecto incluye la implementación completa de un sistema para un hospital ficticio, usando JavaScript avanzado. Se abordan todos los puntos del enunciado del trabajo grupal, incluyendo manipulación de JSON, programación funcional, orientada a objetos, asincrónica y manejo de eventos.

---

## Punto 1: Manipulación de Datos con JSON y Simulación de API REST
Se utilizó JSON para manejar la información de doctores y se simula una API REST para cargar los datos dinámicamente en la interfaz.

### Implementaciones:
1. **Cargar Datos desde JSON**:
   - Uso de `fetch` para obtener datos desde un archivo local `doctores.json`.
   - Se almacenan los datos en una variable global `window.doctoresArray` para permitir su uso en otros puntos del trabajo.

2. **Clonación y Fusión de Objetos JSON**:
   - Clonar un objeto JSON usando `JSON.parse(JSON.stringify())`.
   - Fusionar objetos JSON con el operador spread (`...`).

3. **Recorrido de Datos**:
   - Los datos de los doctores se recorren y muestran dinámicamente en tarjetas en la interfaz.

### Ejemplo de Código:
```javascript
// Cargar datos desde el archivo JSON
fetch("/assets/data/doctores.json")
    .then((response) => response.json())
    .then((data) => {
        window.doctoresArray = data;
        console.log("Datos cargados:", window.doctoresArray);
    });
```

---

## Punto 2: Implementación de Algoritmos y Estructuras de Datos
Se implementaron algoritmos y estructuras de datos para gestionar la información de doctores y citas.

### Implementaciones:
1. **Algoritmos de Búsqueda y Ordenamiento**:
   - **Búsqueda**: Buscar doctores por especialidad usando `filter`.
   - **Ordenamiento**: Ordenar doctores por años de experiencia usando `sort`.

2. **Estructuras de Datos**:
   - **Pilas**: Para manejar citas (última en entrar, primera en salir).
   - **Colas**: Para manejar pacientes en orden de llegada.

### Ejemplo de Código:
```javascript
// Búsqueda por especialidad
export function buscarPorEspecialidadGrupo(especialidad) {
    return window.doctoresArray.filter((doctor) => doctor.especialidad === especialidad);
}

// Ordenar por años de experiencia
export function ordenarDoctoresPorAñosDeExperienciaGrupo() {
    return [...window.doctoresArray].sort((a, b) => b.experiencia - a.experiencia);
}
```

---

## Punto 3: Programación Funcional
Se implementaron conceptos avanzados de programación funcional, como currying, composición de funciones y recursión.

### Implementaciones:
1. **Currying**:
   - Calcular el costo total de servicios médicos basados en el número de consultas.
2. **Composición de Funciones**:
   - Aplicar descuentos al costo de los servicios.
3. **Recursión**:
   - Calcular el total de horas de consulta en una semana.

### Ejemplo de Código:
```javascript
// Currying: Calcular costo total
function calcularCostoConsulta(precioPorConsulta) {
    return function (numeroDeConsultas) {
        return precioPorConsulta * numeroDeConsultas;
    };
}
```

---

## Punto 4: Programación Orientada a Objetos
Se utilizó programación orientada a objetos (POO) para estructurar el proyecto con clases y subclases.

### Implementaciones:
1. **Clase Doctor**:
   - Propiedades: `nombre`, `especialidad`, `experiencia`.
   - Métodos: Mostrar información, calcular pacientes atendidos.
   - Encapsulación: Getter y setter para `experiencia`.

2. **Subclase Cirujano**:
   - Extiende la clase `Doctor`.
   - Sobrescribe el método para calcular pacientes atendidos, considerando operaciones realizadas.

### Ejemplo de Código:
```javascript
// Clase Doctor
class Doctor {
    constructor(nombre, especialidad, experiencia) {
        this.nombre = nombre;
        this.especialidad = especialidad;
        let _experiencia = experiencia;
        this.getExperiencia = () => _experiencia;
        this.setExperiencia = (nuevaExperiencia) => {
            if (nuevaExperiencia >= 0) _experiencia = nuevaExperiencia;
        };
    }
}

// Subclase Cirujano
class Cirujano extends Doctor {
    constructor(nombre, especialidad, experiencia, operacionesPorMes) {
        super(nombre, especialidad, experiencia);
        this.operacionesPorMes = operacionesPorMes;
    }
}
```

---

## Punto 5: Programación Asíncrona y Eventos
Se integraron conceptos de programación asíncrona y manejo de eventos para registrar citas y manejar interacciones del usuario.

### Implementaciones:
1. **Programación Asíncrona**:
   - Función `async/await` para simular el registro de citas.
   - Manejo de errores con `try/catch`.

2. **Manejo de Eventos**:
   - Listener para confirmar citas.
   - Listener para solicitar información de un doctor.

### Ejemplo de Código:
```javascript
// Simulación de registro de citas con async/await
async function registrarCita(cita) {
    try {
        const respuesta = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`Cita registrada: ${JSON.stringify(cita)}`);
            }, 2000);
        });
        console.log(respuesta);
    } catch (error) {
        console.error("Error durante el registro de cita:", error);
    }
}

// Listener para confirmar cita
document.getElementById("confirmarCita").addEventListener("click", async () => {
    await registrarCita({ paciente: "María", doctor: "Dra. Gómez", hora: "12:00" });
});
```

---

## Instrucciones para Ejecutar el Proyecto
1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repo.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd nombre-del-repo
   ```
3. Abre el proyecto en un servidor local (se recomienda **Live Server**).