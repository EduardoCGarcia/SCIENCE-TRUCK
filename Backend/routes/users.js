
const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');
const auth = require('../middlewares/user')


/* router.get('/hola',() => {
    console.log("Holaaaaaaaaaaaaaaa weeeeeeeeeeeeeeee");
}) */

router.get('/private', auth, (req,res) => {
    res.status(200).send({message:"Tiene acceso"})
})

module.exports = router;
