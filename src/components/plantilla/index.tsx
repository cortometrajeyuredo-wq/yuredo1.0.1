/**
 * @módulo Plantilla
 * @descripción Componente de diseño (Layout) que envuelve las páginas y contiene los elementos fijos.
 * @arquitectura src/components/plantilla/index.tsx
 */

import { Outlet } from 'react-router-dom';
import Encabezado from '@/components/encabezado';
import SocialFloat from '@/components/social-float';
import AudioModal from '@/components/audio-modal';
import useEspiaScroll from '@/hooks/useEspiaScroll';
import styles from './Plantilla.module.css';

const Plantilla = () => {
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
