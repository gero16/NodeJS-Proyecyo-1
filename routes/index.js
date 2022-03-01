const express = require("express");
const router = express.Router();

module.exports = function () {
  // .use va a correr cualquier req, entrando a esa ruta // res - lo que responder el servidor
  router.get("/", (req, res) => {
    res.send("Hola");
  });

  router.get("/nosotros", (req, res) => {
    res.send("Nosotros");
  });

  // para hacerlo disponible en el otro index.js
  return router;
};
