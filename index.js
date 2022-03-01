const express = require("express");
const routes = require("./routes");

// Crear una app de expres
const app = express();
const port = 3000;

// .use va a correr cualquier req, entrando a esa ruta // res - lo que responder el servidor
app.use("/", routes());


app.listen(port);
