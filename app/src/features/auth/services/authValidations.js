const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function loginValidations({ email, password }) {
  const errors = {};

  if (!email) {
    errors.email = "El correo es obligatorio.";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Ingresa un correo válido.";
  }

  if (!password) {
    errors.password = "La contraseña es obligatoria.";
  } else if (password.length < 6) {
    errors.password = "La contraseña debe tener al menos 6 caracteres.";
  }

  return errors;
}

export function registerValidations({ name, email, password, confirmPassword }) {
  const errors = {};

  if (!name || name.trim().length < 2) {
    errors.name = "Ingresa tu nombre completo.";
  }

  if (!email) {
    errors.email = "El correo es obligatorio.";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Ingresa un correo válido.";
  }

  if (!password) {
    errors.password = "La contraseña es obligatoria.";
  } else if (password.length < 8) {
    errors.password = "Mínimo 8 caracteres.";
  } else if (!/[A-Z]/.test(password)) {
    errors.password = "Debe contener al menos una mayúscula.";
  } else if (!/[0-9]/.test(password)) {
    errors.password = "Debe contener al menos un número.";
  }

  if (!confirmPassword) {
    errors.confirmPassword = "Confirma tu contraseña.";
  } else if (confirmPassword !== password) {
    errors.confirmPassword = "Las contraseñas no coinciden.";
  }

  return errors;
}

export function forgotValidations({ email }) {
  const errors = {};

  if (!email) {
    errors.email = "Ingresa tu correo electrónico.";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Ingresa un correo válido.";
  }

  return errors;
}