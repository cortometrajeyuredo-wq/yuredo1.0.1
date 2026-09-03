# Yuredo

Sitio web oficial del proyecto **Yuredo**, una experiencia digital creada para presentar el cortometraje, su universo narrativo, el territorio del Vaupes, la etno-ornitologia, el semillero Motmot, relatos magicos, material audiovisual y el equipo que participa en su realizacion.

El repositorio contiene una aplicacion web desarrollada con React, TypeScript y Vite. Esta pensada para publicarse como un sitio estatico en Vercel y para servir como punto de consulta, difusion y navegacion del contenido asociado al proyecto.

## Sitio publicado

El proyecto esta desplegado en Vercel:

https://yuredo1-0-1.vercel.app/

## Que es este proyecto

Yuredo es una propuesta audiovisual y educativa que conecta memoria, territorio, biodiversidad y narracion. El sitio web funciona como una vitrina digital del proyecto: permite ver piezas audiovisuales, recorrer secciones tematicas, consultar recursos visuales y conocer a las personas que hacen parte de la produccion.

Para una persona no tecnica, este repositorio puede entenderse como la carpeta principal donde se guarda todo lo necesario para que el sitio exista: textos, imagenes, videos, componentes visuales, configuracion y documentacion.

Para una persona tecnica, este repositorio es una aplicacion frontend construida con Vite, React Router, CSS Modules y estado global puntual con Zustand.

## Publico objetivo

- Personas interesadas en el cortometraje Yuredo.
- Equipo de produccion, comunicacion y contenidos del proyecto.
- Colaboradores que necesiten actualizar imagenes, textos, videos o secciones.
- Desarrolladores encargados de mantener, ejecutar o desplegar el sitio.
- Jurados, aliados, instituciones o visitantes que quieran conocer el alcance del proyecto.

## Contenido principal del sitio

- **Inicio**: presenta la identidad visual de Yuredo, el teaser local y el trailer incrustado desde YouTube.
- **Motmot**: muestra contenido del semillero y recursos relacionados con el proceso creativo y formativo.
- **Etno-ornitologia**: integra contenidos asociados al territorio, las aves y el enfoque etnico.
- **Podcast**: presenta una coleccion de aves del Vaupes con imagen, nombre, titulo y descripcion.
- **Yuredo**: seccion dedicada al cortometraje y a su presencia audiovisual.
- **Equipo**: muestra integrantes, roles y avatares del equipo del proyecto.

## Tecnologias utilizadas

- **React**: biblioteca principal para construir la interfaz.
- **TypeScript**: lenguaje usado para tipar componentes, datos y estructura del codigo.
- **Vite**: herramienta de desarrollo, compilacion y servidor local.
- **React Router**: manejo de rutas internas de la aplicacion.
- **Zustand**: manejo de estados globales ligeros, por ejemplo audio o interfaz.
- **CSS Modules**: estilos encapsulados por componente o seccion.
- **ESLint**: analisis estatico para mantener calidad y consistencia del codigo.

## Requisitos para ejecutar el proyecto

Antes de trabajar con el proyecto se necesita tener instalado:

- Node.js
- npm
- Git

Para verificar si ya estan disponibles:

```bash
node --version
npm --version
git --version
```

## Instalacion

Clona el repositorio:

```bash
git clone https://github.com/cortometrajeyuredo-wq/yuredo1.0.1.git
```

Entra a la carpeta del proyecto:

```bash
cd yuredo1.0.1
```

Instala las dependencias:

```bash
npm install
```

## Ejecucion en desarrollo

Levanta el servidor local de Vite:

```bash
npm run dev
```

La terminal mostrara una URL local. Normalmente es:

```text
http://localhost:5173/
```

Abre esa direccion en el navegador para ver el sitio mientras haces cambios.

## Scripts disponibles

| Comando | Uso |
| --- | --- |
| `npm run dev` | Inicia el servidor local de desarrollo. |
| `npm run build` | Compila la aplicacion para produccion en la carpeta `dist`. |
| `npm run preview` | Sirve localmente la version compilada para revisarla antes de desplegar. |
| `npm run lint` | Ejecuta ESLint sobre el codigo del proyecto. |

## Flujo recomendado de trabajo

1. Actualizar la rama local antes de editar:

```bash
git pull origin afmarquinhos
```

2. Instalar dependencias si es la primera vez:

```bash
npm install
```

3. Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

4. Hacer los cambios necesarios en `src` o `public/static`.

5. Revisar el proyecto en el navegador.

6. Ejecutar validaciones:

```bash
npm run lint
npm run build
```

7. Crear commit y subir cambios:

```bash
git add .
git commit -m "descripcion del cambio"
git push origin afmarquinhos
```

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

## Descripcion de carpetas

- `docs/`: documentacion interna del proyecto. Incluye la guia de arquitectura.
- `public/static/`: archivos publicos servidos directamente por el navegador.
- `public/static/audio-player/`: audios usados por componentes del sitio.
- `public/static/avatares/`: imagenes SVG de los integrantes del equipo.
- `public/static/files/`: archivos descargables, como cartillas o recursos comprimidos.
- `public/static/img/`: imagenes por seccion, fondos, logos e iconos.
- `public/static/redes-sociales/`: iconos de redes sociales.
- `public/static/video/`: videos usados directamente por el sitio.
- `src/components/`: componentes reutilizables de interfaz.
- `src/data/`: datos estructurados que alimentan secciones, como aves, equipo o contenidos del semillero.
- `src/hooks/`: hooks personalizados para comportamiento visual e interaccion.
- `src/page/`: paginas y secciones principales del sitio.
- `src/store/`: estados globales manejados con Zustand.

## Rutas y navegacion

La aplicacion usa React Router. Actualmente la ruta principal es:

```text
/
```

El componente `src/Aplicacion.tsx` define la estructura de rutas y carga la plantilla general. La pagina de inicio se encuentra en:

```text
src/page/inicio/index.tsx
```

Dentro de esa pagina se orquestan las secciones principales del sitio.

## Manejo de imagenes, videos y archivos

Los recursos publicos se guardan en `public/static`. Al estar dentro de `public`, se pueden referenciar desde los componentes usando rutas absolutas desde la raiz del sitio.

Ejemplo:

```tsx
<img src="/static/img/globales/logotipoYuredo.webp" alt="Logotipo Yuredo" />
```

Para mantener el rendimiento del sitio:

- Usar imagenes optimizadas.
- Preferir formato `webp` cuando aplique.
- Mantener nombres descriptivos y relacionados con la seccion.
- Evitar subir archivos pesados si no son necesarios.
- Ubicar cada recurso en la carpeta correspondiente.

## Datos editables

Algunos contenidos del sitio se controlan desde archivos dentro de `src/data`.

Ejemplos:

- `src/data/aves.ts`: informacion de aves mostradas en la seccion Podcast.
- `src/data/equipo.ts`: integrantes, roles y avatares del equipo.
- `src/data/etno.ts`: contenidos asociados a la seccion de etno-ornitologia.
- `src/data/semillero.ts`: informacion del semillero Motmot.

Para modificar textos repetidos, tarjetas o listados, primero revisa si el contenido esta en `src/data` antes de cambiar directamente un componente.

## Componentes principales

- `components/plantilla`: estructura base de la aplicacion.
- `components/encabezado`: navegacion o encabezado del sitio.
- `components/audio-modal`: experiencia modal relacionada con audio.
- `components/estrellas-fondo`: fondo visual con estrellas.
- `components/social-float`: accesos flotantes a redes sociales.
- `components/video-con-play`: componente para video con control de reproduccion.

## Convenciones del proyecto

El proyecto sigue las pautas descritas en `docs/arquitectura.md`:

- Usar espanol en nombres, comentarios y documentacion cuando sea posible.
- Usar `camelCase` para variables y funciones.
- Usar nombres descriptivos para componentes, datos, funciones y modulos.
- Separar responsabilidades entre componentes, datos, hooks y estado global.
- Usar CSS Modules para estilos por componente o seccion.
- Evitar estilos globales innecesarios.
- Guardar recursos estaticos en `public/static`.
- Optimizar imagenes antes de subirlas al repositorio.
- Trabajar con Git y GitHub para control de versiones.

## Compilacion para produccion

Para generar una version lista para despliegue:

```bash
npm run build
```

Vite generara la carpeta:

```text
dist/
```

Esa carpeta contiene los archivos finales optimizados para produccion.

## Revision previa al despliegue

Despues de compilar, se puede revisar la version generada:

```bash
npm run preview
```

Esto levanta una vista local de la carpeta `dist`.

## Despliegue

El sitio esta preparado para desplegarse en Vercel. El flujo habitual es:

1. Subir los cambios a GitHub.
2. Vercel detecta el nuevo commit.
3. Vercel ejecuta el proceso de build.
4. La version publicada queda disponible en la URL del proyecto.

Configuracion esperada para Vercel:

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

## Solucion de problemas comunes

### `npm install` falla

Revisa que Node.js y npm esten instalados correctamente:

```bash
node --version
npm --version
```

Si el problema persiste, elimina `node_modules` y vuelve a instalar dependencias.

### El sitio no abre en local

Verifica que el servidor este corriendo:

```bash
npm run dev
```

Tambien revisa que estes abriendo la URL que aparece en la terminal.

### Las imagenes no cargan

Confirma que el archivo exista dentro de `public/static` y que la ruta usada en el componente empiece con `/static/`.

### El build falla

Ejecuta:

```bash
npm run lint
npm run build
```

Lee el mensaje de error de la terminal. Normalmente indica el archivo y la linea que deben corregirse.

## Documentacion adicional

La guia de arquitectura esta disponible en:

```text
docs/arquitectura.md
```

## Estado del repositorio

- Nombre del paquete: `yuredo`
- Version: `1.0.1`
- Tipo de proyecto: aplicacion frontend
- Entorno de produccion: Vercel
- Rama de trabajo usada en este repositorio: `afmarquinhos`
