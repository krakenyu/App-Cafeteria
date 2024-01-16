import CafeteriasModel  from '../model/modelCafeterias' ;
import {Response, Request} from 'express'

abstract class CafeteriasController {
    static async getAll(req: Request, res: Response){
        const allCafeterias = await CafeteriasModel.getAll();
        res.status(200).json(allCafeterias)
    }
    static async getByName(req: Request, res: Response){
        const {nombre} = req.params
        const findCafeteria = await CafeteriasModel.getByName(nombre)
        console.log(findCafeteria) 
        if(!findCafeteria){return  res.status(400).json({message:'Cafeteria no encontrada',})
    }
        return res.status(302).json({message:"Cafeteria encontrada",findCafeteria}) 
    
    }
    static async createCafeteria(req: Request, res: Response){
        const {nombre, descripcion, ubicacion} = req.body
        const newCafeteria = await CafeteriasModel.newCafeteria({nombre, descripcion, ubicacion});
        console.log({nombre, ubicacion, descripcion})

        if(!newCafeteria)res.status(404).json({message:" something went wrong"})
        res.status(201).json({message:'Created Successfully', newCafeteria})
 
    }
} 
  /*  async function  paraPruebas() {
    
    const encontrarCafeteria =  await CafeteriasController.("Kaffein")

    
}  
paraPruebas()   */
export default CafeteriasController