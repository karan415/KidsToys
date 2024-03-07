import React, { useState } from 'react';
import OrderHistory from './OrderHistory';
import AddressBook from './AddressBook';
import EditProfile from './EditProfile';
import ShareOrder from './ShareOrder';
import ChangePassword from './ChangePassword';
import Rewards from './Rewards';
import Offer from './Offer';
import ReferralLink from './ReferralLink';
import SaveCards from './SaveCards';
import NotificationCenter from './NotificationCenter';
import CustomProduct from './CustomProduct';
import customerImage from '../images/customer_img.png';
import signoutImage from '../images/signout.png';
import { FaAddressBook, FaBell, FaCcMastercard, FaFirstOrder, FaGift, FaJediOrder, FaShareAltSquare, FaUserEdit, FaUserLock } from 'react-icons/fa';
import { LiaStaylinked } from "react-icons/lia";
import { BiSolidOffer } from "react-icons/bi";
import toggle from '../images/toggle_white.png'
const tabComponents = {
  orderhistory: <OrderHistory />,
  addressbook: <AddressBook />,
  editprofile: <EditProfile />,
  shareorder: <ShareOrder />,
  changepassword: <ChangePassword />,
  rewards: <Rewards />,
  offers: <Offer />,
  links: <ReferralLink />,
  savecards: <SaveCards />,
  notification: <NotificationCenter />,
  productorder: <CustomProduct />,
};

const tabNames = {
  orderhistory: <FaFirstOrder />,
  addressbook: <FaAddressBook />,
  editprofile: <FaUserEdit />,
  shareorder: <FaShareAltSquare />,
  changepassword: <FaUserLock />,
  rewards: <FaGift />,
  offers: <BiSolidOffer />,
  links: <LiaStaylinked />,
  savecards: <FaCcMastercard />,
  notification: <FaBell />,
  productorder: <FaJediOrder />,
};

const Topbar = () => {
  const [activeTab, setActiveTab] = useState('orderhistory');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="topbar">
      <div className="user_information">
        <div className="bg_purple flex_box">
          <div className="col_50">
            <div className="profile_info flex_box">
              <img src={customerImage} alt="Customer" />
              <h5>yash malhotra</h5>
            </div>
          </div>
          <div className="col_50 content_end">
            <div className="onlyMobile">
              <img src={toggle} alt="" onClick={toggleNav} />
              
            </div>
            <div className="user_logout flex_box onlyDesktop">
              <h5>Logout</h5>
              <img src={signoutImage} alt="Sign Out" />
            </div>
          </div>
          {isNavOpen && (<div className="tabing_list ">
              <ul>
                {Object.keys(tabNames).map((tab) => (
                  <li
                    key={tab}
                    className={activeTab === tab ? 'active' : 'togglelist'}
                    onClick={() => handleTabChange(tab)}
                  >
  
                    {tabNames[tab]}{tab}
                  </li>
                ))}
              </ul>
            </div>
   ) }
        </div>
        <div className="navbar_customer">
          <div className="tabing_list onlyDesktop">
            <ul>
              {Object.keys(tabNames).map((tab) => (
                <li
                  key={tab}
                  className={activeTab === tab ? 'active' : 'togglelist'}
                  onClick={() => handleTabChange(tab)}
                >

                  {tabNames[tab]}{tab}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="tabing_body">
          <div className="tab_heading">
            <img src="" alt="" />
            <h4 className=''>{tabNames[activeTab]}{activeTab}</h4>
          </div>
          {tabComponents[activeTab]}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
