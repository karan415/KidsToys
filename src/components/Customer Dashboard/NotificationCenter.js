import React, { useState } from 'react'
import NData from './NotificationData'

const NotificationCenter = () => {
  const [item,seItem]=useState(NData)
  return (
    <>
      <div className="notification_center">
        <div className="bg_white shadow">
        {item.map((curElm,index)=>{
          return(
            <>
            <div className="notification-box" id={curElm.id}>
            <h6>{curElm.title}<strong>{curElm.orderId}</strong></h6>
            <p>{curElm.meseage}</p>
            <h6>{curElm.date}{curElm.day}{curElm.time}</h6>
            </div>
            </>
          )
         
        })}
        
        </div>
      </div>
    </>
  )
}

export default NotificationCenter