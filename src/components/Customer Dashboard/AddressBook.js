import React, { useState } from 'react'
import Adresses from './AddressData'
import { FaEdit, FaPlus, FaUser } from 'react-icons/fa'
import { SlCallIn } from "react-icons/sl";
const AddressBook = () => {
  const [address, setAddress] = useState(Adresses)
  return (
    <>
      <div className="address_book editprofilebody">
        <div className="addressbook_body">
          <div className="flex_box book_details">
            <div className="col_50">
              <div className="item_add shadow">
                <div className="adress_items flex_box">
                  <div className="name"><h4><i><FaUser/></i>shikha thakur</h4></div>
                  <div className="radio_btn flex_box">
                    <select name="" id="">
                      <option value="">set as default address</option>
                    </select>
                    <input type="radio" name="" id="" />
                  </div>

                </div>
                <div className="address">
                  <p>E 45, Phase-8, Industrial Area, Sector 62, Sahibzada Ajit Singh Nagar, Punjab 160059</p>
                  <div className="flex_box">
                    <h4><i><SlCallIn/></i>+91 78065476564</h4>
                    <h5><FaEdit/></h5></div>

                </div>
              </div>
            </div>
            {address.map((item, index) => {
              return (
                <>
                  <div className="col_50">
                    <div className="item_add shadow">
                      <div className="adress_items flex_box">
                        <div className="name"><h4><i>{item.user}</i>{item.name}</h4></div>
                        <div className="radio_btn flex_box">
                          <input type="radio" name="" id="" />
                        </div>

                      </div>
                      <div className="address">
                        <p>{item.address}</p>
                        <div className="flex_box">
                          <h4><i>{item.number.icon}</i>{item.number.number} </h4>
                          <h5><i>{item.action}</i></h5></div>

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
                <h4>Add new Address</h4>
                </div>
            </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default AddressBook