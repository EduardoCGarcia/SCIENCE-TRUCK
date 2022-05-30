//creamos el servidor
const express =  require('express');
const conectarDB = require('./config/db');
const cors = require("cors")

//Creamos el servidor
const app = express();

//Conecar a la base de datos
conectarDB();

app.use(cors());

app.use(express.json())

app.use('/api/Divulgadores',require("./routes/divulgador"));
app.use('/api/Cientificos',require("./routes/cientifico"));
app.use('/api/Productos',require("./routes/producto"));



app.listen(4000, () => {
    console.log("Backend works!!!");
}); 