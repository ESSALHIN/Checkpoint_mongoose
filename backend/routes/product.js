const res = require("express/lib/response")

const express=require('express');
const { addProduct, getAllProducts, deleteProduct, updateProduct, getOneProduct } = require("../controllers/productController");
const router=express.Router()



//add new product
//method post
//req.body
router.post('/addproduct',addProduct);
//get all products
//method get
router.get('/allproducts',getAllProducts)

//remove product
//method delete
//req.params
router.delete('/deleteProduct/:id',deleteProduct)

//update product
// method put
//req.body
//req.params
router.put('/updateProduct/:id',updateProduct);

//get one product
//method get
//req.params
router.get('/getOneProduct/:id',getOneProduct )
module.exports=router;