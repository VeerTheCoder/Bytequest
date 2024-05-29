"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList.js';
import Navbar from '../components/Navbar';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching the products', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <h1>All Products</h1>
      <ProductList products={products} />
    </>
  );
};

export default HomePage;
