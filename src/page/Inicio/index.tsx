/**
 * @módulo Inicio
 * @descripción Página principal (Landing Page) que orquesta todas las secciones del proyecto.
 * Activa el sistema scroll-reveal global que anima los elementos `.reveal` al entrar al viewport.
 * @arquitectura src/page/inicio/index.tsx
 */

import useScrollReveal from '@/hooks/useReveladoScroll';

import SeccionInicio from './seccion-inicio';
import SeccionMotMot from './seccion-motmot';
import SeccionYuredo from './seccion-yuredo';
import SeccionEtno from './seccion-etno';
import SeccionMuseo from './seccion-museo';
import SeccionCasosExito from './seccion-casos-exito';
import SeccionEquipo from './seccion-equipo';

const Inicio = () => {
    useScrollReveal();

    return (
        <div>
            <SeccionInicio />
            <SeccionMotMot />
            <SeccionEtno />
            <SeccionMuseo />
            <SeccionYuredo />
            <SeccionCasosExito />
            <SeccionEquipo />
            <div id="fin-pagina" style={{ height: '1px', width: '100%' }} />
        </div>
    );
};

export default Inicio;
