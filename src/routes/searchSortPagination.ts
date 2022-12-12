import express  from "express";
import {createConnection} from 'typeorm';
import {ProductDetails} from '../entities/ProductDetails';
const router=express.Router();
createConnection().then(async (connection) => {
  const productRep = connection.getRepository(ProductDetails);
router.get("/api/allproductfilter",async(req,res)=>{
  const builder = productRep.createQueryBuilder('products');
  if(req.query.s){
    builder.where("products.title LIKE :s OR products.description LIKE :s", {s:`%${req.query.s}%`})
  }
  let sort: any= req.query.sort;
  if(sort){
    builder.orderBy("products.price", sort.toUpperCase())
  }
  let page: any= parseInt(req.query.page as any) || 1;
  const perPage=10;
  const total=await builder.getCount();
    builder.offset((page-1)*perPage).limit(perPage);
 
  res.send({
    data: await builder.getMany(),
    total,
    page,
    last_page: Math.ceil(total/perPage)
  });
  })
});
export {
  router as searchSortPagination
}