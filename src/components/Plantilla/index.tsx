/**
 * @módulo Plantilla
 * @descripción Componente de diseño (Layout) que envuelve las páginas y contiene los elementos fijos.
 * @arquitectura src/components/Plantilla/index.tsx
 */

import { Outlet } from 'react-router-dom';
import Encabezado from '@/components/Encabezado';
import SocialFloat from '@/components/SocialFloat';
import AudioModal from '@/components/AudioModal';
import useEspiaScroll from '@/hooks/useEspiaScroll';
import styles from './Plantilla.module.css';

const Plantilla = () => {
    // Activar el espía de scroll globalmente para detectar la sección activa
    useEspiaScroll();

    return (
        <div className={styles.plantilla}>
            <Encabezado />
            <SocialFloat />
            <AudioModal />
            <main className={styles.contenidoPrincipal}>
                <Outlet />
            </main>
        </div>
    );
};

export default Plantilla;
