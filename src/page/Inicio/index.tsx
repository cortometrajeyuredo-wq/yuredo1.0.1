/**
 * @módulo Inicio
 * @descripción Página principal (Landing Page) que orquesta todas las secciones del proyecto.
 * Activa el sistema scroll-reveal global que anima los elementos `.reveal` al entrar al viewport.
 * @arquitectura src/page/Inicio/index.tsx
 */

import useScrollReveal from '@/hooks/useReveladoScroll';

import SeccionInicio from './SeccionInicio';
import SeccionMotMot from './SeccionMotMot';
import SeccionYuredo from './SeccionYuredo';
import SeccionEtno from './SeccionEtno';
import SeccionMuseo from './SeccionMuseo';
import SeccionEquipo from './SeccionEquipo';

const Inicio = () => {
    useScrollReveal();

    return (
        <div>
            <SeccionInicio />
            <SeccionMotMot />
            <SeccionYuredo />
            <SeccionEtno />
            <SeccionMuseo />
            <SeccionEquipo />
            <div id="fin-pagina" style={{ height: '1px', width: '100%' }} />
        </div>
    );
};

export default Inicio;
