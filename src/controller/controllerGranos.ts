import GranosModel from "../model/modelGranos"
import { Response, Request } from "express"


abstract class GranosController {
    static async createGrano(req: Request, res: Response){
        const nuevoGrano = await GranosModel.newGrano(req.body)
        if(nuevoGrano)
        return res.status(201).json({message: "creado correctamente"})
    }
    static async getAllGranos(req: Request, res: Response){
        const all = await GranosModel.getAll()
        return res.status(200).json(all)
    }
    static async getTostador(req: Request, res: Response){
        const {tostador} = req.params
        const found = await GranosModel.getByTostador(tostador)
        res.status(302).json({message: "Tostador encontrado" ,found})
    }

}

export default GranosController