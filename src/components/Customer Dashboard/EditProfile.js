import React from 'react'
import customer from '../images/customer_img.png'
const EditProfile = () => {
  return (
    <>
      <div className="edit_profile">
        <div className="editprofilebody">
          <div className="flex_box edituserprofile">
            <div className="col_33 personal_info">
              <div className="profile_infor">
                <h4>profile picture</h4>
                <div className="edit_box">
                  <div className="profile_info ">
                    <img src={customer} alt="" />
                    <h5>yash malhotra</h5>
                  </div>
                  <input type="file" name="" id="" placeholder='upload new image'  />
                </div>
              </div>
            </div>
            <div className="col_70">
              <div className="update_form">
                <div className="personal_box ">
                  <h4>personal details</h4>
                  <form action="">
                    <div className="flex_box">
                      <div className="col_50">
                        <label htmlFor="">full name</label>
                        <input type="text" name="" id="" placeholder='enter your name here' />
                      </div>
                      <div className="col_50">
                        <label htmlFor="">email</label>
                        <input type="email" name="" id="" placeholder='your email address' />
                      </div>
                    </div>
                    <div className="flex_box">
                      <div className="col_50">
                        <label htmlFor="">mobile number</label>
                        <input type="number" name="" id="" placeholder='enter your mobile number' />
                      </div>
                      <div className="col_50">
                        <label htmlFor="">date of birth</label>
                        <input type="email" name="" id="" placeholder='your date of birth' />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="personal_box address">
                  <h4>address</h4>
                  <form action="">
                    <div className="flex_box">
                      <div className="col_50">
                        <label htmlFor="">Street</label>
                        <input type="text" name="" id="" placeholder='enter street' />
                      </div>
                      <div className="col_50">
                        <label htmlFor="">City</label>
                        <input type="email" name="" id="" placeholder='enter city' />
                      </div>
                    </div>
                    <div className="flex_box">
                      <div className="col_50">
                        <label htmlFor="">enter state</label>
                        <input type="text" name="" id="" placeholder='enter your name here' />
                      </div>
                      <div className="col_50">
                        <label htmlFor="">Zip Code</label>
                        <input type="email" name="" id="" placeholder='enter Zip Code' />
                      </div>
                    </div>
                    <div className="updation_btns">
                    <button type="button" className='btn_borderd'>cancel</button>
                    <button type="button" className='btn_pink'>update</button>

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProfile