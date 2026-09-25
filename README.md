# BiciCrew

Rueda. Comparte. Supera tus límites.

Red social de seguimiento de rutas para ciclistas y runners. Proyecto de séptimo semestre de Ingeniería de Sistemas, desarrollado como proyecto conjunto para los cursos de **Computación Móvil** y **Programación Orientada a la Web**.

## Estructura del repositorio

```
BiciCrew/
├── backend/     → API REST en Node.js + Express (compartida por web y móvil)
├── web/         → Frontend web en Vue 3 + Vite
├── mobile/      → App móvil en React Native
└── README.md
```

## Stack tecnológico

| Capa | Tecnología | Curso relacionado |
|---|---|---|
| Backend / API | Node.js + Express | Programación Orientada a la Web |
| Frontend web | Vue 3 + Vite | Programación Orientada a la Web |
| App móvil | React Native | Computación Móvil |

El backend expone una única API REST consumida tanto por el cliente web como por el cliente móvil, evitando duplicar lógica de negocio.

## Cómo levantar el proyecto localmente

1. **Backend**
   ```
   cd backend
   npm install
   npm start
   ```
2. **Web**
   ```
   cd web
   npm install
   npm run dev
   ```
3. **Mobile** — ver instrucciones específicas en `mobile/README.md` (requiere inicializar el proyecto con la CLI de React Native antes de usar los archivos de esta carpeta).

## Estado actual

Etapa inicial: estructura base del repositorio con un "Hola Mundo" funcional en cada módulo, como punto de partida para el desarrollo del proyecto.
