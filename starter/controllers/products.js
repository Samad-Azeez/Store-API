export const getAllProductsStatic = async (req, res) => {
    throw new Error("Testing static error handling");
    // This line won't be executed due to the thrown error
    res.status(200).json({ message: "Products testing route" });
  };
  

export const getAllProducts = async (req, res) => {
    res.status(200).json({ message: "Products route" });
};