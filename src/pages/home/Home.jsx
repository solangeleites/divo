import React from 'react'
import Categories from '../../components/categories/Categories'
import Footer from '../../components/footer/Footer'
import Layout from '../../components/layout/Layout'
import Newsletter from '../../components/newsletter/Newsletter'
import Products from '../../components/products/Products'
import Slider from '../../components/slider/Slider'



const Home = () => {
  return (
    <>
    <Layout />
   <Slider />
   <Categories />
   <Products />
   <Newsletter />
   <Footer />
   </>
  )
}

export default Home