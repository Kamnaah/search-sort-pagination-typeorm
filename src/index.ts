import express from "express";
import cors from "cors";
import { DataSource, createConnection } from "typeorm";
import { ProductDetails } from "./entities/ProductDetails";
import { getAllData } from './routes/getAllData';
import {searchSortPagination} from './routes/searchSortPagination';
createConnection().then((connection) => {
  const productRep= connection.getRepository(ProductDetails)
  const app = express();
  app.use(express.json());
  app.use(cors());
  //only get all the 50 products----------------
  app.use(getAllData)
  //search , sort , pagination  api-----------------
  app.use(searchSortPagination)
  app.listen(8080, () => {
    console.log("server is listening at port 8080");
  });
});
