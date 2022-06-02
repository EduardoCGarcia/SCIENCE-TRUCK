
const services = require('../services')

function isAuth(req,res,next) {
    if (!req.headers.authorization) {
        return res.status(403).send({message: 'Ni tienes autorización'})
    }
    const token = req.headers.authorization.split(" ")[1];
    services.decodeToken(token)
    .then(response =>{
        req.user = response
        next()  
    })
    .cach(response=>{
        res.status(response.status)
    })
}

module.exports = isAuth;