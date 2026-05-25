const { validationResult } = require('express-validator')


const validateInputs = (req, res, next) => {

    const errores = validationResult(req)

    if (!errores.isEmpty()) {
        res.status(403).json({
            ok: false,
            errores: errores.mapped()
        })
    }

    next()

}

module.exports = validateInputs