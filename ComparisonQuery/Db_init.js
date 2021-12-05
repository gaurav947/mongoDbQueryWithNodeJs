const mongoose = require('mongoose');

const db = "mongodb://127.0.0.1:27017/odi";
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true}).then((sucess)=>{
    console.log("Database Connected")
})
.catch((err)=>{
    console.log("Error while connect to database",err);
})