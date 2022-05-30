
const express = require('express');
const router = express.Router();
const cientificoController = require('../controllers/cientificoController');

router.post('/', cientificoController.postCientifico);
router.get('/', cientificoController.getCientificos);
router.put('/:id', cientificoController.putCientifico);
router.get('/:id', cientificoController.getCientifico);
router.delete('/:id', cientificoController.deleteCientifico);

module.exports = router;