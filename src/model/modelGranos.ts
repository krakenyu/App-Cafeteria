import dbGranos from '../databases/granos.json'
import { writeFile } from 'jsonfile'

const dbG = dbGranos.Granos

abstract class GranosModel{
    private static async writeDB() {
		return writeFile('../databases/granos.json', dbGranos);
	}
    static async getAll(){
        return dbG;
    }
    static async getByTostador(tostador: string){
        for(let i =0; i<dbG.length;i++){
            if(dbG[i].Tostador == tostador){
             return dbG[i]
            }
            return "Tostador no encontrado"
        }
    }
    static async newGrano(obj:any){
        const {tostador, tipo, instagram} = obj
        for(let i=0; i < dbG.length;i++){
            if(dbG[i].Tostador == tostador){
                return "Ya existe un tostador con ese nombre"
            }
            dbG.push({
            Tostador: tostador,
            Tipo: tipo,
            Instragram: instagram
            })
            this.writeDB()
        }
    }
}

export default GranosModel