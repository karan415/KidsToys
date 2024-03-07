import React from 'react'

const ChangePassword = () => {
  return (
    <>
      <div className="password_updation editprofilebody">
        <div className="updatepassword_body">
          <div className="updataion_from shadow">
            <h4>change your password</h4>
            <h4>user id:<strong>your_id34</strong></h4>
            <form action="">
              <label htmlFor="">old password</label>
              <input type="password" name="" id="" />
              <label htmlFor="">new password</label>
              <input type="password" name="" id="" />
              <label htmlFor="">confirm new password</label>
              <input type="password" name="" id="" />
              <div className="updation_btns">
                    <button type="button" className='btn_borderd'>cancel</button>
                    <button type="button" className='btn_pink'>update password</button>

                    </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChangePassword