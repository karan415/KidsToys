import React, { useState } from 'react'
import OfferData from './OfferData'
const Offer = () => {
  const [offerData, setOfferData] = useState(OfferData)
  return (
    <>
      <div className="offer_page bg_white shadow">
        <h4 className='text-center'><span className="light">deal</span> of the day</h4>
        <div className="flex_box">
          {offerData.map((item,index) => {
            return (
              <>
                <div className="col_25" id={item.id}>
                <div className="offer_img"><img src={item.offerimg} alt="" /></div>
                  <div className="productimg">
                  
                    <img src={item.productimg} alt="" />
                    
                  </div>
                  <div className="product_description">
                    <h5>{item.productname}</h5>
                    <h5><span className='light'>{item.price.before}</span>{item.price.after}</h5>
                    <button className="btn_pink">{item.button}</button>
                  </div>
                </div>
              </>
            )
          })}

        </div>
      </div>
    </>
  )
}

export default Offer