import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Topbar from './Topbar'

const ProductListing = () => {
    return (
        <>
            <Header />
            <section className="productslisting">
            <div className="container">
            <div className="flex_box">
              <div className="col_25">
              <Topbar />
              </div>
              <div className="col_75">
              
              </div>
            </div>
            </div>
            </section>
          
            <Footer />
        </>
    )
}

export default ProductListing