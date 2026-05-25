const express = require('express')
const { check } = require('express-validator')

const { traerTodosLosServicios, traerUnServicioPorId, crearUnServicios, actualizarUnServicioPorId, eliminarUnServicioPorId } = require('../controllers/servicios.controllers')
const validateInputs = require('../middlewares/validateImputs')

const router = express.Router()



router.get('/', [], traerTodosLosServicios)

router.get('/:id', [], traerUnServicioPorId)

router.post('/crear', [
    check('titulo', 'El nombre es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatori').not().isEmpty(),
    check('categoria', 'La catagotia es obligatori').not().isEmpty(),
    validateInputs


], crearUnServicios)

router.put('/actualizar/:id', actualizarUnServicioPorId)

router.delete('/eliminar/:id', eliminarUnServicioPorId)






module.exports = router