import React, { useState } from 'react'

const Register = () => {
    const  [fillType,setFillType]=useState('password');
    const handelChange=(type)=>{
        setFillType(type);
    }

    return (
        <>
        <h2>register</h2>
            <div className="register_form login_form">
                <form action="">
                    <div className="columnfull">
                        <label htmlFor="">Email/Mobile Number <span className="pink">*</span> </label>
                        <input type="email" name="" id="" />
                    </div>
                    <div className="columnfull">
                        <label htmlFor="">your name <span className="pink">*</span> </label>
                        <input type="text" name="" id="" />
                    </div>
                    {fillType === 'password' && (
                        <div className="columnfull">
                        <label htmlFor="">password <span className="pink">*</span> </label>
                        <input type="password" name="" id="" />
                    </div>

                    )}
                    {fillType === 'otp' && (
                        <div className="columnfull">
                        <label htmlFor="">OTP <span className="pink" >*</span> </label>
                        <input type="number" name="" id="" />
                    </div>

                    )}
                    
                    <button type='button' className={fillType==='password' ?'btn_normal w-100':'btn_normal w-100'} onClick={(e)=>{handelChange('password')}} >Register with Password</button>
                    <button type='button' className={fillType==='otp' ?'btn_pink w-100':'btn_pink w-100'} onClick={()=>{handelChange('otp')}}>Register with OTP</button>

                </form>
            </div>
        </>
    )
}

export default Register