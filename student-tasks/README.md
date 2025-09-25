# Student Tasks

Aplicación web para gestión de tareas de estudiantes.

## Tecnologías
- Node.js + Express
- PostgreSQL
- HTML, CSS, JavaScript

## Instalación local
1. Clonar repositorio
2. `cd backend && npm install`
3. Configurar archivo `.env` con `DATABASE_URL`
4. Crear base de datos e importar `database/schema.sql`
5. Iniciar servidor con `npm start`
6. Abrir `frontend/index.html` en el navegador

## Despliegue en Render
- Backend: crear servicio web con Node.js
- Database: crear PostgreSQL y ejecutar `schema.sql`
- Frontend: crear static site y apuntar `app.js` a la URL del backend
