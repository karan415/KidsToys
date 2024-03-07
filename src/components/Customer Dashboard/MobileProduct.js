import React, { useState } from 'react'
import orderData from './OrdersTabel'

const MobileProduct = () => {
  const [tabelData, setTabelData] = useState(orderData)
  return (
    <>
                {tabelData.map((item, index) => {
                  return (
                    <>
                      <ul id={item.id} key={index}>
                        <li><div className="product_des"><img src={item.product.img} alt="" />
                          <h4>{item.product.title}</h4></div></li>
                        <li>{item.address}</li>
                        <li>order id:{item.orderId}</li>
                        <li>date:{item.date}</li>
                        <li>status:{item.status}</li>
                      </ul>
                    </>
                  )
                })}
    </>
  )
}

export default MobileProduct
