import { Router } from "express";
import CafeteriasController from "../controller/controllerCafeterias";


const cafeteriaRouter = Router();


cafeteriaRouter.get('/', CafeteriasController.getAll);
cafeteriaRouter.get('/', CafeteriasController.getByName);

cafeteriaRouter.post('/new',CafeteriasController.createCafeteria)

//cafeteriaRouter.patch('/update',CafeteriasController.update)

cafeteriaRouter.delete('/delete', CafeteriasController.delete)

export default cafeteriaRouter