import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import styles from "./SeccionPodcast.module.css";
import useDeslizadorSimple from "@/hooks/useDeslizadorSimple";
import useBloqueoScroll from "@/hooks/useBloqueoScroll";
import { aves, type Ave } from "@/data/aves";
import EstrellasFondo from "@/components/estrellas-fondo";
import VideoConPlay from "@/components/video-con-play";
const SeccionPodcast = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [aveSeleccionada, setAveSeleccionada] = useState<Ave | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const manejarResize = () => setIsMobile(window.innerWidth <= 768);
    manejarResize();
    window.addEventListener("resize", manejarResize);
    return () => window.removeEventListener("resize", manejarResize);
  }, []);
  const deslizador = useDeslizadorSimple({
    totalDiapositivas: aves.length,
    diapositivasVisibles: 1,
    bucle: true,
  });
  useBloqueoScroll(isModalOpen);
  const abrirModal = useCallback((ave: Ave) => {
    setAveSeleccionada(ave);
    setIsModalOpen(true);
  }, []);
  const cerrarModal = useCallback(() => {
    setIsModalOpen(false);
    setAveSeleccionada(null);
  }, []);
  useEffect(() => {
    const manejarTecla = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) cerrarModal();
    };
    document.addEventListener("keydown", manejarTecla);
    return () => document.removeEventListener("keydown", manejarTecla);
  }, [isModalOpen, cerrarModal]);
  return (
    <section className={styles.section5} id="podcast">
      <EstrellasFondo
        cantidad={50}
        leftMin={10}
        leftMax={90}
        className={styles.estrellasFondo}
      />
      <div className={styles.dianas}>
        <img
          src="/static/img/seccion-podcast/dianas-podcast.webp"
          className={styles.dianas_desktop}
          alt=""
        />
        <img
          src="/static/img/seccion-podcast/liana-sect-podcast.svg"
          className={styles.liana_mobile}
          alt="Liana decorative"
        />
        <img
          src="/static/img/seccion-podcast/palmera-sect-podcast-der.svg"
          className={styles.palmera_mobile}
          alt="Palmera decorative"
        />
      </div>
      <div className={styles.contenedor_section5_1}>
        <div className={styles.vacio_logo_sect5}></div>
        <img
          className={styles.estrellas_arriba_sect5}
          src="/static/img/seccion-podcast/star-sect-podcast-arriba.svg"
          alt=""
        />
      </div>
      <div className={styles.contenedor_section5_2}>
        <div className={styles.texto_sect5}>
          <h2>
            Podcast Aves <span className={styles.vaupesTexto}>Vaupés</span>
          </h2>
        </div>
      </div>
      <div className={styles.contenedor_section5_3}>
        <div className={styles.contenedor_vacio_sect5}>
          <img src="/static/img/seccion-podcast/star-sect-podcast-izq.svg" alt="" />
        </div>
        <div className={styles.contenedor_sect5_video}>
          <VideoConPlay
            id="videoPlayerPodcast"
            src="/static/video/colombia-nativa.mp4"
          />
        </div>
        <div className={styles.txt_sect5}>
          <h5>
            <strong>"Embárcate en un viaje mágico"</strong><br />
            En cada podcast, las aves del Vaupés susurran sus secretos. Déjate
            envolver por relatos llenos de encanto y descubre un mundo donde el
            canto y la leyenda se encuentran. ¡Escucha ahora!.
          </h5>
        </div>
      </div>
      <div className={styles.contenedor_section5_4}>
        <div className={styles.izquierdo_sect5}>
          <img
            src="/static/img/seccion-podcast/nebulosa.svg"
            alt="Nebulosa"
            className={styles.nebulosa_sect5}
          />
        </div>
        <button className={styles.prev_central} onClick={deslizador.anterior}>
          &#10094;
        </button>
        <div className={styles.central_sect5_4}>
          <div className={styles.slider_circular_container}>
            {aves.map((ave, idx) => {
              const total = aves.length;
              const activeIdx = deslizador.indice;
              let diff = idx - activeIdx;
              if (diff > total / 2) diff -= total;
              else if (diff < -total / 2) diff += total;

              const maxVisibles = isMobile ? 1 : 3;
              const isVisible = diff >= 0 && diff <= maxVisibles;
              const style: React.CSSProperties = {
                transform: `translateX(${diff * 100}%)`,
                opacity: isVisible ? 1 : 0,
                zIndex: isVisible ? 5 : 1,
                pointerEvents: isVisible ? "auto" : "none",
                position: "absolute",
              };
              return (
                <div
                  key={ave.src}
                  className={styles.bird_slide}
                  style={style}
                  onClick={() => abrirModal(ave)}
                >
                  <img src={ave.src} alt={ave.titulo} />
                </div>
              );
            })}
          </div>
        </div>
        <button className={styles.next_central} onClick={deslizador.siguiente}>
          &#10095;
        </button>
        <div className={styles.derecho_sect5}>
          <a
            href="https://open.spotify.com/show/3XNk2BpPECiEQ7e1fE2I5E"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.btn_saber}
              src="/static/redes-sociales/spotify.svg"
              alt="Spotify"
            />
          </a>
        </div>
      </div>
      {}
      {isModalOpen && createPortal(
        <div
          className={`${styles.modal_sect5} ${isModalOpen ? styles.active : ""}`}
          onClick={cerrarModal}
        >
          <div
            className={styles.modal_content_sect5}
            onClick={(e) => e.stopPropagation()}
          >
            <span className={styles.close_modal_sect5} onClick={cerrarModal}>
              &times;
            </span>
            <div className={styles.list}>
              {aveSeleccionada && (
                <div className={styles.item}>
                  <div className={styles.img_container}>
                    <img src={aveSeleccionada.src} alt={aveSeleccionada.titulo} />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.title}>{aveSeleccionada.titulo}</div>
                    <div className={styles.topic}>{aveSeleccionada.nombre}</div>
                    <div className={styles.des}>
                      {aveSeleccionada.descripcion}
                    </div>
                    <div className={styles.btn}>
                      <a
                        href="https://repositorio.sena.edu.co/handle/11404/7547"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.btn_saber_mas}
                      >
                        Saber más
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};
export default SeccionPodcast;
