const mongoose = require('mongoose');
const ProductoSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    p_descuento:{
        type: Number,
        required: true
    },
    imagen:{
        type: String,
        required: true
    },
    inCart:{ 
        type: Boolean, 
        default: false 
    }

   
    
});

module.exports = mongoose.model('Producto',ProductoSchema);

