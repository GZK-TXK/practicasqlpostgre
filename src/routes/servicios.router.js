const express = require('express');
const { check } = require('express-validator');

const serviciosController = require('../controllers/servicios.controllers');
const validateInputs = require('../middlewares/validateImputs');

const router = express.Router();

router.get('/', [], serviciosController.traerTodosLosServicios);

router.get('/:id', [], serviciosController.traerUnServicioPorId);

router.post('/crear', [
    check('servicios', 'El nombre del servicio es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
    check('precio', 'El precio es obligatorio y debe ser un número entero').isNumeric(),
    validateInputs
], serviciosController.crearTodosLosServicios); 

router.put('/actualizar/:id', serviciosController.actualizarunServicioPorID);

router.delete('/eliminar/:id', serviciosController.eliminarUnServicioPorId);

module.exports = router;