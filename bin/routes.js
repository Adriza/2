const express = require("express");
const app = express();
const { controller } = require("./Controller")

app.get("/", (req, res )=>{
    res.send("bienvenido");
})

app.get("/usuarios", (req, res) => {
/*let usuarios = [
    { id:"001",
    nombre: "bernarda",
    apellido: "euclipedes",
    correo:"euclinomada@gmail.com",
    nomusuario:"euclipi2019",
    contraseña:"1089750120"},
     { id:"002",
    nombre: "Nelida",
    apellido: "salcedo",
    correo:"nelikuin@gmail.com",
    nomusuario:"neliikuin2019",
    contraseña:"1089752120"}
  ];
  res.send(usuarios);
});
app.get("libros", (req, res) => {
let libros = [
 { id: "1234",
    nombre: "cien años de soledad",
    fechapublicacion: "01/03/1999",
     idioma: "español",
    genero: "dramatico",
    idautor:"0155"},
    { id: "2345",
    nombre: "El principito",
    fechapublicacion: "01/03/2001",
     idioma: "español",
    genero: "dramatico",
    idautor:"0144"}
  ];
  res.send(libros);
});

app.get("/publicaciones", (req, res) => {
  let publicaciones = [
    { id: "1234",
    texto: "una tarde veranera",
    fecha: "01/03/2019",
    idusuario:"001"},
     { id: "1255",
    texto: "playa de san bernardo",
    fecha: "06/09/2019",
    idusuario:"002"}
  ];
  res.send(publicaciones);
});
app.get("/autores", (req, res) => {
  let publicaciones = [
    { id: "0155",
    nombre1: "gabriel",
    nombre2: "jose",
    apellido1: "martinez",
    apellido2: "gomez",
    fechanacimiento: "02/03/1780",
    idusuario:"002"},
    { id: "0144",
    nombre1: "gabriel",
    nombre2: "jose",
    apellido1: "martinez",
    apellido2: "gomez",
    fechanacimiento: "06/07/1890",
    idusuario:"002"}
  ];
  res.send(publicaciones);
});

app.get("/comentarios", (req, res) => {
  let comentarios = [
    { id: "0045",
    texto: "estoy de acuerdo",
    valoracion: "Me encanta <3",
    idusuario:"001"},
     { id: "0046",
    texto: "Hola",
    valoracion: "No me gusta",
    idusuario:"002" }
  ];
  res.send(comentarios);
});

app.get("/historial", (req, res) => {
  let historial = [
    { id: "1111",
    texto: "www.ulukuin.co.com",
    fecha: "03/04/2019",
    idusuario:"001"},
     { id: "2222",
    texto: "www.bienvenidosalosmundos.co.com",
    fecha: "03/07/2015",
    idusuario:"002"
     }
  ];
  res.send(historial);*/
  controller.getUsers(res);
});
app.get("/libros", (req, res) => {

  controller.getLibros(res);
});

app.get("/autores", (req, res) => {

  controller.getAutores(res);
});
app.get("/comentarios", (req, res) => {

  controller.getComentarios(res);
});
app.get("/historial", (req, res) => {

  controller.getHistorial(res);
});
app.get("/publicaciones", (req, res) => {

  controller.getPublicaciones(res);
});

exports.app = app;