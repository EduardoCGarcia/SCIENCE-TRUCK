const Cientifico = require('../models/Cientifico');

exports.postCientifico = async (req,res) => {
    try {
        let p;
        //Creamos nustro producto
        d = new Cientifico(req.body)
        await d.save();
        res.send(d)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.getCientificos = async (req,res) => {
    try {
        const d = await Cientifico.find()
        res.json(d)
        console.log(d);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.putCientifico = async (req,res) => {
    try {
        //El nombre de estas variables debe ser el mismo que las 
        //variables que vamos a modificar de la clase Produto
        const {nombre,foto_card, foto_info, descripcion,informacion} = req.body;
        let d = await Cientifico.findById(req.params.id);
        if(!d){
            req.status(404).json({msg:"no existe el Cientifico"});
        }

        d.nombre = nombre;
        d.foto_card = foto_card;
        d.foto_info = foto_info;
        d.descripcion = descripcion;
        d.informacion = informacion;

        d = await Cientifico.findOneAndUpdate({_id: req.params.id},p,{new: true});
        res.json(d);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}
exports.getCientifico = async (req,res) => {
    try {
        //El nombre de estas variables debe ser el mismo que las 
        //variables que vamos a modificar de la clase Produto
        let d = await Cientifico.findById(req.params.id);
        if(!d){
            req.status(404).json({msg:"no existe el producto"});
        }
        res.json(d);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.deleteCientifico = async (req,res) => {
    try {
        //El nombre de estas variables debe ser el mismo que las 
        //variables que vamos a modificar de la clase Produto
        let d = await Cientifico.findById(req.params.id);
        if(!d){
            req.status(404).json({msg:"no existe el producto"});
        }
        await Cientifico.findOneAndRemove({_id: req.params.id})
        res.json({msg: "Producto eliminado exitosamente"});


    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}