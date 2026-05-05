import { useState, useCallback } from 'react';
import styles from './SeccionRelatosMagicos.module.css';
import EstrellasFondo from '@/components/estrellas-fondo';

const relatosMagicosData = [
    { src: '/static/img/globales/logotipoYuredo.webp', preview: 'Aprendiz Destacado' },
    { src: '/static/img/seccion-motmot/motmot-semillero-01.webp', preview: 'Experiencia Vanguardista' },
    { src: '/static/img/seccion-motmot/motmot-semillero-02.webp', preview: 'Emprendimiento Juvenil' }
];

const SeccionRelatosMagicos = () => {
    const [indiceActivo, setIndiceActivo] = useState(0);

    const avanzarSlide = useCallback(() => setIndiceActivo((prev) => (prev + 1) % relatosMagicosData.length), []);
    const retrocederSlide = useCallback(() => setIndiceActivo((prev) => (prev - 1 + relatosMagicosData.length) % relatosMagicosData.length), []);

    return (
        <section className={`${styles.sectionCasos} reveal`} id="relatos-magicos">
            <EstrellasFondo cantidad={30} leftMin={20} leftMax={90} className={styles.estrellasFondo} />

            <div className={styles.contenedor_titulo_sup}>
                <h5>Historias de Aprendices</h5>
            </div>

            <div className={styles.contenedor_titulo_inf}>
                <h3>Relatos Mágicos</h3>
            </div>

            <div className={styles.contenedor_principal}>

                <div className={styles.contenedor_slider}>
                    <div className={styles.slider_carrusel}>
                        {relatosMagicosData.map((elemento, indice) => {
                            let claseElemento = styles.hidden;
                            if (indice === indiceActivo) claseElemento = styles.active;
                            else if (indice === (indiceActivo - 1 + relatosMagicosData.length) % relatosMagicosData.length) claseElemento = styles.prev;
                            else if (indice === (indiceActivo + 1) % relatosMagicosData.length) claseElemento = styles.next;

                            return (
                                <div
                                    key={indice}
                                    className={`${styles.slider_item} ${claseElemento}`}
                                    onClick={() => setIndiceActivo(indice)}
                                >
                                    <div className={styles.slider_img}>
                                        <img src={elemento.src} alt={`Relato Mágico ${indice + 1}`} />
                                    </div>
                                    <div className={styles.slider_caption}>
                                        <span>{elemento.preview}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <button className={styles.control_prev} onClick={retrocederSlide}>&#10094;</button>
                    <button className={styles.control_next} onClick={avanzarSlide}>&#10095;</button>
                </div>

                <div className={styles.contenedor_texto}>
                    <div className={styles.bloque_texto}>
                        <h4>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.”</h4>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Phasellus faucibus scelerisque eleifend donec. Aliquam vestibulum rutrum lorem, in pharetra leo.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SeccionRelatosMagicos;
