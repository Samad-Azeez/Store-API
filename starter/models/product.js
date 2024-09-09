import { mongoose } from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price'],
    },
    image: {
        type: String,
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