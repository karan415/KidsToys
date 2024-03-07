import React, { useState } from 'react'
import orderData from './OrdersTabel'
import searchicon from '../images/searchicon.png'
import filtericon from '../images/filter.png'
import MobileProduct from './MobileProduct'

const OrderHistory = () => {
  const [tabelData, setTabelData] = useState(orderData)
  return (
    <>
      <div className="order_history">
        <div className="tabing_head">
          <div className="bg_purple">
            <ul>
              <li>all</li>
              <li>deliverd</li>
              <li>pending</li>
              <li>cancelled</li>
              <li>return</li>
              <li>exchange</li>
            </ul>
          </div>

        </div>
        <div className="tabingfilter_body">
          <div className="filter_form">
            <form action="">

              <div className="searchbox">
                <div className="searchicon">
                  <img src={searchicon} alt="" /></div>
                <input type="search" name="" id="" placeholder='type to filter orders' />
              </div>
              <div className="searchfilters">

                <input type="submit" value="filters" />
                <div className="filter_img">
                <img src={filtericon} alt="" />
                </div>
              </div>


            </form>
          </div>
          <div className="order_detail">
          <div className="onlyMobile"><MobileProduct/></div>
            <table className="allordertabel onlyDesktop">
              <thead>
                <tr>
                 
                 
                  <th>order id</th>
                  <th>date</th>
                  <th>product</th>
                  <th>address</th>
                  <th>price</th>
                  <th>status</th>
                </tr>
              </thead>
              <tbody>
                {tabelData.map((item, index) => {
                  return (
                    <>
                      <tr id={item.id} key={index}>
                      <td>{item.orderId}</td>
                      <td>{item.date}</td>
                        <td><div className="product_des"><h4>{item.product.title}</h4></div></td>
                        <td>{item.address}</td>
                        <td>{item.price}</td>
                        <td>{item.status}</td>
                      </tr>
                    </>
                  )
                })}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderHistory
