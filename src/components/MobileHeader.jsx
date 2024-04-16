import React, { useState } from 'react'
import Logo from '../components/images/logo (2).png'
import vector from './images/Vector (1).png'
import Menus from './Menus'


const MobileHeader = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      <div className='onlyMobile'>
        <div className="flex_box">
          <div className="col_50">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className="col_50 content_end">
            <button className="toggle_btn" ><img src={vector} alt="" onClick={toggleNav} /></button>

          </div>
        </div>
        {isNavOpen && (
          <div className="toggle_items">
            <div className="menues">
              <Menus/>
            </div>
          </div>
        )}
      </div>
     


    </>
  )
}

export default MobileHeader