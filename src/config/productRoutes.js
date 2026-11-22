// Definición de rutas REST para el módulo de gestión de inventario
const express = require('express');
const router = express.Router();
const {
  getProducts,
  createProduct,
  updateProduct
} = require('../controllers/productController');

router.get('/productos', getProducts);
router.post('/productos', createProduct);
router.put('/productos/:id', updateProduct);

module.exports = router;
