import dotenv from "dotenv";
// dotenv.config();

import  express  from "express";
import mongoose from "mongoose";
import User from "./models/model.js";
import cors from 'cors';
import cookieParser from "cookie-parser";
import userauthenticate from "./routes/auth-routes.js";
import bodyParser from "body-parser";


const app=express();
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            
  optionSuccessStatus:200
}
app.use(cors(corsOptions));


app.use(cookieParser());
app.use(express.json());
dotenv.config();
const MONGO_URI = 'mongodb+srv://priyavarshneycsaiml21:l5m2GWwJhmMjHz84@cluster0.ntibwjv.mongodb.net/Ayurvedic-we?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to mongodb');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });
  
  app.use(express.json());
  const PORT = process.env.PORT;

  app.listen(3001,()=>{
    console.log(`server is running `);
  })
            
app.use("/api/user",userauthenticate);
