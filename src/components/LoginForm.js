import React, { useState } from 'react'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import Password from './Password';
import { Link } from 'react-router-dom';
const LoginForm = () => {
    const [gotoPassword, setGotoPassword] = useState('');
    const handleTabChange = (tab) => {
        setGotoPassword(tab);
    }
  
    return (
        <>
            <h2>login</h2>
            <div className="login_form">
                <form action="" className="login_forms">
                      {gotoPassword==='passwordfilled'&&(
                        <Password/>
                      )}
                      {gotoPassword!='passwordfilled'&&(
                        <div className="columnfull">
                        <label htmlFor="">Email/Mobile Number <span className="pink">*</span> </label>
                        <input type="text" name="" id="" />
                    </div>
                      )}
                   
                    <div className="flex_box">
                        <div className="col_50">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">remember me</label>
                        </div>
                        <div className="col_50">
                            <Link to='/forgotpassword'><h5 className='underline'>lost your password?</h5></Link>
                        </div>
                    </div>
                    <button type='button' className={gotoPassword === 'passwordfilled' ? 'btn_pink active w-100' : 'btn_pink w-100'} onClick={() => handleTabChange('passwordfilled')}>continue</button>
                    <h6>don’t have an account <span className="underline">sign up using</span></h6>
                    <button className="btn_blue w-100"><i><FaFacebook /></i>login with facebook</button>
                    <div className="before_line"><h6>or</h6></div>
                    <button className="btn_black w-100"><i><FaGoogle /></i>login with google</button>

                </form>
            </div>
        </>
    )
}

export default LoginForm