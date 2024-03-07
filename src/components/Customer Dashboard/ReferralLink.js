import React from 'react'
import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter } from 'react-icons/fa'
import win from '../images/win_images.png'
const ReferralLink = () => {
  return (
    <>
      <div className="referral_links">
        <div className="bg_white shadow">
          <img src={win} alt="" />
          <h2>Hey user, good things should be shared. If you like your recent purchase, refer it to a friend, and you both will get 50 %.</h2>
          <h1><strong>$10.00</strong> earned</h1>
          <h4>your unique refrral link</h4>
          <form action="">
          <div className="inupts flex_box">
            <input type="text" className="w-100" placeholder='https://www.w3.org/Provider/Style/dummy.html' />
            <button className="btn-pinkish">copy link</button>
            </div>
            <div className="emails flex_box">
            <input type="email" className="" placeholder='enter your friends email address' />
            <button className="btn_purple">share link</button>
            </div>

            <div className="cart_login">
              <h4>your credits will automatically  be applied in <span className="light">your cart</span></h4>
            </div>
          </form>
          <div className="sharedlink">
            <div className="before_line"><h6>or</h6></div>
            <button className="btn_blue w-100 "><i><FaFacebook /></i>login with facebook</button>
            <button className="btn_linear "><i><FaInstagram /></i>login with instagram</button>
            <button className="btn_ligh_green "><i><FaWhatsapp /></i>login with whatsapp</button>
            <button className="btn_twitter "><i><FaTwitter /></i>login with twitter</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReferralLink