//creamos el servidor
const express =  require('express');
const conectarDB = require('./config/db');
const cors = require("cors")

//Creamos el servidor
const app = express();

//Conecar a la base de datos
conectarDB();

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use(cors());

app.use(express.json())

app.use('/api/Divulgadores',require("./routes/divulgador"));
app.use('/api/Cientificos',require("./routes/cientifico"));
app.use('/api/Productos',require("./routes/producto"));


app.use('/api/auth',require("./routes/userRouter"));


app.listen(4000, () => {
    console.log("Backend works!!!");
}); 