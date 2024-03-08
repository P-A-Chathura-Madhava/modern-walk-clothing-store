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

const getWomensProducts = async () => {
  const response = await axios.get(`https://fakestoreapi.com/products/category/women's%20clothing`);
  return response.data;
};

const getMixedProducts = async () => {
  const mens = await axios.get(`https://fakestoreapi.com/products/category/men's%20clothing?limit=2`);
  const mensData = mens.data;
  const womens = await axios.get(`https://fakestoreapi.com/products/category/women's%20clothing?limit=2`);
  const womensData = womens.data;
  const data = mensData.concat(womensData);
  return data;
};

const productService = {
  getProducts,
  getProductLimited,
  getMensProducts,
  getWomensProducts,
  getMixedProducts
};

export default productService;
