import { Router } from "express";
import GranosController from "../controller/controllerGranos";

const granosRouter = Router();

granosRouter.get('/',GranosController.getAllGranos)
granosRouter.get('/', GranosController.getTostador)

granosRouter.post('/new', GranosController.createGrano)
granosRouter.delete('/delete', GranosController.deleteG)

export default granosRouter