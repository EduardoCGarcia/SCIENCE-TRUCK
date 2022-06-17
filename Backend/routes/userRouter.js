const express = require('express');
const Users = require('../controllers/userController');
const router = express.Router();

router.post('/hola', (req, res) => {res.send(req.body);})

router.post('/register', Users.createUser);
router.post('/login', Users.loginUser);

module.exports = router;