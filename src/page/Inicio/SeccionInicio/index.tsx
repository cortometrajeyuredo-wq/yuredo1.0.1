/**
 * @módulo SeccionInicio
 * @descripción Sección de bienvenida con el título principal y el teaser animado del proyecto.
 * @arquitectura src/page/Inicio/SeccionInicio/index.tsx
 */

import styles from './SeccionInicio.module.css';

const SeccionInicio = () => {
    return (
        <section className={styles.section1} id="inicio">
            {/* Fondos */}
            <img className={styles['fondo-bajo-sect1']} src="/static/img/fondo1.png" alt="" />
            <div className={styles.dianas}>
                <img src="/static/img/dianas.svg" alt="" />
            </div>

            {/* Contenedores de Layout */}
            <div className={styles['contenedor-section1_1']}></div>

            <div className={styles['contenedor-section1_2']}>
                <img src="/static/img/logo-yuredo.webp" alt="Logo Yuredo" />
            </div>

            <div className={styles['contenedor-section1_3']}>
                <h2>El despertar de los Mimiwas</h2>
            </div>

            <div className={styles['contenedor-section1_4']}></div>

            <div className={styles['contenedor-section1_5']}>
                <div className={styles['contenedor-izquierdo-sect1']}>
                    {/* Espacio izquierdo */}
                </div>

                <div className={styles['contenedor-central-sect1']}>
                    {/* Video Player */}
                    <video id="videoPlayer" preload="auto" controls>
                        <source src="/static/video/Teaser Yuredo 2024.mp4" type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                    </video>
                </div>

                <div className={styles['contenedor-derecho-sect1']}>
                    <div className={styles['flor-sect1']}>
                        <img src="/static/img/flower-amarilla.png" alt="" />
                    </div>
                    <div className={styles.star}>
                        <img src="/static/img/star-sect-derecho.svg" alt="" />
                    </div>
                </div>
            </div>

            <div className={styles['contenedor-section1_6']}>
                <div className={styles.nebulosa}>
                    <svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 182.82 127.68">
                        <defs>
                            <filter id="outer-glow-1" filterUnits="userSpaceOnUse">
                                <feOffset dx="0" dy="0" />
                                <feGaussianBlur result="blur" stdDeviation="9.75" />
                                <feFlood floodColor="#b5e3f5" floodOpacity=".7" />
                                <feComposite in2="blur" operator="in" />
                                <feComposite in="SourceGraphic" />
                            </filter>
                        </defs>
                        <g id="ELEMENTS" filter="url(#outer-glow-1)">
                            <g>
                                <path className={styles.blue}
                                    d="M83.78,15.17c9.13,3.89,18.53,8.61,27.94,14.14,47.9,28.17,77.64,66.46,66.42,85.53-9.01,15.33-41.73,13.57-79.1-2.33-9.13-3.88-18.54-8.62-27.94-14.14C23.2,70.2-6.53,31.9,4.68,12.83,13.7-2.49,46.41-.74,83.78,15.17M84.68,13.03C45.07-3.83,12.12-4.38,2.69,11.66c-12.04,20.48,17.49,59.44,67.24,88.7,9.29,5.46,18.78,10.27,28.2,14.28,39.61,16.86,72.57,17.41,82,1.38,12.04-20.48-17.49-59.44-67.24-88.7-9.29-5.46-18.78-10.27-28.2-14.28h0Z" />
                                <path className={styles.purple}
                                    d="M87.89,24.32c6.72,2.86,13.66,6.35,20.6,10.43,35.03,20.6,56.84,48.51,48.71,62.33-6.52,11.08-30.31,9.74-57.55-1.85-6.72-2.86-13.66-6.35-20.6-10.43C44.03,64.2,22.22,36.29,30.35,22.47c6.52-11.08,30.31-9.74,57.55,1.85M88.8,22.19c-29.62-12.61-53.35-12.96-60.44-.89-8.91,15.15,12.85,43.92,49.53,65.49,6.88,4.04,13.9,7.6,20.86,10.56,29.62,12.61,53.35,12.96,60.45.89,4.45-7.56,1.48-18.65-8.34-31.22-9.38-11.99-24-24.17-41.19-34.27-6.88-4.04-13.9-7.6-20.87-10.57h0Z" />
                                <path className={styles.yellow}
                                    d="M93.04,63.62c-7.77-4.57-14.6-9.71-19.23-14.47-5.03-5.17-6.86-9.3-5.31-11.93,3.4-5.77,20.58.14,35,8.61,14.43,8.48,27.93,20.63,24.54,26.41-1.55,2.64-6.05,3.03-13.01,1.16-2.81-.76-5.88-1.85-9.1-3.22-4.14-1.76-8.52-3.98-12.89-6.55ZM70.5,38.4c-.71,1.21.22,4.25,4.98,9.14,4.48,4.62,11.14,9.61,18.74,14.08,7.59,4.48,15.21,7.85,21.42,9.54,6.59,1.78,9.7,1.12,10.41-.1,1.69-2.88-6.51-13.12-23.71-23.23-4.5-2.65-8.71-4.75-12.5-6.36-10.7-4.56-18.08-5.2-19.33-3.07Z" />
                                <path className={styles.red}
                                    d="M85.12,76.27c-28.08-16.52-45.37-37.46-39.36-47.67,6.01-10.21,32.71-5.27,60.79,11.23,28.08,16.52,45.37,37.46,39.36,47.67-4.7,7.99-22.07,6.71-42.86-2.14-5.78-2.46-11.82-5.5-17.93-9.09ZM47.75,29.77c-5.17,8.79,12.48,29.17,38.54,44.5,26.06,15.34,52.45,20.85,57.62,12.06,5.17-8.79-12.48-29.17-38.54-44.5-5.86-3.45-11.73-6.39-17.37-8.79-19.48-8.29-36.24-10.08-40.25-3.26Z" />
                            </g>
                        </g>
                    </svg>
                </div>

                <div className={styles['logo-sena']}>
                    <img src="/static/img/logo-sena.webp" alt="SENA" />
                </div>

                <div className={styles['star-bottom']}>
                    <img src="/static/img/star-sect1-bajo.svg" alt="" />
                </div>
            </div>

        </section>
    );
};

export default SeccionInicio;
