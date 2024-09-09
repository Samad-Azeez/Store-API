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
    company: {
        type: String,
        required: [true, 'Please enter product company'],
    },
    brand: {
        type: String,
    },
    category: {
        type: String,
    },
    countInStock: {
        type: Number,
        required: [true, 'Please enter product stock'],
    },
    description: {
        type: String,
    },
    rating: {
        type: Number,
        required: true,
    },
    numReviews: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

// Create a Mongoose model for the 'Product' collection using the defined productSchema
export const product_model = mongoose.model('Product', productSchema);