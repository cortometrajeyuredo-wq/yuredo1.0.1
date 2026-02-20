import { Outlet } from 'react-router-dom';
import Encabezado from './Encabezado';
import SocialFloat from './SocialFloat';
import AudioModal from './AudioModal';
import useScrollSpy from '../hooks/useScrollSpy';

const Plantilla = () => {
    // Activar el espía de scroll globalmente
    useScrollSpy();

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
