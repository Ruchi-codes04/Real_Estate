import dotenv from "dotenv"
import connectDB from "./config/db.js"
import express from 'express'
import cors from "cors";

dotenv.config({
    path: './.env'
})



//App Config
const app = express();
const port = 3000;
app.use(cors());

connectDB()

// Middlewares

app.use(express.json());

//API Endpoints







app.listen(port, ()=>{
    console.log('Server is connected at :' +port)
})