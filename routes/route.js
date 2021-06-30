const express = require('express');
const route = express.Router();
const usuario = require('../controladores/usuario');


route.get('/', usuario.mostrar);
route.post('/save', usuario.save);
route.get('/search/:id', usuario.buscar);
route.get('/eliminar/:id', usuario.eliminar);
route.get('/editar/:id', usuario.actualizar);
route.post('/edit', usuario.update);

module.exports = route;