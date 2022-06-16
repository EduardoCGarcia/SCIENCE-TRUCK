const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/carritoController');

router.post('/', carritoController.addProductCart);
router.delete('/', carritoController.deleteProductCart);
router.get('/', carritoController.getProductsCart);

module.exports = router;