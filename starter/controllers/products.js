import {product_model} from "../models/Product.js";

// Get all products with the featured field set to true stically
export const getAllProductsStatic = async (req, res) => {
    const products = await product_model.find({featured: false}); // Get all products with the featured field set to true
    const nbHits = products.length; // Get the number of products returned
    res.status(200).json({ products, nbHits }); // Send the products and the number of hits
  };
  
// get all products dynamically
export const getAllProducts = async (req, res) => {
    const { featured, company, name } = req.query;
    const queryObject = {};
    
    // If the featured query parameter is provided, add it to the query object
    if (featured === 'true') { 
        queryObject.featured = true;
      } else if (featured === 'false') {
        queryObject.featured = false;
    }

    // If the company query parameter is provided, add it to the query object
    if (company) {
        queryObject.company = company;
    }

    // If the name query parameter is provided, add it to the query object
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' };
    }

    // Log the query object to the console
    console.log(queryObject);

    const products = await product_model.find( queryObject ); // Get all products
    const nbHits = products.length; // Get the number of products returned
    res.status(200).json( { products, nbHits } );
};