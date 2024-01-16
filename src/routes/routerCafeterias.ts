import { Router } from "express";
import CafeteriasController from "../controller/controllerCafeterias";


const cafeteriaRouter = Router();


cafeteriaRouter.get('/', CafeteriasController.getAll);
cafeteriaRouter.get('/:nombre', CafeteriasController.getByName);

cafeteriaRouter.post('/new',CafeteriasController.createCafeteria)

//cafeteriaRouter.patch('/update',CafeteriasController.update)

export default cafeteriaRouter