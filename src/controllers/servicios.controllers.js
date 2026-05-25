const Servicios = require('../models/servicio.model')
// TODO: comprobar si hay respuesta
//GET ALL SERVICES

const traerTodosLosServicios = async (req, res) => {
    try {
        //TODO: acceder a la bbdd - solicitar datos
        const servicios = await Servicios.find()
        if (servicios.length === 0) {
            return res.status(404).json({
                ok: true,
                msg: 'No hay servicios registrados.',
                servicios: []
            });
        }
        res.status(200).json({
            ok: true,
            msg: 'Obteniendo servicios.',
            servicios
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener los datos.'
        })
    }
}

//GET A SERVICE BY ID

const traerUnServicioPorId = async (req, res) => {
    try {
        const { id } = req.params

        // console.log({ id })
        //TODO: acceder a la bbdd - solicitar datos por su id

        const servicios = await Servicios.findById({ _id: id })
        console.log(servicios)
        // TODO: comprobar si hay respuesta  // TODO: si no existe 404  { ok: false, msg: 'no se encontro'}

        if (!servicios) {
            res.status(404).json(
                {
                    ok: false,
                    msg: 'No existe servicio con ese id',
                }
            )
            return
        }
        res.status(200).json(
            {
                ok: true,
                msg: 'obteniendo un servicio',
                servicios
            }
        )

    } catch (error) {
        console.log(error)
        res.status(500).json(
            {
                ok: false,
                msg: 'Error obteniendo un servicio'
            }
        )
    }
}

//CREATE A SERVICE

const crearUnServicios = async (req, res) => {

    try {

        const body = req.body
        // console.log({ body })

        const servicioInstanciado = new Servicios(body)


        const resp = await servicioInstanciado.save()


        res.status(201).json(
            {
                ok: true,
                msg: 'Crear Servicio',
                resp
            }
        )

    } catch (error) {

        console.log(error)

        res.status(500).json(
            {
                ok: false,
                msg: 'Error al Crear un Servicio'
            }
        )

    }


}
//UPDATE A SERVICE BY ID

const actualizarUnServicioPorId = async (req, res) => {
    try {
        //TODO: Obtener el id
        const { id } = req.params;
        // TODO: obtener el body
        const body = req.body;
        // TODO:comprobar que body existe
        // TODO comprobar, si no existe -> 404
        const servicioUpdate = await Servicios.findByIdAndUpdate(id, body, { new: true });
        // TODO consultar a la bbdd si existe un documento con ese id
        if (!servicioUpdate) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontro para actualizar'
            });
        }
        // TODO: si existe hago la consulta y actualizo
        res.status(200).json({
            ok: true,
            msg: 'Actualizando servicio',
            servicio: servicioActualizado
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al actualizar servicio'
        });
    }
};

//DELETE A SERVICE BY ID

const eliminarUnServicioPorId = async (req, res) => {
    try {
        //TODO: Obtener el id
        const { id } = req.params;
        // TODO consultar a la bbdd si existe un documento con ese id
        const deleteServicio = await Servicios.findByIdAndDelete(id);
        if (!deleteServicio) {
            // TODO comprobar, si no existe -> 404
            return res.status(404).json({
                ok: false,
                msg:'No se encuetra el archivo a eliminiar.'
            })
        }
        // TODO: si existe hago la consulta y elimino
        res.status(200).json({
            ok:true,
            msg:'Servicio eliminado.'
        });
    }
    catch(error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: "No se pudo acceder eliminar."
        })
    }    
}



module.exports = {
    traerTodosLosServicios,
    traerUnServicioPorId,
    crearUnServicios,
    actualizarUnServicioPorId,
    eliminarUnServicioPorId
}



/* 

    const crearServicio=()=>{
        
        await obtener los datos del servicios que queremos crear

        validar y sanitizar los datos

        conectar con la bbdd y comprobar .....

       await almacenar en bbdd


        res.json({
            succes:ko,
            msg:sdf,
            sdadf
        })
        

    }

*/
