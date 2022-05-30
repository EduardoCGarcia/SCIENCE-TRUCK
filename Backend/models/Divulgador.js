const mongoose = require('mongoose');
const DivulgadorSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    foto_card:{
        type: String,
        required: true
    },
    foto_inicio:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    informacion:{
        type: String,
        required: true
    },
    
});

module.exports = mongoose.model('Divulgador',DivulgadorSchema);

