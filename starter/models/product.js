import { mongoose } from "mongoose";

const productSchema = new mongoose.Schema({
    image: {
        type: String,
    },
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price'],
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        required: true,
        default: 3.0,
    },
    company: {
        type: String,

        // The enum option restricts the values of this field to specific allowed values
        enum: { 
            // The array of valid company names
            values: ['ikea', 'liddy', 'marcos', 'caressa'],
            // Custom error message when a value outside the enum is provided
            message: '{VALUE} is not supported',
        },
        
        required: [true, 'Please enter product company'],
    },
    countInStock: {
        type: Number,
        required: [true, 'Please enter product stock'],
        default: 0,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
    },
}, { // Add timestamps to the schema to track creation and update times
    timestamps: true,
});

// Create a Mongoose model for the 'Product' collection using the defined productSchema
export const product_model = mongoose.model('Product', productSchema);