const mongoose=require('mongoose')
const Schema=mongoose.Schema

const productSchema= new Schema({
    typeproduct:{
        type:String,required:true
    },
    size:{
        type:Number, required:true,unique:true
    },

    color:{
        type:String, required:true, unique:true
    }
    
})
module.exports=mongoose.model('Product',productSchema)