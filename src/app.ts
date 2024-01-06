import  express,{json}  from "express";
import helmet from 'helmet'
import cafeteriaRouter from "./routes/routerCafeterias";

const app = express()

app.use(json());
app.use(helmet());

app.use('v1/api', cafeteriaRouter)

app.all('*', )



