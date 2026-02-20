import { Routes, Route } from 'react-router-dom';
import Plantilla from '@/components/Plantilla';
import Inicio from '@/page/Inicio';

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