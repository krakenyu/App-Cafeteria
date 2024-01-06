import {CafeteriasModel}  from '../model/modelCafeterias' ;
import {Response, Request} from 'express'

abstract class CafeteriasController {
    static async createCafeteria(req: Request, res: Response){
        const newCafeteria = CafeteriasModel.newCafeteria(req.body);
        res.status(201).json({message:'Created Successfully', newCafeteria})
    }
    static async getAll(req: Request, res: Response){
        const allCafeterias = await CafeteriasModel.getAll();
        res.status(200).json(allCafeterias)
    }
    static async getByName(req: Request, res: Response){
        const findCafeteria = CafeteriasModel.getByName(req.body)
        if(!findCafeteria) res.status(400).json({message:'Cafeteria no encontrada'})
        res.status(302).json({message:"Cafeteria encontrada", findCafeteria})
    }
    static async delete(req: Request, res: Response){
        const {name} = req.params
        const deleteCafeteria = CafeteriasModel.deleteCafeteria(name)
        res.status(410).json({message: "Cafetería eliminada correctamente", deleteCafeteria})
    }

}

export default CafeteriasController