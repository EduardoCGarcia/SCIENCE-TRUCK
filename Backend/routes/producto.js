
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

router.post('/', productoController.postProducto);
router.get('/', productoController.getProductos);
router.put('/:id', productoController.putProducto);
router.get('/:id', productoController.getProducto);
router.delete('/:id', productoController.deleteProducto);

module.exports = router;