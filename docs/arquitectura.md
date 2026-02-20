
# Guía de Arquitectura del Proyecto

## 1. Generales
- Idioma: Español para todo el código: declaración de páginas, componentes, varibles, funciones y comentarios.

## 2. Estructura de Carpetas
- /src: Código fuente.
- /src/page: Paginas de navegación p.e.: HomePage, AboutPage, etc.
- /src/components: p.e.: NavBar, Button, Section
- /src/data: Alamcena datos en array, pe.: equipo.ts, blogs.ts.
- /src/store: Manejar estados
- /docs: Documentación.

## 3. Patrones de Diseño
- Uso de MVC (Modelo-Vista-Controlador).
- Separación de responsabilidades.

## 4. Tecnologías
- Lenguaje: Javascrpit -> Typescript
- Biblioteca: React
- Framework: No
- Base de datos: No Aplica.

## 5. Convenciones de Código
- Nombres de variables: camelCase.
- Nombres de funciones: camelCase.
- Las variables y las funciones deben ser dicientes, es decir, su declaración debe indicar a que referiece o que dato almacena.

## 7. Despliegue
- Entorno de desarrollo: Docker.
- Entorno de producción: Vercel

## 8. Control de Versiones
- Uso de Git y GitHub
- Rama principal: main.
- Nunca escribir código sobre la rama principal.

## 8. Estilización
- Tailwind + modulos de css.
- Los nombres de los módulos deben ser dicentes, y nunca manejar un modulo global.

## 9. Estados globales (si aplica)
- Zustand