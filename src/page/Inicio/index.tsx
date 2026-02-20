/**
 * @módulo Inicio
 * @descripción Página principal (Landing Page) que orquesta todas las secciones del proyecto.
 * @arquitectura src/page/Inicio/index.tsx
 */

import SeccionInicio from './SeccionInicio';
import SeccionMotMot from './SeccionMotMot';
import SeccionYuredo from './SeccionYuredo';
import SeccionEtno from './SeccionEtno';
import SeccionMuseo from './SeccionMuseo';
import SeccionEquipo from './SeccionEquipo';

const Inicio = () => {
    return (
        <div>
            {/* Secciones del Landing Page */}
            <SeccionInicio />
            <SeccionMotMot />
            <SeccionYuredo />
            <SeccionEtno />
            <SeccionMuseo />
            <SeccionEquipo />
        </div>
    );
};

export default Inicio;
