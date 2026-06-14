import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express from "express";
import router from "./routes/todo.routes";
import connectDB from "./config/db";


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/todos',router);

const PORT = process.env.PORT || 3000;

//  process.env.PORT || 3000;

connectDB().then(()=>{
    app.listen(PORT , ()=>{
        console.log(`Server is running on port ${PORT}`);
    })
})