const express = require('express');
const bodyParser = require('body-parser');
//const router = express.Router();
const personajeRouters = require('./src/routes/personajeRoutes');

const app = express();
const port = 3002;

app.use(bodyParser.json());

//rutas
app.use('/api/personajes', personajeRouters);

//inicial el servidor
app.listen(port, ()=>{
    console.log("servidor iniciado en http://localhost: "+ port);
});
