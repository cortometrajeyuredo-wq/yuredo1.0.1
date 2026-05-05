/**
 * @módulo Aves
 * @descripción Datos de las aves del Podcast Virtual de Aves del Vaupés.
 * @arquitectura src/data/aves.ts
 */

/**
 * Representa una especie de ave en el podcast.
 */
export interface Ave {
    /** Ruta de la imagen del ave */
    src: string;
    /** Nombre científico o título de la ficha */
    titulo: string;
    /** Nombre común o poético */
    nombre: string;
    /** Breve reseña descriptiva */
    descripcion: string;
}

/**
 * Colección de aves mostradas en la sección Podcast.
 */
export const aves: Ave[] = [
    {
        src: '/static/img/seccion-podcast/motmot-aves-01.webp',
        titulo: 'Chelidoptera Tenebrosa',
        nombre: 'Guardiana de las Sombras',
        descripcion: 'Con su plumaje oscuro y su vuelo sigiloso, la Chelidoptera tenebrosa surca los rincones más sombríos del Vaupés. En cada avistamiento, esta ave nos recuerda la magia escondida en la penumbra de la selva',
    },
    {
        src: '/static/img/seccion-podcast/motmot-aves-02.webp',
        titulo: 'Galbula Leucogastra',
        nombre: 'Flecha de Esmeralda',
        descripcion: 'Brillante y elegante, la Galbula leucogastra atraviesa los cielos con destellos verdes y blancos, como una flecha esmeralda en movimiento. Sus colores capturan la luz de la selva, trayendo vida a cada rincón que toca.',
    },
    {
        src: '/static/img/seccion-podcast/motmot-aves-03.webp',
        titulo: 'Jacamerops Aureus',
        nombre: 'Destello Dorado de la Selva',
        descripcion: 'La Jacamerops aureus, con su plumaje dorado, ilumina su entorno como un rayo de sol en la sombra. Su canto profundo resuena en la selva, como un eco antiguo que conecta la tierra y el cielo.',
    },
    {
        src: '/static/img/seccion-podcast/motmot-aves-04.webp',
        titulo: 'Nonnula Rubecula',
        nombre: 'Eco de los Arbustos',
        descripcion: 'Pequeña y discreta, la Nonnula rubecula se mueve entre los arbustos como un eco suave. Su presencia tranquila nos enseña a valorar la belleza en los detalles más sutiles y silenciosos de la naturaleza.',
    },
    {
        src: '/static/img/seccion-podcast/motmot-aves-05.webp',
        titulo: 'Monasa Nigrifrons',
        nombre: 'Centinela del Atardecer',
        descripcion: 'Con su pico imponente y su mirada atenta, la Monasa nigrifrons observa la selva desde las alturas. Al atardecer, su silueta se convierte en el guardián de la luz que se desvanece.',
    },
    {
        src: '/static/img/seccion-podcast/motmot-aves-06.webp',
        titulo: 'Phaethornis Superciliosus',
        nombre: 'Viajero de las Flores',
        descripcion: 'Veloz y delicado, el Phaethornis superciliosus danza entre las flores buscando el néctar de la vida. Su vuelo incansable es un tributo a la energía y vitalidad de la selva del Vaupés.',
    },
    {
        src: '/static/img/seccion-podcast/motmot-aves-07.webp',
        titulo: 'Florisuga Mellivora',
        nombre: 'Joyel de los Aires',
        descripcion: 'El Florisuga mellivora resplandece como una joya en el aire. Sus colores vibrantes y su agilidad lo convierten en uno de los espectáculos más hermosos de nuestra rica biodiversidad.',
    },
    {
        src: '/static/img/seccion-podcast/motmot-aves-08.webp',
        titulo: 'Polytmus Guainumbi',
        nombre: 'Relámpago de los Humedales',
        descripcion: 'Encontrado cerca de las aguas, el Polytmus guainumbi brilla como un relámpago verde. Su conexión con los humedales nos recuerda la importancia del agua para toda la vida en el Vaupés.',
    },
    {
        src: '/static/img/seccion-podcast/motmot-aves-09.webp',
        titulo: 'Topaza Pella',
        nombre: 'Rey de los Colibríes',
        descripcion: 'Majestuoso y único, el Topaza pella es el rey de los cielos del Vaupés. Sus plumas iridiscentes y su cola larga son símbolos de la exuberancia y majestuosidad de nuestra tierra.',
    },
    {
        src: '/static/img/seccion-podcast/motmot-aves-10.webp',
        titulo: 'Chlorostilbon Mellisugus',
        nombre: 'Esmeralda de los Jardines',
        descripcion: 'Pequeño pero vibrante, el Chlorostilbon mellisugus es la esmeralda que adorna nuestros jardines. Su presencia constante es un recordatorio de que la naturaleza siempre está cerca de nosotros.',
    },
    {
        src: '/static/img/seccion-podcast/motmot-aves-11.webp',
        titulo: 'Thalurania Furcata',
        nombre: 'Príncipe de la Selva',
        descripcion: 'Con su corona de colores y su porte elegante, la Thalurania furcata es el príncipe de la selva profunda. En cada rincón donde vuela, deja una estela de misterio y belleza.',
    },
];
