const User = require('../models/User');

exports.postUser = async (req,res) => {
    try {
        let p;
        //Creamos nustro producto
        d = new User(req.body)
        await d.save();
        res.send(d)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

