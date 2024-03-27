const mongoose=require("mongoose");

const connectDB=(uri)=>{
    //console.log("connect Database");
    return mongoose.connect(uri,{
    });
};

module.exports=connectDB;