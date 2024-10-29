import Product from "@/models/Product";

export const createProduct = async (req) => {
  const { title, description, color, size, status, price, isAvailable } = req.body;
  const { role } = req.user;

  if (role !== "admin") {
    throw new Error("Admin access required");
  }

  const newProduct = new Product({ title, description, color, size, status, price, isAvailable });
  await newProduct.save();
  return newProduct;
};
