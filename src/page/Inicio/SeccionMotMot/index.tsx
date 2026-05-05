import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styles from './SeccionMotMot.module.css';
import useBloqueoScroll from '@/hooks/useBloqueoScroll';
import { slidesSemillero } from '@/data/semillero';
import EstrellasFondo from '@/components/EstrellasFondo';
const SeccionMotMot = () => {
    const [indiceActivo, setIndiceActivo] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [indiceModal, setIndiceModal] = useState(0);
    useBloqueoScroll(isModalOpen);
    const avanzarSlide = useCallback(() => setIndiceActivo((prev) => (prev + 1) % slidesSemillero.length), []);
    const retrocederSlide = useCallback(() => setIndiceActivo((prev) => (prev - 1 + slidesSemillero.length) % slidesSemillero.length), []);
    const avanzarModal = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        setIndiceModal((prev) => (prev + 1) % slidesSemillero.length);
    }, []);
    const retrocederModal = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        setIndiceModal((prev) => (prev - 1 + slidesSemillero.length) % slidesSemillero.length);
    }, []);
    useEffect(() => {
        const manejarTecla = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isModalOpen) setIsModalOpen(false);
        };
        document.addEventListener('keydown', manejarTecla);
        return () => document.removeEventListener('keydown', manejarTecla);
    }, [isModalOpen]);
    const abrirModal = (indice: number) => {
        setIndiceModal(indice);
        setIsModalOpen(true);
    };
    return (
        <section className={styles.section2} id="motmot">
            <EstrellasFondo cantidad={60} leftMin={20} leftMax={90} className={styles.estrellasFondo} />
            <div className={`${styles.dianas} ${styles.dianas_desktop}`}>
                <img src="/static/img/seccion2_motmot/dianas_sect2.svg" alt="" />
            </div>
            <div className={styles.contenedor_section2_1}>
                <div className={styles.estrella2_1}>
                    <img src="/static/img/seccion2_motmot/star-2_1.svg" alt="" />
                </div>
                <div className={styles.estrella2_2}>
                    <img src="/static/img/seccion2_motmot/start-2_2.svg" alt="" />
                </div>
                <div className={styles.estrella2_3}>
                    <img src="/static/img/seccion2_motmot/start-2_4.svg" alt="" />
                </div>
            </div>
            <div className={styles.contenedor_section2_3}>
                <h5>Semillero</h5>
            </div>
            <div className={styles.contenedor_section2_2}>
                <h3>Mot Mot</h3>
            </div>
            <div className={styles.fila_intermedia_mobile}>
                <div className={styles.ave_mobile}>
                    <img src="/static/img/seccion2_motmot/aveSec2Responsive.svg" alt="Ave decorativa" />
                </div>
            </div>
            <div className={styles.contenedor_section2_4}>
                <div className={styles.contenedor_slider_sect2}>
                    <div className={styles.sect2_uno}>
                        <div onClick={() => abrirModal(indiceActivo)}>
                            <img src="/static/img/globales/btn-mas-svg.svg" alt="Saber más" />
                        </div>
                    </div>
                        <div className={styles.slider_sect2}>
                            {slidesSemillero.map((elemento, indice) => {
                                let claseElemento = styles.hidden;
                                if (indice === indiceActivo) claseElemento = styles.active;
                                else if (indice === (indiceActivo - 1 + slidesSemillero.length) % slidesSemillero.length) claseElemento = styles.prev;
                                else if (indice === (indiceActivo + 1) % slidesSemillero.length) claseElemento = styles.next;
                                return (
                                    <div
                                        key={indice}
                                        className={`${styles.slider_item_sect2} ${claseElemento}`}
                                        onClick={() => indice === indiceActivo ? abrirModal(indice) : setIndiceActivo(indice)}
                                    >
                                        <div className={styles.slider_img}>
                                            <img src={elemento.src} alt={`Slide ${indice + 1}`} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <button className={styles.control_prev} onClick={retrocederSlide}>&#10094;</button>
                        <button className={styles.control_next} onClick={avanzarSlide}>&#10095;</button>
                </div>
                <div className={styles.sect2_texto}>
                    <h4 dangerouslySetInnerHTML={{ __html: slidesSemillero[indiceActivo].texto }} />
                </div>
                <div className={styles.sect2_vacio}></div>
            </div>
            <div className={styles.palmera_mobile}>
                <img src="/static/img/seccion2_motmot/palmeraSec2Responsive.svg" alt="Palmera decorativa" />
            </div>
            {isModalOpen && createPortal(
                <div className={`${styles.modal_overlay} ${isModalOpen ? styles.modal_active : ''}`} onClick={() => setIsModalOpen(false)}>
                    <button className={styles.close_btn} onClick={() => setIsModalOpen(false)}>&#10006;</button>
                    <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
                        <div className={styles.modal_body}>
                            <div className={styles.modal_image_wrapper}>
                                <img src={slidesSemillero[indiceModal].src} alt="" className={styles.modal_image} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.modal_controls_container} onClick={e => e.stopPropagation()}>
                        <button className={styles.modal_prev} onClick={retrocederModal}>&#10094;</button>
                        <button className={styles.modal_next} onClick={avanzarModal}>&#10095;</button>
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
};
export default SeccionMotMot;
