const Divulgador = require("../models/Divulgador");

exports.postDivulgador = async (req,res) => {
    try {
        let p;
        //Creamos nustro producto
        d = new Divulgador(req.body)
        await d.save();
        res.send(d)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.getDivulgadores = async (req,res) => {
    try {
        const d = await Divulgador.find()
        res.json(d)
        console.log(d);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.putDivulgador = async (req,res) => {
    try {
        //El nombre de estas variables debe ser el mismo que las 
        //variables que vamos a modificar de la clase Produto
        const {nombre,foto_card, foto_info, descripcion,informacion} = req.body;
        let d = await Divulgador.findById(req.params.id);
        if(!d){
            req.status(404).json({msg:"no existe el Divulgador"});
        }

        d.nombre = nombre;
        d.foto_card = foto_card;
        d.foto_info = foto_info;
        d.descripcion = descripcion;
        d.informacion = informacion;

        d = await Divulgador.findOneAndUpdate({_id: req.params.id},p,{new: true});
        res.json(d);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}
exports.getDivulgador = async (req,res) => {
    try {
        //El nombre de estas variables debe ser el mismo que las 
        //variables que vamos a modificar de la clase Produto
        let d = await Divulgador.findById(req.params.id);
        if(!d){
            req.status(404).json({msg:"no existe el producto"});
        }
        res.json(d);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.deleteDivulgador = async (req,res) => {
    try {
        //El nombre de estas variables debe ser el mismo que las 
        //variables que vamos a modificar de la clase Produto
        let d = await Divulgador.findById(req.params.id);
        if(!d){
            req.status(404).json({msg:"no existe el producto"});
        }
        await Divulgador.findOneAndRemove({_id: req.params.id})
        res.json({msg: "Producto eliminado exitosamente"});


    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}