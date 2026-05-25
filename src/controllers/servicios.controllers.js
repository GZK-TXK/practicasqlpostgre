const Servicios = require('../models/servicio.model')
const pool = require('../config/db');
const queriesService = require('../models/queries')

const serviciosController = {
    crearTodosLosServicios= async (req, res) => {
        try {
            const resp = await pool.query(queryService.getAll);
            const servicios = resp.rows;
            if (servicios.length === 0) {
                return res.status(404).json({
                    ok: true,
                    msg: "No hay servicios",
                    servicios: []
                });
            }
            res.status(201).json({
                ok: true,
                msg: "Cargando servicios",
                servicios
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                ok: false,
                msg: "Error en el servidor",
            })
        }
    traerUnServicioPorId=async (req,res)=>{
        try{
            const { id }= req.params;
            const resp= await pool.query(queryService.getById)
            const servicio= res.rows[0];
            if(!servicio){
                res.status(404).json({
                    ok:false,
                    msg:"Eso no esta aqui",
                })
            } res.status(201).json({
                ok:true,
                msg:"Ahi tienes.",
                servicio
            })
        }catch(error){
            console.log(error)
            res.status(500).json({
                ok:false,
                msg:"Se ha escacharrado la cacharra"
            })
        }
    }
    actualizarunServicioPorID= async (req,res)=>{
        try{
            const { id }= req.params;
            const { servicios, descripcion, precio}= req.body;

            const queryUpdate= 'UPDATE servicios SET servicios=1$, descripcion=2$, precio=3$, id_servicios=$4'
            const resp= await pool.query(queriesService.update)
            const servicioUpdate= resp.row[0];
            if(!servicioUpdate){
                res.status(404).json({
                    ok:false,
                    msg:"Aqui nadie ha hablado de esas cosas"
            });
            }
            res.status(201).json({
            ok:true,
            msg:"Poniendo al dia las cosicas",
            servicioUpdate
            }); 
        }catch(error){
            console.log(error)
                res.status(500).json({
                    ok: false,
                    msg:"Esto no chuta.",
                });
            }
    }
    eliminarUnServicioPorId= async (req,res)=>{
        try{
            const { id }=req.param;
            const resp= await pool.query(queriesService.delete,[id])
            if(resp.length===0){
                res.status(404).json({
                    ok:false,
                    msg:"Aqui no esta",
                });
            res.status(201).json({
                ok:true,
                msg:"El servicio ${ id } se ha mandado a tomar por culo."
            })
            }
        }catch (error){
            console.log(error)
            res.status(500).json({
                ok:false,
                msg:"Se ha descojonado el asunto",
            });
        }
    }
}}
