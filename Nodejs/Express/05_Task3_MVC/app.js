import dotenv from "dotenv";
dotenv.config({quiet:true});

import express from "express";
import { connectDB } from "./config/database.js";
import bookRoutes from "./routes/book-routes.js";

const app = express();
const PORT = 9000;

connectDB();
app.use(express.json());
app.use("/v1/api",bookRoutes);

app.get("/",(req,res)=>{
    // console.log(process.env.PORT);
    
    res.send("hii");
})

app.listen(PORT,(err)=>{
    if(err) console.log(err,"error during server connecting ");

    console.log("server is running on ",PORT);
       
})