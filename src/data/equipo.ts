/**
 * @módulo Equipo
 * @descripción Datos de los miembros del equipo del proyecto Yuredo.
 * @arquitectura src/data/equipo.ts
 */

/**
 * Representa a un integrante del equipo de producción.
 */
export interface MiembroEquipo {
    /** Identificador único */
    id: string;
    /** Nombre completo */
    nombre: string;
    /** Cargo o función en el proyecto */
    rol: string;
    /** Nombre del archivo de avatar en /static/avatares/ */
    avatar: string;
}

/**
 * Lista completa de colaboradores del proyecto.
 */
export const equipoYuredo: MiembroEquipo[] = [
    { id: 'gloria', nombre: 'Gloria Rivera', rol: 'Investigadora líder de Enfoque Étnico', avatar: 'sra-gloria.svg' },
    { id: 'leonardo', nombre: 'Leonardo Huertas Bernal', rol: 'Director', avatar: 'profe-leonardo-bernal.svg' },
    { id: 'luis', nombre: 'Luis Enrique Salcedo', rol: 'Technical Director 3d', avatar: 'profe-luis-salcedo.svg' },
    { id: 'enrique', nombre: 'Luis Enrrique Llanos', rol: 'Sabedor Tradicional Pamiwa', avatar: 'luis-enrique-llanos.svg' },
    { id: 'ivonne', nombre: 'Ivonne Espindola', rol: 'VFX y Animación', avatar: 'profe-ivonne-espindola.svg' },
    { id: 'fabian', nombre: 'Fabián Rodriguez', rol: 'Traductor de lengua Pamie', avatar: 'fabian-rodriguez-traductor.svg' },
    { id: 'yenifer', nombre: 'Yenifer Lopez', rol: 'Investigador Junior', avatar: 'yenifer-lopez.svg' },
    { id: 'angelica', nombre: 'Angelica Beltran', rol: 'Animador 3D', avatar: 'angelica-beltran.svg' },
    { id: 'cristina', nombre: 'Cristina Arce Nieto', rol: 'Animador 3D', avatar: 'cristina-arce.svg' },
    { id: 'daniel-f', nombre: 'Daniel Felipe Galindo', rol: 'Animador 3D', avatar: 'daniel-galindo.svg' },
    { id: 'daniel-r', nombre: 'Daniel Ricardo Ocampo', rol: 'Animador 3D y Artista Conceptual', avatar: 'daniel-ocampo.svg' },
    { id: 'felipe', nombre: 'Felipe Cortez', rol: 'Dinamizador SENNOVA Vaupés', avatar: 'edgar-felipe-co.svg' },
    { id: 'jhonge', nombre: 'Jhon Gerardo Plazas', rol: 'Desarrollador Web, Multimedia y Software', avatar: 'jhon-gerardo.svg' },
    { id: 'iohann', nombre: 'Iohann Vargas', rol: 'Animador 3D', avatar: 'iohann-vargas.svg' },
    { id: 'jorge', nombre: 'Jorge Luis Bolaños', rol: 'Diseño visual Publicidad y Marketing', avatar: 'jorge-bolaños.svg' },
    { id: 'leiner', nombre: 'Leiner Barros Agamez', rol: 'Diserrollo Publicitario y Sonoro', avatar: 'leiner-barros.svg' },
    { id: 'luisa', nombre: 'Luisa Fernanda Rodriguez', rol: 'Animador 3D', avatar: 'luisa-rodriguez.svg' },
    { id: 'nicolas', nombre: 'Nicolas Andrés Ramirez', rol: 'Animador 3D', avatar: 'nicolas-ramirez.svg' },
    { id: 'nubia', nombre: 'Nubia Esperanza Bonilla', rol: 'Diserrollo Publicitario', avatar: 'nubia-bocanegra.svg' },
    { id: 'sharyk', nombre: 'Sharyk Sofia Gómez', rol: 'Desarrolladora Web y Multimedia', avatar: 'sharick.svg' },
    { id: 'sara', nombre: 'Sara Lucia Acosta', rol: 'Diseño Gráfico y Asistente de producción', avatar: 'sara-acosta.svg' },
    { id: 'sebastian', nombre: 'Sebastian Guerrero', rol: 'Biólogo', avatar: 'sebastian-guerrero.svg' },
];
