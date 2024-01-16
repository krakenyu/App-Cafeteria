import  express,{json}  from "express";
import helmet from 'helmet'
import cafeteriaRouter from "./routes/routerCafeterias";
//import granosRouter from "./routes/routerGranos";

const app = express()

app.use(json());
app.use(helmet());

app.use('/api/cafeterias', cafeteriaRouter)
/* 
app.use('v1/api/granos', granosRouter) */

/* app.all('*', ) */

export default app