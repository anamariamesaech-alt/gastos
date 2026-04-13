import { Routes, Route } from 'react-router-dom';

import Home from './features/layout/pages/Home';
import ApiPage from './features/layout/pages/ApiPage';

//  AUTH
import Iniciar from './features/auth/Pages/Iniciar';
import Registrar from './features/auth/Pages/Registrar';
import OlvideContrasena from './features/auth/Pages/OlvideContrasena';

//  DASHBOARD
import Dashboard from './features/dashboard/pages/Dashboard';

const AppRoutes = () => {
  return (
    <Routes>

      {/* HOME */}
      <Route path="/" element={<Home />} />

      {/* API */}
      <Route path="/api" element={<ApiPage />} />

      {/* AUTH */}
      <Route path="/auth/iniciar" element={<Iniciar />} />
      <Route path="/auth/registro" element={<Registrar />} />
      <Route path="/auth/olvide-contrasena" element={<OlvideContrasena />} />

      {/* DASHBOARD */}
      <Route path="/dashboard" element={<Dashboard />} />

    </Routes>
  );
};

export default AppRoutes;