/**
 * @módulo App
 * @descripción Punto de entrada principal para el enrutamiento de la aplicación React.
 * @arquitectura src/App.tsx — Define la estructura de rutas mediante React Router.
 */

import { Routes, Route } from 'react-router-dom';
import Plantilla from '@/components/plantilla';
import Inicio from '@/page/inicio';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Plantilla />}>
        <Route index element={<Inicio />} />
      </Route>
    </Routes>
  );
};

export default App;