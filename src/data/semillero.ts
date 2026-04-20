/**
 * @módulo Semillero
 * @descripción Datos del Semillero de Investigación Amazonian Mot Mot.
 * @arquitectura src/data/semillero.ts
 */

/**
 * Representa un elemento visual o informativo del semillero.
 */
export interface ElementoSemillero {
    /** Ruta de la imagen */
    src: string;
    /** Texto descriptivo (soporta etiquetas HTML como <b>) */
    texto: string;
}

/**
 * Diapositivas mostradas en el slider principal de la sección Mot Mot.
 */
export const slidesSemillero: ElementoSemillero[] = [
    {
        src: '/static/img/seccion-motmot/semllero-principal.webp',
        texto: 'El <b>Semillero de Investigación Amazonian Motmot,</b> nombrado por una de las aves más esquivas del Vaupés, está compuesto por aprendices y egresados del SENA con más de <b>8 años de experiencia.</b> Su objetivo es reconocer las aves desde una perspectiva cultural.',
    },
    {
        src: '/static/img/seccion-motmot/motmot-semillero-01.webp',
        texto: 'Cada expedición es un viaje hacia lo desconocido. Los jóvenes aventureros capturan imágenes y sonidos que guardan la esencia del Vaupés, ayudando a conservar el equilibrio de la vida silvestre.',
    },
    {
        src: '/static/img/seccion-motmot/motmot-semillero-02.webp',
        texto: 'Los jóvenes aprenden a escuchar el lenguaje oculto de la selva. Con sus cuadernos y cámaras, documentan lo que ven y oyen, ayudando a conservar el hábitat de las aves.',
    },
    {
        src: '/static/img/seccion-motmot/motmot-semillero-03.webp',
        texto: 'Cada salida de avistamiento convierte a los jóvenes en custodios del Vaupés. Observan, anotan y aprenden, sumando cada detalle para proteger el futuro de las aves.',
    },
    {
        src: '/static/img/seccion-motmot/motmot-semillero-04.webp',
        texto: 'Equipados con cámaras profesionales y cuadernos de campo, los aprendices recorren el bosque, donde cada trino y cada aleteo revelan un misterio.',
    },
    {
        src: '/static/img/seccion-motmot/motmot-semillero-05.webp',
        texto: 'En sus salidas, los aprendices recorren la selva como los ojos y oídos del Vaupés. Registran cantos y vuelos, descubriendo cada detalle para contribuir al conocimiento.',
    },
];


