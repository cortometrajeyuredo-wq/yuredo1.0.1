/**
 * @módulo Etno
 * @descripción Datos de las cartillas de Etno-Ornitología del Vaupés.
 * @arquitectura src/data/etno.ts
 */

/**
 * Define la estructura de una cartilla educativa.
 */
export interface CartillaEtno {
    /** Título de la edición */
    titulo: string;
    /** Resumen del contenido */
    descripcion: string;
    /** URL al repositorio del SENA */
    enlace: string;
}

/**
 * Publicaciones de la colección "Entre plumajes, sonidos y colores".
 */
export const cartillasEtno: CartillaEtno[] = [
    {
        titulo: 'Vaupés, entre plumajes, sonidos y colores V1',
        descripcion: 'La primera edición que da vida al proyecto. Aquí comienzan los relatos de las etnias y sus aves, un viaje a la raíz de la cultura indígena del Vaupés',
        enlace: 'https://repositorio.sena.edu.co/handle/11404/5387',
    },
    {
        titulo: 'Vaupés, entre plumajes, sonidos y colores V2',
        descripcion: 'Con cada página, esta edición nos envuelve en las historias de las aves y los pueblos del Vaupés, un viaje donde tradición y naturaleza se entrelazan en perfecta armonía.',
        enlace: 'https://repositorio.sena.edu.co/handle/11404/5706',
    },
    {
        titulo: 'Vaupés, entre plumajes, sonidos y colores V3',
        descripcion: 'Plumajes que hablan, cantos que cuentan… En esta cartilla, las tradiciones indígenas nos guían en un viaje hacia la esencia del Vaupés y sus coloridas aves.',
        enlace: 'https://repositorio.sena.edu.co/handle/11404/7547',
    },
    {
        titulo: 'Guía Fotográfica de Etnoaves',
        descripcion: 'La Guía Fotográfica de Etnoaves es un tributo a la biodiversidad del Vaupés, donde cada ave tiene un nombre y una historia en lengua Pamikamú, conectando el pasado con el presente.',
        enlace: 'https://repositorio.sena.edu.co/handle/11404/5755',
    },
];
