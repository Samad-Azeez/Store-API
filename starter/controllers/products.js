import {product_model} from "../models/Product.js";

// Get all products with the featured field set to true stically
export const getAllProductsStatic = async (req, res) => {
    const products = await product_model.find({featured: true}); // Get all products with the featured field set to true
    const nbHits = products.length; // Get the number of products returned
    res.status(200).json({ products, nbHits }); // Send the products and the number of hits
  };
  
// get all products dynamically
export const getAllProducts = async (req, res) => {
    const products = await product_model.find(req.query); // Get all products
    const nbHits = products.length; // Get the number of products returned
    res.status(200).json( { products, nbHits } );
};