require("dotenv").config();

const connectDB=require("./db/connect");
const product=require("./models/product");
const productJson=require("./products.json");


const start=async ()=>{
    try {
        await connectDB(process.env.MONGOBD_URL);
        await product.deleteMany();
        await product.create(productJson);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
};

start();