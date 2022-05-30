const express = require('express');
const router = express.Router();
const divulgadorController = require("../controllers/divulgadorController")

router.post('/', divulgadorController.postDivulgador);
router.get('/', divulgadorController.getDivulgadores);
router.put('/:id', divulgadorController.putDivulgador);
router.get('/:id', divulgadorController.getDivulgador);
router.delete('/:id', divulgadorController.deleteDivulgador);

module.exports = router;