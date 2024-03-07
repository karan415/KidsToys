import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import HeaderBanner from '../HeaderBanner'
import ProductInfo from './ProductInfo'
import '../css/Singal.css'
import Related_Product from './Related_Product'
const SingalProduct = () => {
return (
<>
    <Header />
    <HeaderBanner />
    <ProductInfo/>
    <Related_Product/>
    <Footer />
</>
)
}

export default SingalProduct