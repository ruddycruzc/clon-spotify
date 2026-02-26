# Clon de Spotify

![Vista previa del diseño desktop del clon de Spotify](./assets/landing.jpg)

## El reto

Tu reto es construir una página de aterrizaje (landing page) lo más fiel posible al diseño proporcionado, tanto en su versión de escritorio como en su versión móvil.

Puedes usar cualquier herramienta que desees. Si tienes algo concreto que quieras practicar, aprovecha este ejercicio para ello.

**Para completar este reto necesitas tener conocimientos de HTML y CSS, incluyendo Flexbox o CSS Grid.**

## Dónde encontrar todo

Tienes los recursos del proyecto dentro de la carpeta `/assets`:

- `landing.jpg` y `spotify-app.jpg` — imágenes de referencia visual
- `spotify-logo.png` y `spotify-icon-white.png` — logotipos
- `devices-icon.png`, `high-quality-icon.png`, `music-icon.png` — iconos de las secciones de características
- `index.html` — estructura inicial con los textos del contenido

El diseño de referencia está en `/design/spotify-prototype.pdf`. Revísalo antes de empezar: encontrarás la versión de escritorio. La versión móvil es parte del reto — tendrás que adaptar el diseño al tamaño de pantalla pequeño siguiendo los principios que se describen más abajo.

Consulta el archivo `style-guide.md` para la paleta de colores, tipografías y tamaños de referencia.

## Cómo empezar: fork y clonado

Este repositorio es la plantilla de partida. **No trabajes directamente sobre él.** Sigue estos pasos antes de escribir ningún código:

1. Haz un **fork** de este repositorio en tu cuenta de GitHub:
   - Pulsa el botón `Fork` en la esquina superior derecha de la página del repositorio
   - Selecciona tu cuenta personal como destino del fork

2. **Clona tu fork** en tu máquina local (sustituye `tu-usuario` por tu nombre de usuario de GitHub):

   ```bash
   git clone https://github.com/tu-usuario/clon-spotify.git
   cd clon-spotify
   ```

3. Abre el proyecto en tu editor:

   ```bash
   code .
   ```

4. Trabaja sobre tu copia. Los cambios que hagas y subas con `git push` quedarán en **tu repositorio**, no en el original.

> Cuando termines, comparte la URL de tu repositorio y la URL del proyecto desplegado mediante la tarea de moodle.

## Instrucciones

### Secciones del proyecto

La página está formada por las siguientes secciones:

1. **Navegación** — Logo de Spotify + enlaces: Premium, Discover, Help, Download + botón de registro
2. **Hero** — Titular principal, subtítulo y call-to-action ("Music for everyone")
3. **¿Qué hay en Spotify?** — Tres bloques de características:
   - Millions of Songs
   - HD Music
   - Stream Everywhere
4. **Características adicionales** — Search, Browse, Discover (sección con iconos y descripciones)
5. **Footer** — Pie de página con información básica

### Iteración 1 — Estructura HTML semántica

Antes de escribir ningún CSS, estructura el contenido del `index.html` con las etiquetas correctas:

- Usa `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` donde corresponda
- Cada sección de características es un bloque independiente — piensa qué etiqueta semántica la representa mejor
- Todos los textos del cuerpo deben estar en elementos HTML correctos (`<h1>`, `<h2>`, `<p>`, `<a>`, etc.)
- Las imágenes deben tener siempre atributo `alt` descriptivo

### Iteración 2 — Estilos base y reset

Crea una hoja de estilos `style.css` y enlázala al `index.html`. Antes de maquetar, establece:

- Un **reset CSS** básico (`box-sizing`, `margin`, `padding`, tipografía base)
- Las **variables CSS** con los colores, tipografías y tamaños del proyecto
- Los estilos tipográficos globales

Este es el punto de partida antes de añadir ningún componente visual.

### Iteración 3 — Maquetación mobile (mobile-first)

Empieza siempre por el diseño para pantallas pequeñas (a partir de **320px**). En móvil:

- La navegación se simplifica: logo y botón de registro visibles, el resto de enlaces en un menú colapsado
- Las secciones de características se apilan verticalmente (una debajo de otra)
- El hero ocupa el ancho completo con texto centrado
- Las imágenes se adaptan al ancho disponible

Puedes interpretar libremente el diseño móvil basándote en el diseño de escritorio del PDF. El criterio es que el contenido sea legible, accesible y coherente con la identidad visual de Spotify.

### Iteración 4 — Maquetación desktop (min-width: 1024px)

Con el diseño móvil establecido, añade los estilos de escritorio dentro de una media query `@media (min-width: 1024px)`:

- La navegación se muestra en horizontal con todos los enlaces visibles
- Las secciones de características se organizan en columnas con Flexbox o Grid
- El hero tiene imagen de fondo o imagen de acompañamiento

### Bonus — Interactividad básica

- Añade efectos `hover` en los botones y enlaces de navegación
- Implementa un menú hamburguesa funcional para el menú móvil (requiere JavaScript básico)

## Buenas prácticas obligatorias

Este ejercicio se evaluará teniendo en cuenta las siguientes prácticas. No son opcionales.

### HTML semántico

Usa las etiquetas correctas según el significado del contenido, no según su apariencia visual. Una `<section>`, un `<article>` y un `<div>` no son lo mismo.

### Nomenclatura de clases CSS

Utiliza nombres de clase que expliquen **qué es** el elemento, no cómo se ve:

```css
/* Incorrecto — describe el aspecto visual */
.verde-oscuro {
}
.columna-izquierda {
}

/* Correcto — describe el contenido */
.nav-link {
}
.feature-card {
}
.hero-title {
}
```

Se recomienda seguir la convención [BEM](http://getbem.com/) (Block, Element, Modifier) o cualquier metodología que dé coherencia a tus nombres de clase.

### Variables CSS

Define todos los valores reutilizables (colores, tipografías, tamaños) como variables en `:root`:

```css
:root {
  --color-brand: #1db954;
  --color-bg: #191414;
  --color-text-primary: #ffffff;
  --color-text-secondary: #b3b3b3;

  --font-base: "Montserrat", Helvetica, Arial, sans-serif;
  --font-size-base: 16px;

  --spacing-md: 1rem;
  --spacing-lg: 2rem;
}
```

### Reset CSS

Incluye al menos estos estilos base al inicio de tu hoja de estilos:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

img {
  max-width: 100%;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}
```

### Mobile-first

Escribe primero los estilos para pantallas pequeñas y luego añade las variaciones para pantallas más grandes con `@media (min-width: ...)`. No al revés.

```css
/* Estilos base — aplicables en móvil */
.feature-grid {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

/* Pantallas medianas y grandes */
@media (min-width: 768px) {
  .feature-grid {
    flex-direction: row;
  }
}
```

### Diseño responsive

El diseño debe adaptarse correctamente al menos en los siguientes breakpoints:

| Nombre  | Ancho mínimo |
| ------- | ------------ |
| Mobile  | 320px        |
| Tablet  | 768px        |
| Desktop | 1024px       |

Prueba el resultado en Chrome DevTools activando la vista de dispositivo.

## Commits: trabaja de forma atómica

Este ejercicio también se evaluará por cómo usas git, no solo por el resultado final. Desarrolla el hábito de hacer commits frecuentes y bien descritos desde el primer día.

### Un commit, un cambio

Cada commit debe representar **un único cambio coherente y completo**. Nunca mezcles en el mismo commit cosas no relacionadas.

```bash
# Bien — un commit por tarea concreta
git commit -m "Añadir estructura HTML semántica de la navegación"
git commit -m "Aplicar estilos base y variables CSS"
git commit -m "Maquetar sección hero en móvil"

# Mal — todo mezclado
git commit -m "cosas"
git commit -m "cambios"
git commit -m "modified: index.html modified: style.css"
```

### Convención de mensajes

Usa el **modo imperativo** en presente, como si completaras la frase _"Este commit va a..."_:

| Prefijo        | Cuándo usarlo                                 |
| -------------- | --------------------------------------------- |
| `Añadir`       | Código o ficheros nuevos                      |
| `Corregir`     | Reparar un error                              |
| `Actualizar`   | Modificar algo existente                      |
| `Eliminar`     | Borrar código o ficheros                      |
| `Refactorizar` | Reorganizar sin cambiar comportamiento        |
| `Estilo`       | Cambios solo de formato, espaciado o nombrado |

Ejemplos reales:

```bash
git commit -m "Añadir reset CSS y variables de color"
git commit -m "Corregir alineación de tarjetas en tablet"
git commit -m "Actualizar breakpoint del hero a 768px"
git commit -m "Añadir media query para menú desktop"
```

### Cuándo hacer commit

- Al terminar cada iteración o sección funcional
- Antes de hacer un cambio grande (por si necesitas volver atrás)
- Al final de cada sesión de trabajo, aunque no hayas terminado

No esperes a tener todo listo para hacer el primer commit. Un historial con muchos commits pequeños es mucho más útil que uno con tres commits enormes.

## Proceso sugerido

No hay una única forma de abordar el proyecto. Esta secuencia puede ayudarte si no sabes por dónde empezar:

1. Revisa el diseño en `/design/spotify-prototype.pdf` antes de escribir código
2. Identifica las secciones y piensa qué estructura HTML tendrá cada una
3. Crea el `index.html` con el contenido estructurado semánticamente (sin CSS aún)
4. Añade el `style.css` con el reset, las variables y los estilos tipográficos base
5. Maqueta sección por sección empezando por móvil
6. Añade las media queries para el diseño desktop
7. Revisa el resultado en varios tamaños de pantalla y ajusta

## Despliegue

Puedes publicar tu proyecto de forma gratuita con cualquiera de estas opciones:

- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

Publicar el proyecto te permite compartir la URL y recibir feedback más fácilmente.

## Tu README personalizado

Cuando termines el ejercicio, sustituye este README por uno propio. Una buena estructura sería:

```md
## Descripción del proyecto

## Capturas de pantalla (móvil y desktop)

## Lo que construí con...

## Lo que aprendí

## Lo que mejoraría con más tiempo

## URL del proyecto desplegado
```

Documentar tu proceso es una práctica profesional que te ayuda a consolidar lo aprendido y a comunicar tu trabajo.

**¡Buena maquetación!**
