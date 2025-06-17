// require('dotenv').config({path:'./env'})
import dotenv, { config } from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config({
    path:"./env"
})

connectDB()
.then(() => {
    app.listen(process.env.PATH || 5000 ,()=>{
        console.log(`server is running : ${process.env.PORT}`);
        
    })
    
})
.catch((err) => {
    console.log("mongodb connection failed ", err)
});
