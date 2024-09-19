import { product_model } from '../models/product.js';

// Get all products with the featured field set to true stically
export const getAllProductsStatic = async (req, res) => {
  const products = await product_model.find({}).select('name price'); // Get all products with the featured field set to true
  const nbHits = products.length; // Get the number of products returned
  res.status(200).json({ products, nbHits }); // Send the products and the number of hits
};

// get all products dynamically
export const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields } = req.query;
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
  // console.log(queryObject);

  // If the sort query parameter is provided, sort the products accordingly
  let result = product_model.find(queryObject); // Get all products

  if (sort) {
    const sortList = sort.split(',').join(' '); // Handle comma-separated sort fields like 'name,price'
    result = result.sort(sortList);
  } else {
    result = result.sort('createdAt'); // Sort by creation date if no sort query parameter is provided
  }

  // If the fields query parameter is provided, select only the specified fields
  if (fields) {
    const fieldsList = fields.split(',').join(' '); // Handle comma-separated fields like 'name,price'
    result = result.select(fieldsList); // Select only the specified fields
  }

  const products = await result; //Execute the query and await the result
  const nbHits = products.length; // Get the number of products returned
  res.status(200).json({ products, nbHits });
};
