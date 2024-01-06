import db from '../databases/cafeterias.json';
import { writeFile } from 'jsonfile'

const dbCafeterias = db.Cafeterias

abstract class CafeteriasModel{

        private static async writeDB() {
		return writeFile('../databases/cafeterias.json', db);
	}
        static async getAll() {
		return db;
	}

        static async newCafeteria(obj: any) {
        const {nombre, zonaYdireccion, descripcion} = obj;
            
        // hacer requerimientos con zod
        for(let i = 0; i< dbCafeterias.length; i ++){
            if(dbCafeterias[i].Nombre == nombre) return "Cafeteria already exist"
        }
            dbCafeterias.push({
                Nombre: nombre,
                Descripcion: descripcion,
                Ubicacion: zonaYdireccion
            });
            await this.writeDB()
        }

        static async getByName(name:string) {

            for(let i = 0; i< dbCafeterias.length; i ++){
                if(dbCafeterias[i].Nombre == name) return dbCafeterias[i]
            }

            }

        static async deleteCafeteria(nombre:string) {
                const indice = dbCafeterias.findIndex(objeto => objeto.Nombre.toLowerCase() === nombre.toLowerCase() );
              
                if (indice !== -1) {
                    dbCafeterias.splice(indice, 1);
                    console.log(`'${nombre}' eliminado correctamente .`);
                  await this.writeDB()
                } else {
                  console.log(`Objeto con nombre '${nombre}' no encontrado.`);
                }
              }
        
}
 // Llamada a la función deleteCafeteria
/*  async function eliminarCafeteria() {
     const result = await CafeteriasModel.deleteCafeteria(`Kaffein`);

} */

export {CafeteriasModel} 
/* async async UpdateCafeteria(nombre: string) {
    
    const encontrarCafeteria = dbCafeterias.find((cafe: any) => cafe.nombre == nombre)

    if(encontrarCafeteria)
    
} */
