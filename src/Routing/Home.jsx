import React from 'react'
import '../App.css'
import Banner from '../components/Banner'
import Catogary from '../components/Catogary'
import NewToys from '../components/NewToys'
import Products from '../components/Products'
import Character_shop from '../components/Character_shop'
import Kids_Section from '../components/Kids_Section'
import Testimonial from '../components/Testimonial'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Product from '../components/Product'
const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Catogary />
      <NewToys />
      <Products />
      <Character_shop />
      <Kids_Section />
      <Product />
      <Testimonial />
      <Blogs />
      <Footer />
    </>
  )
}

export default Home