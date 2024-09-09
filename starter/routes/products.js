import express from "express";

export const products = express.Router();

products.get("/", (req, res) => {
    res.json({ message: "Products route" });
});