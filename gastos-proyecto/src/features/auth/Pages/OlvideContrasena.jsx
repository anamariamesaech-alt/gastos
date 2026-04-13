import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import InputField from "../components/InputField";
import AuthButton from "../components/AuthButton";
import { useAuthForm } from "../hooks/useAuthForm";
import { forgotValidations } from "../services/authValidations";

export default function OlvideContrasena() {
  const { values, errors, touched, handleChange, handleBlur, validate } =
    useAuthForm({ email: "" }, forgotValidations);

  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);

    try {
      await new Promise((r) => setTimeout(r, 1500));
      // await authApi.forgotPassword(values.email);
      setSent(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title={sent ? "Revisa tu correo" : "¿Olvidaste tu contraseña?"}
      subtitle={
        sent
          ? `Enviamos un enlace a ${values.email}`
          : "Te enviaremos un enlace para restablecerla"
      }
      illustrationLabel="Recupera el acceso a tu cuenta"
    >
      {sent ? (
        <div className="success-state">
          <div className="success-icon email-icon">✉</div>
          <p className="success-text">
            Revisa tu bandeja de entrada y sigue las instrucciones del correo.
            Si no lo ves, revisa la carpeta de spam.
          </p>
          <button
            className="resend-btn"
            onClick={() => setSent(false)}
            type="button"
          >
            ¿No llegó? Reenviar correo
          </button>
          <Link to="/auth/iniciar" className="auth-switch-link block-link">
            ← Volver a iniciar sesión
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="auth-form">
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

          <AuthButton isLoading={isLoading}>Enviar enlace</AuthButton>

          <p className="auth-switch">
            <Link to="/auth/iniciar" className="auth-switch-link">
              ← Volver a iniciar sesión
            </Link>
          </p>
        </form>
      )}
    </AuthLayout>
  );
}