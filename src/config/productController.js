// Controlador del módulo de inventario: gestiona peticiones y respuestas HTTP
const ProductModel = require('../models/productModel');

// Listar todos los productos
const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.findAll();
    return res.status(200).json({ ok: true, data: products });
  } catch (error) {
    console.error('Error al consultar productos:', error);
    return res.status(500).json({ ok: false, message: 'Error interno del servidor' });
  }
};

// Registrar un nuevo producto con validación básica de campos obligatorios
const createProduct = async (req, res) => {
  try {
    const { nombre, precio, stock, categoria } = req.body;

    if (!nombre || precio === undefined || stock === undefined) {
      return res.status(400).json({
        ok: false,
        message: 'Los campos nombre, precio y stock son obligatorios'
      });
    }

    const created = await ProductModel.create({
      nombre: nombre.trim(),
      precio: Number(precio),
      stock: Number(stock),
      categoria: categoria ? categoria.trim() : 'General'
    });

    return res.status(201).json({ ok: true, data: created });
  } catch (error) {
    console.error('Error al crear producto:', error);
    return res.status(500).json({ ok: false, message: 'Error al registrar el producto' });
  }
};

// Actualizar producto por ID
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, precio, stock, categoria } = req.body;

    const updated = await ProductModel.updateById(id, {
      nombre,
      precio: Number(precio),
      stock: Number(stock),
      categoria: categoria || 'General'
    });

    if (!updated) {
      return res.status(404).json({ ok: false, message: 'Producto no encontrado' });
    }

    return res.status(200).json({ ok: true, message: 'Producto actualizado correctamente' });
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    return res.status(500).json({ ok: false, message: 'Error al actualizar el producto' });
  }
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct
};
