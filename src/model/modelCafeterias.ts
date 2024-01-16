import db from '../databases/cafeterias.json';
import { writeFile } from 'jsonfile'

const dbCafeterias = db.Cafeterias
 // hacer requerimientos con zod

abstract class CafeteriasModel{

        private static async writeDB() {
		return writeFile('../databases/cafeterias.json', db);
	}
        static async getAll() {
		return db;
	}

        static async getByName(name:string) {

        for(let i = 0; i < dbCafeterias.length; i ++){
            if(dbCafeterias[i].nombre.toLowerCase() === name.toLowerCase()) return dbCafeterias[i]
        }

    }
        static async newCafeteria(obj : any) {
        const {nombre, ubicacion, descripcion} = obj;
        //console.log({nombre, ubicacion, descripcion})
            
        const find = await this.getByName(nombre)
        console.log("buscando cafeteria con el mismo nombre",nombre);
        
        if(find) return "Cafeteria already exist"
            dbCafeterias.push(obj);
            await this.writeDB()
            
            console.log("cafeteria creada")
        return `Cafeteria ${nombre} creada correctamente`
    }
        
}
 // Llamada a la función deleteCafeteria
 /*   async function paraPruebas() {
     const result = await CafeteriasModel.newCafeteria("Raiz","Buen viaje 822", "nueva cafeteria de mano de diego lobo");

} 
paraPruebas()  */ 
export default CafeteriasModel
/* async async UpdateCafeteria(nombre: string) {
    
    const encontrarCafeteria = dbCafeterias.find((cafe: any) => cafe.nombre == nombre)

    if(encontrarCafeteria)
    
} */
