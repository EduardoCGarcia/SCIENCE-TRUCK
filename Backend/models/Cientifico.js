const mongoose = require('mongoose');
const CientificoSchema = mongoose.Schema({
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
    video:{
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model('Cientifico',CientificoSchema);

