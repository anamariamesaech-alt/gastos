import { useLocation } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Header from "./features/layout/components/Header";
import Footer from "./features/layout/components/Footer";

const AUTH_ROUTES = ["/auth/iniciar", "/auth/registro", "/auth/olvide-contrasena"];

function App() {
  const location = useLocation();
  const isAuth = AUTH_ROUTES.includes(location.pathname);

  return (
    <>
      <Header />
      <div style={{ paddingTop: isAuth ? '64px' : '64px' }}>
        <AppRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;