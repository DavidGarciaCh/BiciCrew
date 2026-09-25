const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Endpoint de prueba - confirma que el backend esta vivo
app.get('/', (req, res) => {
  res.json({ mensaje: 'Hola Mundo desde el backend de BiciCrew' });
});

// Endpoint de salud, util para verificar despliegue
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', servicio: 'bicicrew-backend' });
});

app.listen(PORT, () => {
  console.log(`Servidor BiciCrew backend corriendo en http://localhost:${PORT}`);
});
