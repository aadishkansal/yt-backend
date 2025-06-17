import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
const app=express();

//used for middlewares app.use()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));

// data acception through json
app.use(express.json({limit:"16kb"}))

//data through url
app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}));

//data through img / pdf etc 
app.use(express.static("public"));

app.use(cookieParser());





export {app}