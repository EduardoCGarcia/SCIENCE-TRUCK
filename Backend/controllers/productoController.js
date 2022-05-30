const Producto = require('../models/Producto');

exports.postProducto = async (req,res) => {
    try {
        let p;
        //Creamos nustro producto
        d = new Producto(req.body)
        await d.save();
        res.send(d)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.getProductos = async (req,res) => {
    try {
        const d = await Producto.find()
        res.json(d)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.putProducto = async (req,res) => {
    try {
        //El nombre de estas variables debe ser el mismo que las 
        //variables que vamos a modificar de la clase Produto
        const {nombre,precio, p_descuento, imagen} = req.body;
        let d = await Producto.findById(req.params.id);
        if(!d){
            req.status(404).json({msg:"no existe el Producto"});
        }

        d.nombre = nombre;
        d.precio = precio;
        d.p_descuento = p_descuento;
        d.imagen = imagen;

        d = await Producto.findOneAndUpdate({_id: req.params.id},d,{new: true});
        res.json(d);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}
exports.getProducto = async (req,res) => {
    try {
        //El nombre de estas variables debe ser el mismo que las 
        //variables que vamos a modificar de la clase Produto
        let d = await Producto.findById(req.params.id);
        if(!d){
            req.status(404).json({msg:"no existe el producto"});
        }
        res.json(d);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.deleteProducto = async (req,res) => {
    try {
        //El nombre de estas variables debe ser el mismo que las 
        //variables que vamos a modificar de la clase Produto
        let d = await Producto.findById(req.params.id);
        if(!d){
            req.status(404).json({msg:"no existe el producto"});
        }
        await Producto.findOneAndRemove({_id: req.params.id})
        res.json({msg: "Producto eliminado exitosamente"});


    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}