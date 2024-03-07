import React from 'react'
import Product_Compo from '../Product_Compo'

const Related_Product = () => {
  return (
    <>
    <section className="related_products">
        <div className="container">
            <h2>related products</h2>
           <Product_Compo/>
        </div>
    </section>
    </>
  )
}

export default Related_Product