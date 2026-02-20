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

const Plantilla = () => {
    // Activar el espía de scroll globalmente
    useEspiaScroll();

    return (
        <>
            <Encabezado />
            <SocialFloat />
            <AudioModal />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Plantilla;
