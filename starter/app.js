import express from 'express';
import { products } from './routes/products.js';
import { connectDB } from './db/connect.js'; // Connect to the database
import 'dotenv/config'; // Load environment variables from a .env file into process.env
import { notFound } from "./middleware/not-found.js";
import { errorHandlerMiddleware } from "./middleware/error-handler.js"; // Import the error handler middleware

const app = express();
const port = process.env.PORT|| 3000; // Set the port to the PORT environment variable or 3000

// middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
express.static('public'); // Serve static files from the public directory

// routes
app.use('/api/v1/products', products); // Use the products router for the /api/v1/products route

// not found middleware
app.use(notFound); // Use notFound middleware for handling 404 errors

// error handler middleware
app.use(errorHandlerMiddleware);

// Start the application by connecting to the database and listening on the specified port
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI); // Connect to MongoDB using the MONGO_URI environment variable
        console.log('Database connected successfully ...'); // Log successful connection
        
        app.listen(port, () => { // Start the server
            console.log(`Server is running on port ${port} ...`); // Log server start
        });
    } catch (error) {
        console.error(error); // Log any connection errors
    }
};

start(); // Invoke the start function to run the application