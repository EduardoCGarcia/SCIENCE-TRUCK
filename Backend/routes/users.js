
const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');
const auth = require('../middlewares/user')

router.post('/hola', ()=>{
    console.log('hola');
})

router.get('/private', auth, (req,res) => {
    res.status(200).send({message:"Tiene acceso"})
})

router.post('/singup',userController.singUp);
router.post('/singin',userController.singIn);




module.exports = router;
