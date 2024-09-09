import express from "express";
import { getAllProducts, getAllProductsStatic } from "../controllers/products.js";

export const products = express.Router();

products.route('/')
.get(getAllProducts);

products.route('/static')
.get(getAllProductsStatic);