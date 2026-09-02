# Yuredo

Sitio web oficial del proyecto **Yuredo**, una experiencia digital alrededor del cortometraje, el territorio del Vaupes, la etno-ornitologia, el semillero Motmot, relatos magicos, material audiovisual y el equipo de realizacion.

## Despliegue

El proyecto esta publicado en Vercel:

https://yuredo1-0-1.vercel.app/

## Tecnologias

- React
- TypeScript
- Vite
- React Router
- Zustand
- CSS Modules
- ESLint

## Requisitos

- Node.js
- npm

## Instalacion

Instala las dependencias del proyecto:

```bash
npm install
```

## Ejecucion en desarrollo

Levanta el servidor local de Vite:

```bash
npm run dev
```

Luego abre la URL local que indique la terminal, normalmente:

```text
http://localhost:5173/
```

## Scripts disponibles

```bash
npm run dev
```

Inicia el entorno de desarrollo.

```bash
npm run build
```

Genera la version de produccion en la carpeta `dist`.

```bash
npm run preview
```

Sirve localmente la version compilada.

```bash
npm run lint
```

Ejecuta ESLint sobre el proyecto.

## Estructura del proyecto

```text
.
|-- docs/
|   `-- arquitectura.md
|-- public/
|   `-- static/
|       |-- audio-player/
|       |-- avatares/
|       |-- files/
|       |-- img/
|       |-- redes-sociales/
|       `-- video/
|-- src/
|   |-- components/
|   |-- data/
|   |-- hooks/
|   |-- page/
|   |-- store/
|   |-- Aplicacion.tsx
|   |-- index.css
|   `-- main.tsx
|-- index.html
|-- package.json
`-- vite.config.ts
```

## Secciones principales

- **Inicio**: presenta la identidad visual de Yuredo, el teaser y el trailer.
- **Motmot**: muestra contenido del semillero y recursos visuales del proyecto.
- **Etno-ornitologia**: integra materiales y cartillas relacionadas con el enfoque etnico y las aves del territorio.
- **Podcast**: presenta aves del Vaupes con imagenes, nombres y descripciones.
- **Yuredo**: seccion dedicada al cortometraje y su contenido audiovisual.
- **Equipo**: lista los colaboradores y sus roles dentro del proyecto.

## Convenciones del proyecto

El proyecto sigue las pautas descritas en `docs/arquitectura.md`:

- Usar nombres descriptivos en variables, funciones, componentes y modulos.
- Mantener separacion de responsabilidades entre componentes, datos, hooks y estado global.
- Usar CSS Modules para estilos por componente o seccion.
- Guardar recursos estaticos en `public/static`.
- Optimizar imagenes, preferiblemente en formato `webp` cuando aplique.
- Evitar cambios directos sobre la rama principal.

## Despliegue en produccion

Para preparar una version de produccion:

```bash
npm run build
```

El resultado queda en `dist`, listo para desplegarse en Vercel u otro servicio compatible con sitios estaticos.

## Documentacion adicional

La guia de arquitectura esta disponible en:

```text
docs/arquitectura.md
```
