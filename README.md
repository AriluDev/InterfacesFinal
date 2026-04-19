# 🎓 EduManager - Sistema de Gestión Educativa

Aplicación web SPA desarrollada en **Angular** con autenticación JWT, guards de seguridad, lazy loading y consumo de API REST simulada con json-server.

---

## 👥 Integrantes
- Medina Aguilar Fernando
- Palacios Diaz Jose
- Ramos Curay Fernando

---

## 🚀 Requisitos previos
- Node.js v18 o superior
- Angular CLI v17 o superior
- npm v9 o superior

---

## ⚙️ Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/edu-manager.git
cd edu-manager
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Instalar dependencias adicionales
```bash
npm install bootstrap bootstrap-icons
npm install zone.js
npm install @auth0/angular-jwt
npm install json-server@0.17.4 --save-dev
```

### 4. Verificar que el angular.json tenga Bootstrap configurado
En la sección `styles` y `scripts` del `angular.json`:
```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "node_modules/bootstrap-icons/font/bootstrap-icons.css",
  "src/styles.scss"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```

---

## ▶️ Ejecución

Necesitas **dos terminales** abiertas simultáneamente:

### Terminal 1 — API simulada (json-server)
```bash
npm run api
```
La API quedará disponible en: `http://localhost:3000`

### Terminal 2 — Aplicación Angular
```bash
ng serve
```
La aplicación quedará disponible en: `http://localhost:4200`

---

## 🔐 Credenciales de prueba

| Rol | Email | Contraseña |
|-----|-------|------------|
| 👑 Administrador | admin@edu.com | admin123 |
| 👨‍🏫 Profesor | profesor@edu.com | prof123 |
| 🎓 Estudiante | estudiante@edu.com | est123 |

---

## 🏗️ Arquitectura del proyecto
src/
├── app/
│   ├── guards/
│   │   ├── auth.guard.ts        # Protege rutas privadas
│   │   ├── role.guard.ts        # Controla acceso por rol
│   │   └── login.guard.ts       # Redirige si ya está logueado
│   ├── interceptors/
│   │   └── auth.interceptor.ts  # Inserta JWT en cada petición
│   ├── models/
│   │   ├── usuario.model.ts
│   │   ├── curso.model.ts
│   │   └── auth.model.ts
│   ├── services/
│   │   ├── auth.ts              # Login, logout, JWT
│   │   ├── usuarios.ts          # CRUD usuarios
│   │   └── cursos.ts            # CRUD cursos
│   └── modules/
│       ├── auth/                # Login
│       ├── admin/               # Dashboard, Usuarios, Cursos
│       ├── profesor/            # Dashboard, Mis Cursos
│       ├── estudiante/          # Dashboard, Mis Cursos
│       └── shared/              # Navbar, Pipe, Directiva
├── environments/
│   └── environment.ts           # URL de la API


---

## 🛡️ Guards implementados

| Guard | Función |
|-------|---------|
| `AuthGuard` | Verifica si el usuario tiene token JWT válido |
| `RoleGuard` | Verifica si el rol del usuario puede acceder a la ruta |
| `LoginGuard` | Si ya está autenticado, redirige al dashboard correspondiente |

---

## 🌐 Endpoints de la API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | /auth/login | Autenticación JWT |
| GET | /usuarios | Listar usuarios |
| POST | /usuarios | Crear usuario |
| PUT | /usuarios/:id | Actualizar usuario |
| DELETE | /usuarios/:id | Eliminar usuario |
| GET | /cursos | Listar cursos |
| POST | /cursos | Crear curso |
| PUT | /cursos/:id | Actualizar curso |
| DELETE | /cursos/:id | Eliminar curso |

---

## ✅ Funcionalidades por rol

### 👑 Administrador
- Ver dashboard con estadísticas
- CRUD completo de usuarios
- CRUD completo de cursos
- Asignar profesores a cursos

### 👨‍🏫 Profesor
- Ver dashboard con sus cursos
- Gestionar sus cursos asignados

### 🎓 Estudiante
- Ver dashboard
- Ver cursos disponibles activos