# BiciCrew — Backend

API REST en Node.js + Express. Es el backend único consumido tanto por el frontend web (`../web`) como por la app móvil (`../mobile`).

## Requisitos
- Node.js 18+

## Cómo correrlo

```
cd backend
npm install
npm start
```

El servidor queda escuchando en `http://localhost:3000`.

## Endpoints de prueba
- `GET /` → `{ "mensaje": "Hola Mundo desde el backend de BiciCrew" }`
- `GET /api/health` → `{ "status": "ok", "servicio": "bicicrew-backend" }`
