const express = require("express");
const app = express();
const expressApp = require("../public/express/express.js" ); // Importar la aplicación Express configurada en express.js

app.use(expressApp);

//app.get("/cliente_servidor", (req, res) => res.send("Cliente Servidor on Vercel!"));


app.get("/cliente_servidor", (req, res) => {
    res.sendFile("./public/cliente_servidor/index.html", { root: '.' });
});
app.use(express.static('public'));


app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;