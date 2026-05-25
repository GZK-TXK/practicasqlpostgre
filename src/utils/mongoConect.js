const mongoose = require("mongoose");

const dbConect = async () => {

    try {
        await mongoose.connect(process.env.DB_URI)
        console.log('Conectado a la base de datos')

    } catch (error) {
        console.log(error)

        throw 'Error al conectar con la base de datos'

    }

}



module.exports = dbConect
