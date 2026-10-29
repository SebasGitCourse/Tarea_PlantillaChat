import express from 'express';
import handlebars from 'express-handlebars';
import { __dirname } from './util.js';

const app = express();
const puerto = 3000;

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/../public"));

app.get("/", (req, res) => {
    res.render("index", {
        title: "Chat en clase",
        usuario: "SebasRC",
        mensajes: [
            {
                contenido: "Hola",
                hora: "3:26 p.m"
            }, {
                contenido: "¿Como estas?",
                hora: "3:27 p.m"
            }, {
                contenido: "😊",
                hora: "3:27 p.m"
            }
        ]
    });
});

app.listen(puerto, () => {
    console.log("SERVIDOR FUNCIONANDO EN: http://localhost:" + puerto)
});