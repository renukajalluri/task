const express = require("express");
const mongoose = require('mongoose')
const app = express();

const dotenv = require("dotenv");
const authRoute = require("./routes/auth")
const taskRoute = require("./routes/task")
dotenv.config()

app.use(express.json({extended:true}));

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    },(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("Connected to MongoDB");
        }
   
});

app.use("/auth",authRoute)
app.use("/task",taskRoute)

app.listen(process.env.PORT || 5000,(err)=>{
    if(err){
     console.log(err);
    }else{
     console.log("server is listening on port 5000")
    }
 })