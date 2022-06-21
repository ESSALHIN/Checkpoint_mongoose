const Product=require('../models/Product');


exports.addProduct=async(req,res)=>{
    const {typeproduct,size,color}=req.body
    try {
        //check product exits
        const found=await Product.findOne({typeproduct})
        if (found){
            return res.status(400).send("product already exist!!")
        }
        const product=new Product({
            typeproduct,size,color
        })
        await product.save();
        res.status(201).send({ msg:"product created", product})
    } catch (error) {
        res.status(500).send("server error")
        
    }
}
    exports.getAllProducts=async(req,res)=>{
        try {
            const products=await Product.find()
            res.status(200).send({msg:"all products",products})
        } catch (error) {
            res.status(500).send("server error")
            
        }
    }

    exports.deleteProduct=async(req,res)=>{
        const {id}=req.params
        try {
            await Product.findByIdAndDelete(id)
            res.status(200).send("product deleted...")
        } catch (error) {
            res.status(500).send("server error")
        }
    }
    exports.updateProduct=async(req,res)=>{
        const {id}=req.params
        try {
            const updateProduct=await Product.findByIdAndUpdate(id,{$set:{...req.body}},{new:true})
            res.status(200).send({msg:"product updated",updateProduct})
        } catch (error) {
            res.status(500).send("server error")
        }
    }
    exports.getOneProduct=async(req,res)=>{
        const {id}=req.params
        try {
            const product=await Product.findById(id)
            res.status(200).send(product)
        } catch (error) {
            res.status(500).send("server error")
        }
    }