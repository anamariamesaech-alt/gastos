import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import InputField from "../components/InputField";
import AuthButton from "../components/AuthButton";
import { useAuthForm } from "../hooks/useAuthForm";
import { registerValidations } from "../services/authValidations";

function PasswordStrength({ password }) {
  const getStrength = (p) => {
    if (!p) return 0;
    let s = 0;
    if (p.length >= 8) s++;
    if (/[A-Z]/.test(p)) s++;
    if (/[0-9]/.test(p)) s++;
    if (/[^A-Za-z0-9]/.test(p)) s++;
    return s;
  };

  const strength = getStrength(password);
  const labels = ["", "Débil", "Regular", "Buena", "Fuerte"];
  const colors = ["", "#ef4444", "#f97316", "#eab308", "#22c55e"];

  if (!password) return null;

  return (
    <div className="password-strength">
      <div className="strength-bars">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="strength-bar"
            style={{
              background: i <= strength ? colors[strength] : "var(--border)",
            }}
          />
        ))}
      </div>
      <span className="strength-label" style={{ color: colors[strength] }}>
        {labels[strength]}
      </span>
    </div>
  );
}

function Registrar() {
  const navigate = useNavigate();

  const { values, errors, touched, handleChange, handleBlur, validate } =
    useAuthForm(
      { name: "", email: "", password: "", confirmPassword: "" },
      registerValidations
    );

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);

    try {
      const res = await fetch("https://gastos-backend-woad.vercel.app/api/auth/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
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
      title="Crea tu cuenta"
      subtitle="Empieza a gestionar tus finanzas hoy"
      illustrationLabel="Control total de tus gastos"
    >
      <form onSubmit={handleSubmit} noValidate className="auth-form">

        {loginError && (
          <div className="form-error-banner">{loginError}</div>
        )}

        <InputField
          label="Nombre completo"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && errors.name}
          placeholder="Juan Pérez"
          icon="👤"
        />

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
          placeholder="Mínimo 8 caracteres"
          icon="🔒"
          rightAction={
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword((v) => !v)}
            >
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          }
        />

        <PasswordStrength password={values.password} />

        <InputField
          label="Confirmar contraseña"
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.confirmPassword && errors.confirmPassword}
          placeholder="Repite tu contraseña"
          icon="🔒"
        />

        <label className="terms-check">
          <input type="checkbox" required />
          <span>
            Acepto los{" "}
            <a href="#" className="inline-link">
              Términos de uso
            </a>{" "}
            y la{" "}
            <a href="#" className="inline-link">
              Política de privacidad
            </a>
          </span>
        </label>

        <AuthButton isLoading={isLoading}>Crear cuenta</AuthButton>

        <p className="auth-switch">
          ¿Ya tienes cuenta?{" "}
          <Link to="/auth/iniciar" className="auth-switch-link">
            Inicia sesión
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}

export default Registrar;