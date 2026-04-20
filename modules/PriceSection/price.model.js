import mongoose from "mongoose";


const priceSchema = mongoose.Schema({

    name: {
        type:String
    },
    price: {
        type:String
    },
    priceType: {
       type:String
    },
    des: {
         type:String
    }



})


const Price = mongoose.model("Price", priceSchema)

export default Price