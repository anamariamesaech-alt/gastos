import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import InputField from "../components/InputField";
import AuthButton from "../components/AuthButton";
import { useAuthForm } from "../hooks/useAuthForm";
import { loginValidations } from "../services/authValidations";

export default function Iniciar() {
  const navigate = useNavigate();

  const { values, errors, touched, handleChange, handleBlur, validate } =
    useAuthForm({ email: "", password: "" }, loginValidations);

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setLoginError("");

    try {
      const res = await fetch("https://gastos-backend-woad.vercel.app/api/auth/iniciar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.msg);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard");
    } catch (err) {
      setLoginError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Bienvenido de vuelta"
      subtitle="Inicia sesión para continuar"
      illustrationLabel="Gestiona tus gastos con inteligencia"
    >
      <form onSubmit={handleSubmit} noValidate className="auth-form">
        {loginError && (
          <div className="form-error-banner">{loginError}</div>
        )}

        <InputField
          label="Correo electrónico"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && errors.email}
          placeholder="tu@correo.com"
          icon="✉"
        />

        <InputField
          label="Contraseña"
          type={showPassword ? "text" : "password"}
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && errors.password}
          placeholder="••••••••"
          icon="🔒"
          rightAction={
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
            >
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          }
        />

        <div className="form-meta">
          <label className="remember-me">
            <input type="checkbox" /> Recordarme
          </label>
          <Link to="/auth/olvide-contrasena" className="forgot-link">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        <AuthButton isLoading={isLoading}>Iniciar sesión</AuthButton>

        <p className="auth-switch">
          ¿No tienes cuenta?{" "}
          <Link to="/auth/registro" className="auth-switch-link">
            Regístrate gratis
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}