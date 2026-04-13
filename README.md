# 💰 Moni — Control Financiero Inteligente

![Moni Banner](https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=1200&q=80)

---

## 📋 Descripción

**Moni** es una plataforma web de finanzas personales diseñada para ayudarte a controlar tus gastos, mejorar tu ahorro y tomar decisiones financieras inteligentes. Permite registrar gastos diarios, visualizar resúmenes por periodo, calcular cuotas por responsable y gestionar tu economía personal sin complicaciones.

---

## ✨ Características Principales

- 🔐 **Autenticación completa** — Registro, inicio de sesión y recuperación de contraseña
- 📊 **Dashboard de gastos** — Formulario para registrar gastos con fecha, categoría, valor, descripción y responsable
- 📅 **Filtro por periodo** — Visualiza gastos filtrando por mes y año
- 💵 **Resumen automático** — Total general, cuota por responsable y saldo de cada persona
- 🗑️ **Gestión de gastos** — Elimina gastos registrados fácilmente
- 🔒 **Seguridad** — Contraseñas encriptadas con bcryptjs y autenticación con JWT
- ☁️ **Base de datos en la nube** — Datos guardados en MongoDB Atlas
- 📱 **Diseño responsivo** — Adaptado para escritorio y móvil

---

## 🚀 Instalación

### Requisitos previos
- Node.js v18 o superior
- npm v9 o superior
- Cuenta en MongoDB Atlas

### 1. Clonar el repositorio

```bash
git clone https://github.com/anamariamesaech-alt/gastos.git
cd gastos
```

### 2. Instalar dependencias del frontend

```bash
npm install
```

### 3. Instalar dependencias del backend

```bash
cd backend
npm install
```

### 4. Configurar variables de entorno

Crea un archivo `.env` dentro de la carpeta `backend`:

```env
MONGO_URI=mongodb+srv://usuario:password@cluster0.xxxxx.mongodb.net/gastosDB
PORT=5000
JWT_SECRET=clave_secreta_super_segura_123
```

---

## ▶️ Ejecución

### Iniciar el backend

```bash
cd backend
node server.js
```

Debes ver:
```
✅ Servidor corriendo en puerto 5000
✅ MongoDB conectado
```

### Iniciar el frontend

Abre una nueva terminal en la raíz del proyecto:

```bash
npm run dev
```

La aplicación estará disponible en: **http://localhost:5173**

---

## 🛠️ Tecnologías

### Frontend
| Tecnología | Versión | Uso |
|---|---|---|
| React | 18+ | Librería principal de UI |
| Vite | 5+ | Bundler y servidor de desarrollo |
| React Router DOM | 6+ | Navegación entre páginas |
| Material UI (MUI) | 5+ | Componentes de interfaz |

### Backend
| Tecnología | Versión | Uso |
|---|---|---|
| Node.js | 18+ | Entorno de ejecución |
| Express | 4+ | Framework del servidor |
| MongoDB Atlas | Cloud | Base de datos en la nube |
| Mongoose | 7+ | ODM para MongoDB |
| bcryptjs | 2+ | Encriptación de contraseñas |
| JSON Web Token | 9+ | Autenticación de usuarios |
| dotenv | 16+ | Variables de entorno |
| cors | 2+ | Permitir peticiones del frontend |

---

## 🗂️ Arquitectura y Encarpetado

```
gastos-proyecto/
│
├── backend/                        # Servidor Node/Express
│   ├── models/
│   │   └── User.js                 # Modelo de usuario MongoDB
│   ├── routes/
│   │   └── auth.js                 # Rutas de autenticación
│   ├── middleware/                 # Middlewares (auth, etc.)
│   ├── .env                        # Variables de entorno
│   └── server.js                   # Punto de entrada del servidor
│
├── src/                            # Frontend React
│   ├── features/
│   │   ├── auth/                   # Módulo de autenticación
│   │   │   ├── components/
│   │   │   │   ├── AuthButton.jsx
│   │   │   │   ├── AuthLayout.jsx
│   │   │   │   ├── AuthLayout.css
│   │   │   │   └── InputField.jsx
│   │   │   ├── hooks/
│   │   │   │   └── useAuthForm.js
│   │   │   ├── Pages/
│   │   │   │   ├── Iniciar.jsx
│   │   │   │   ├── Registrar.jsx
│   │   │   │   └── OlvideContrasena.jsx
│   │   │   └── services/
│   │   │       └── authValidations.js
│   │   ├── dashboard/              # Módulo del dashboard
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   └── pages/
│   │   │       └── Dashboard.jsx
│   │   └── layout/                 # Layout general
│   │       ├── components/
│   │       │   ├── Header.jsx
│   │       │   └── Footer.jsx
│   │       └── pages/
│   │           ├── Home.jsx
│   │           └── ApiPage.jsx
│   ├── App.jsx                     # Componente raíz
│   ├── AppRoutes.jsx               # Definición de rutas
│   └── main.jsx                    # Punto de entrada React
│
├── public/                         # Archivos estáticos
├── .gitignore
├── package.json
└── README.md
```

---

## 📸 Screenshots

### Página de inicio
![Home](https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=1200&q=80)

### Dashboard de gastos
> El dashboard permite registrar gastos, visualizar la tabla del periodo y consultar el resumen por responsable en tiempo real.

---

## 👤 Datos del Autor

| Campo | Detalle |
|---|---|
| **Nombre** | Ana María Mesa Ech |
| **Correo** | soporte@moni.com |
| **GitHub** | [@anamariamesaech-alt](https://github.com/anamariamesaech-alt) |
| **Repositorio** | [github.com/anamariamesaech-alt/gastos](https://github.com/anamariamesaech-alt/gastos.git) |
| **Proyecto** | Moni — Control Financiero Inteligente |
| **Año** | 2026 |

---

## 📄 Licencia

Este proyecto fue desarrollado con fines académicos y personales.

© 2026 Moni. Todos los derechos reservados.