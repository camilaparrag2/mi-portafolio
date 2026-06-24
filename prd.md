# Documento de Requerimientos de Producto (PRD)
## Proyecto: Portafolio Personal (Landing Page para GitHub Pages)

### 1. Visión General del Producto
* **Objetivo:** Crear una Landing Page interactiva, moderna y minimalista alojada en GitHub Pages para mostrar proyectos de desarrollo web, habilidades técnicas y marca personal.
* **Audiencia Objetivo:** Reclutadores, clientes potenciales y la comunidad tech.
* **Plataforma de Despliegue:** GitHub Pages (Sitio estático).

---

### 2. Objetivos y Métricas de Éxito
* **Carga Rápida:** Tiempo de carga inicial inferior a 1.5 segundos.
* **Responsivo:** Diseño *Mobile-First* impecable (pantallas desde 320px hasta monitores 4K).
* **Conversión:** Facilidad para que el visitante descargue el CV o contacte en menos de 3 clics.

---

### 3. Requerimientos de Diseño y Estética
El portafolio debe seguir una línea visual limpia, profesional y moderna.

* **Estilo:** Minimalista con bordes redondeados en tarjetas (`bento-grid` o layouts limpios), botones e íconos.
* **Paleta de Colores Sugerida:**
    * **Fondo:** Blanco puro o contratonos muy suaves.
    * **Acentos principales:** Tonos **Terracota** y **Café** (para tipografías, botones activos y detalles).
    * **Texto principal:** Negro suave o gris oscuro para alta legibilidad.
* **Interactividad:** Animaciones sutiles al hacer scroll o pasar el cursor (hover) por los proyectos.

---

### 4. Estructura de la Landing Page (Secciones)

El sitio constará de una sola página dividida en los siguientes bloques funcionales:

#### A. Barra de Navegación (Navbar)
* **Fija (Sticky):** Debe permanecer arriba al hacer scroll (puede tener un efecto difuminado de fondo).
* **Enlaces:** Inicio, Sobre Mí, Proyectos, Contacto.
* **Diseño:** Menú colapsable (hamburguesa) en dispositivos móviles.

#### B. Sección Hero (Introducción)
* **Contenido:** Un saludo de impacto, tu rol (ej. *Frontend Developer*) y una propuesta de valor corta.
* **Llamado a la Acción (CTA):** Botón principal destacado ("Ver Proyectos" o "Contactar") y botón secundario ("Descargar CV").

#### C. Sección "Sobre Mí" y Habilidades
* **Biografía corta:** Un par de párrafos sobre tu enfoque, pasión por el código y resolución de problemas.
* **Grid de Habilidades:** Íconos limpios de las herramientas que dominas (HTML5, CSS3, JavaScript, Bootstrap, Python, etc.).

#### D. Sección de Proyectos (Fase de Pruebas UI)
* **Estado Actual:** En fase de diseño/maquetación. No se subirán proyectos reales hasta que la interfaz esté validada.
* **Estructura UI:** Grid de tarjetas (Cards) usando Bootstrap. En pantallas grandes (Desktop) se mostrarán 2 o 3 columnas, y en pantallas móviles 1 sola columna.
* **Datos Dinámicos (Prueba):** La UI se alimentará inicialmente de un archivo `proyectos.json` que contendrá **4 proyectos ficticios** (placeholders) para evaluar cómo se comporta el diseño con diferentes extensiones de texto y cantidad de etiquetas tecnológicas.

##### Datos Ficticios a inyectar (Formato JSON esperado):

###### Proyecto de Prueba 1: Énfasis en título largo e imagen
* **Título:** Plataforma de Gestión de Reservas para Hostales de Montaña
* **Descripción:** Aplicación web para la administración de camas y habitaciones privadas, integrando un calendario visual y pasarela de pago.
* **Tecnologías:** `HTML`, `CSS`, `JS`, `Bootstrap`.
* **Imagen:** (URL de imagen de prueba, ej: *Unsplash/via.placeholder.com*)

###### Proyecto de Prueba 2: Énfasis en muchas tecnologías (Badges)
* **Título:** App de Finanzas Personales
* **Descripción:** Panel de control (Dashboard) minimalista para registrar gastos diarios e ingresos, con gráficos interactivos y cálculo de presupuesto mensual.
* **Tecnologías:** `Python`, `Django`, `PostgreSQL`, `JavaScript`, `Chart.js`, `Tailwind`.
* **Imagen:** (URL de imagen de prueba)

###### Proyecto de Prueba 3: Énfasis en descripción larga
* **Título:** E-Commerce de Café de Especialidad
* **Descripción:** Desarrollo de una tienda online completa enfocada en la experiencia de usuario (UX). Incluye carrito de compras dinámico, filtros por origen y nivel de tueste, y un blog de recetas para preparar café en casa usando diferentes métodos de extracción.
* **Tecnologías:** `React`, `Node.js`, `MongoDB`.
* **Imagen:** (URL de imagen de prueba)

###### Proyecto de Prueba 4: Estructura base (Texto corto)
* **Título:** API del Clima Simple
* **Descripción:** Buscador de clima en tiempo real consumiendo una API pública de meteorología.
* **Tecnologías:** `JavaScript`, `Fetch API`, `HTML`, `CSS`.
* **Imagen:** (URL de imagen de prueba)

*Nota de Desarrollo:* Al usar estos 4 proyectos, podremos validar si las tarjetas mantienen una altura uniforme (usando `.h-100` en Bootstrap, por ejemplo), cómo se alinean los botones al final de la tarjeta cuando el texto es corto, y cómo se leen los colores de la marca en las etiquetas.

#### E. Formulario / Sección de Contacto
* **Enlaces Directos:** Botones limpios a LinkedIn, GitHub y correo electrónico.
* **Opcional:** Formulario integrado con servicios gratuitos como *Formspree* o *StaticForms* para recibir mensajes directamente en tu correo sin necesidad de un backend.

#### F. Pie de Página (Footer)
* Créditos del sitio ("Diseñado y desarrollado por...") y año vigente.

---

### 5. Requerimientos Técnico-Prácticos

* **Tecnologías Principales:** HTML5, CSS3, JavaScript moderno (ES6+).
* **Framework de Estilos:** **Bootstrap** (utilizando su sistema de Grid y utilidades para garantizar que sea responsive-first rápidamente).
* **Arquitectura de Datos:** La información de los proyectos debe estar estructurada en un archivo JSON local (`proyectos.json`). JavaScript se encargará de leer este archivo y renderizar las tarjetas dinámicamente en el DOM.
* **Rendimiento:** Uso de imágenes optimizadas (formatos `.webp`), fuentes de carga rápida y código limpio.

---

### 6. Plan de Lanzamiento (Fases de Desarrollo)

* **Fase 1: Maquetación Básica:** Crear la estructura HTML y aplicar los estilos base con Bootstrap utilizando la paleta terracota/café/blanco.
* **Fase 2: Dinamismo con JS:** Crear el archivo `proyectos.json` con los 4 elementos ficticios e implementar la lógica en JavaScript para pintarlos dinámicamente.
* **Fase 3: Optimización y Pruebas UI:** Revisar el diseño responsivo en móviles, comprobar la alineación de las tarjetas y validar los contrastes de color.
* **Fase 4: Despliegue:** Subir el repositorio a GitHub y activar **GitHub Pages** desde los ajustes.