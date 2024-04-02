import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Topbar from './Topbar'
import HeaderBanner from '../HeaderBanner'
import '../css/Listing.css'
import ProductHead from '../ProductHead'
const ProductListing = () => {
    return (
        <>
            <Header />
            <HeaderBanner/>
            <section className="productslisting">
            <div className="container">
            <div className="listing-inner">
            <div className="flex_box">
              <div className="col_25">
              <Topbar />
              </div>
              <div className="col_75">
                    <div className="listingbody">
                    <ProductHead/>
                    </div>
              </div>
            </div>
            </div>
            </div>
            </section>
          
            <Footer />
        </>
    )
}

export default ProductListing