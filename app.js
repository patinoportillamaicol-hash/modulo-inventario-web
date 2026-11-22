// Punto de entrada principal del servidor web del módulo de inventario
const express = require('express');
require('dotenv').config();

const productRoutes = require('./productRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para interpretar cuerpos JSON en las peticiones
app.use(express.json());

// Ruta base de verificación de estado
app.get('/', (req, res) => {
  res.status(200).json({ ok: true, service: 'Módulo de Inventario Web activo' });
});

// Montaje de rutas del módulo
app.use('/api', productRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
