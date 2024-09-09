import express from 'express';
import 'dotenv/config'; // Load environment variables from a .env file into process.env
import 'express-async-errors';
import { products } from './routes/products.js'; // products router
import { connectDB } from './db/connect.js'; // Database connection
import { notFound } from "./middleware/not-found.js"; //404 handler
import { errorHandlerMiddleware } from "./middleware/error-handler.js"; //error handler middleware

const app = express();
const port = process.env.PORT|| 3000; // Set the port to the PORT environment variable or 3000

// middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
express.static('public'); // Serve static files

// routes
app.use('/api/v1/products', products); // products router

// 404 handler
app.use(notFound); // Use notFound middleware for handling 404 errors

// error handler middleware
app.use(errorHandlerMiddleware);

// Start the server and connect to the database
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

start(); // Run application