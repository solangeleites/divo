import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Layout from '../components/layout/Layout';
import Newsletter from '../components/newsletter/Newsletter';
import Product from '../pages/product/Product';
import Products from '../pages/products/ProductList';
import Home from '../pages/home/Home';
import Cart from '../pages/cart/Cart';
import Login from '../pages/login/Login';
import SignUp from '../pages/signup/SignUp';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />


        <Route path="*" element={<Home />} />
      </Routes>

    </BrowserRouter>
  );
};

export default Router;
