/*Existen dos formas de importar, la primera es la que comúnmente se usa
//const express = require('express');
La otra forma es con @babel, la cual requiere de algúnas configuraciones adicionales*/

import express from "express";
import { create } from "express-handlebars";
import indexRouter from "./routes/index.routes";
import path from "path";
import morgan from "morgan";

const app = express();

app.set("views", path.join(__dirname, "views"));

const exphbs = create({
  extname: ".hbs",
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  defaulLayout: "main",
});

app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));

//Rutas
app.use(indexRouter);

//Archivos estaticos
app.use(express.static(path.join(__dirname, "public")));

export default app;
