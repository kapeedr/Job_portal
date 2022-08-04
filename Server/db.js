const mongoose = require("mongoose");
dbconnect()
async function dbconnect(){
    try{
        await mongoose.connect('mongodb+srv://deepakr:deepak@cluster0.mwk5x.mongodb.net/PORTAL', {useNewUrlParser:true});
        console.log("Mongo db cone success");
    }catch(error){
        console.log("connection failed");
    }
}
module.exports= dbconnect;