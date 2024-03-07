import React, { useState } from 'react'
import CardData from './CardData'
import { FaPlus } from 'react-icons/fa'
const SaveCards = () => {
  const [data, setData] = useState(CardData)
  return (
    <>
      <div className="cards">
        <div className="flex_box wraped">
          {data.map((item) => {
            return (
              <>
                <div className="col_50">
                  <div className="card_box shadow">
                    <div className="cards_topbar flex_box">
                      <div className="card1 item1  flex_box">
                        <img src={item.image} alt="" />
                        <h6>{item.card}</h6>
                      </div>
                      <div className="card2">
                        <h6>{item.expirationdate}</h6>
                      </div>
                    </div>
                    <div className="card_body">
                      <div className="item1 flex_box">
                        <h6 className='col_25'>{item.title}</h6>
                        <h6 className='col_75'>{item.name}</h6>
                      </div>
                      <div className="item2 flex_box">
                        <h6 className='col_25'>{item.billing}</h6>
                        <p className='col_75'>{item.billingDetails}</p></div>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
          <div className="col_50">
          <div className="item_add shadow">
          <div className="new">
              <FaPlus/>
              <h4>Add new Payment method</h4>
              </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SaveCards