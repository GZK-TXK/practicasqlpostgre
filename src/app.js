const express = require('express')
const dbConect = require('./utils/mongoConect')
const cors= require('cors')

require('dotenv').config()

const port = process.env.PORT || 3000


const app = express()


// parse application/x-www-form-urlencoded
app.use(express.urlencoded())

// parse application/json
app.use(express.json())


dbConect().catch((error) => { console.log(error) })

dbConect()
.then(resp=>console.log(`Acceso a la base de datos`,resp))
.catch(error=>console.log(error))


app.use('/api/v1/servicios', require('./routes/servicios.router'))
// app.use('/api/v1/productos', require('./routes/servicios.router'))



app.listen(port, () => {
    console.log(`Server on port ${port}`)
})
