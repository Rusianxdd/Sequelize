const { Sequelize, DataTypes } = require('sequelize');
const usuario = require('../modelos/modelusuario');
const db = require('../db/db');

const usuario_controll = {
    mostrar: (req,res)=>{

        usuario.findAll()
        .then(results => {
            res.render('index',{ results:results});
        })
        .catch(err => {
          console.log(err)
        })


        
    },
    save:(req,res)=>{

        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const edad = req.body.edad;
        const fecha_nacimiento = req.body.fecha_nacimiento;
        const direccion = req.body.direccion;
        const dpi = req.body.dpi;
       
        usuario.create({
            nombre:nombre,
            apellido:apellido,
            edad:edad,
            fecha_nacimiento: new Date(fecha_nacimiento),
            direccion:direccion,
            dpi:dpi,
        }).then(result => {
            res.redirect('/');
        });
    },
    buscar:(req,res)=>{
        const id = req.params.id;
        usuario.findAll({
            where:{
                nombre:id
            }
        }).then(result=>{
            res.json(result)
        });;
    },
    eliminar:(req,res)=>{
        const id = req.params.id;

        usuario.destroy({
            where:{
                idusuario:id
            }
        }).then(()=>{
            res.redirect('/');
        });;
    },
    actualizar:(req,res)=>{
        const id = req.params.id;

        usuario.findAll({
            where:{
                idusuario:id
            }
        })
        .then(users => {
            res.render('edit',{ users:users[0]});
        })
        .catch(err => {
          console.log(err)
        })

    },
    update:(req,res)=>{
        const id = req.body.id;
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const edad = req.body.edad;
        const fecha_nacimiento = req.body.fecha_nacimiento;
        const direccion = req.body.direccion;
        const dpi = req.body.dpi;
        usuario.update({ 
            idusuario: id,
            nombre:nombre,
            apellido:apellido,
            edad:edad,
            fecha_nacimiento: new Date(fecha_nacimiento),
            direccion:direccion,
            dpi:dpi,
        }, {
            where: {
              idusuario: id
            }
          }).then(result=>{
            console.log('hola');
            res.redirect('/');
          });

    }
}

module.exports = usuario_controll;