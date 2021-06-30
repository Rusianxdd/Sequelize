const express = require('express');
const app = express();
const conexion = require('./db/db')
  



//views
app.use("/public", express.static(__dirname + "/public"));
app.set('view engine', 'ejs');

//Middle

app.use(express.urlencoded({extended:false}));
app.use(express.json());


//Rutas

app.use('/', require('./routes/route'));
//Servidor
app.listen(5000, ()=>{
    conexion.sync()
    .then(() => {
      console.log('Conexion establecida')
    })
    .catch(err => {
      console.log('No se conecto')
    })


});