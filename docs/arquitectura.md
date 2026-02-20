
# Guía de Arquitectura del Proyecto

## 1. Generales
- Idioma: Español para todo el código: declaración de páginas, componentes, varibles, funciones y comentarios.

## 2. Estructura de Carpetas
- /src: Código fuente.
- /src/page: Páginas de navegación (inicio, etc).
- /src/components: Componentes reutilizables o globales organizados en subcarpetas.
- /src/hooks: Funciones lógicas reutilizables (Custom Hooks) como sliders y scroll.
- /src/data: Almacena datos estáticos tipados (.ts).
- /src/store: Estados globales (Zustand).
- /docs: Documentación técnica.
- /dist: Archivos compilados para producción (se genera automáticamente).

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
- Entorno de desarrollo: `npm run dev` / Vite.
- Entorno de producción (Vercel): Se despliega el contenido de la carpeta `/dist` generado por `npm run build`.

## 8. Control de Versiones
- Uso de Git y GitHub
- Rama principal: main.
- Nunca escribir código sobre la rama principal.

## 8. Estilización
- Tailwind + modulos de css.
- Los nombres de los módulos deben ser dicentes, y nunca manejar un modulo global.

## 9. Estados globales (si aplica)
- Zustand