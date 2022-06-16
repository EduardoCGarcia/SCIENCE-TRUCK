const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/carritoController');

router.post('/', carritoController.addProductCart);
router.delete('/:productId', carritoController.deleteProductCart);
router.get('/', carritoController.getProductsCart);

module.exports = router;