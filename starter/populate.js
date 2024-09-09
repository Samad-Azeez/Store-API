import 'dotenv/config'; // Load environment variables from .env into process.env
import { connectDB } from './db/connect.js'; 
import { product_model } from './models/pproduct.sjs'; // Import Product model
import jsonProducts from './products.json' assert { type: 'json' }; // Import products data from JSON file

// Asynchronous function to populate the database with products
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI); // Connect to MongoDB
        console.log('Database connected successfully ...');
    
        await product_model.deleteMany(); // Delete existing products
        console.log('Existing products deleted...');
    
        await product_model.create(jsonProducts, { runValidators: true }); // Insert new products
        console.log('New products inserted...');

        process.exit(0); // Exit on success
    } catch (error) {
        console.error(error);
        process.exit(1); // Exit on error
    }
}

// Execute start function to populate database
start();
