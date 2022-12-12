import express  from "express";
import {ProductDetails} from '../entities/ProductDetails';
const router=express.Router();

router.get("/api/allproduct",async(req,res)=>{
  try{
    const products= await ProductDetails.find();
    res.status(200).json({
      status: 'success',
      products: products
    })
  }catch(e){
    res.status(400).json({
      status: 'failed',
      message: e.message
    })
  }

})

export {
  router as getAllData
}