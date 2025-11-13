import express from 'express'
import "dotenv/config";
import cors from "cors";

//App Config
const app = express();
const port = 3000;
app.use(cors());

// Middlewares

app.use(express.json());

//API Endpoints







app.listen(port, ()=>{
    console.log('Server is connected at' +port)
})