// Modelo de acceso a datos para la entidad Producto del módulo de inventario
const db = require('../config/db');

class ProductModel {
  // Obtiene todos los productos registrados
  static async findAll() {
    const [rows] = await db.query('SELECT * FROM productos ORDER BY id DESC');
    return rows;
  }

  // Crea un nuevo producto en el inventario
  static async create({ nombre, precio, stock, categoria }) {
    const sql = `
      INSERT INTO productos (nombre, precio, stock, categoria)
      VALUES (?, ?, ?, ?)
    `;
    const [result] = await db.execute(sql, [nombre, precio, stock, categoria]);
    return { id: result.insertId, nombre, precio, stock, categoria };
  }

  // Actualiza el stock o datos de un producto existente
  static async updateById(id, { nombre, precio, stock, categoria }) {
    const sql = `
      UPDATE productos
      SET nombre = ?, precio = ?, stock = ?, categoria = ?
      WHERE id = ?
    `;
    const [result] = await db.execute(sql, [nombre, precio, stock, categoria, id]);
    return result.affectedRows > 0;
  }
}

module.exports = ProductModel;
