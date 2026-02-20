import SeccionInicio from '@/components/SeccionInicio';
import SeccionMotMot from '@/components/SeccionMotMot';
import SeccionYuredo from '@/components/SeccionYuredo';
import SeccionEtno from '@/components/SeccionEtno';
import SeccionMuseo from '@/components/SeccionMuseo';
import SeccionEquipo from '@/components/SeccionEquipo';

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
