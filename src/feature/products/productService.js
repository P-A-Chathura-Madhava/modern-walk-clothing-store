import axios from "axios";

// Attaching the token ends here

const getProducts = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    return response.data;
};

const getProductLimited = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products?limit=4`);
    return response.data;
};

const getMensProducts = async () => {
  const response = await axios.get(`https://fakestoreapi.com/products/category/men's%20clothing`);
  return response.data;
};

const productService = {
  getProducts,
  getProductLimited,
  getMensProducts
};

export default productService;
