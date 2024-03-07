import React, { useState } from 'react'

const Password = () => {
    const [useMethod, setUseMethod] = useState('password')
    const handleMethod = (method) => {
        setUseMethod(method)
    }
    return (
        <>
            <div className="tabing_password">
                <ul className='flex_box'>
                    <li className={useMethod === 'password' ? 'active underline ' : ''} onClick={() => { handleMethod('password') }}>use password</li>
                    <li className={useMethod === 'otp' ? ' underline' : ''} onClick={() => { handleMethod('otp') }}>use otp</li>
                </ul>
                <div className="tabing_body">
                    {useMethod === 'password' && (
                        <div className="columnfull">
                            <label htmlFor="">password <span className="pink">*</span> </label>
                            <input type="password" name="" id="" />
                        </div>

                    )}
                    {useMethod === 'otp' && (
                        <div className="columnfull">
                            <label htmlFor="">OTP <span className="pink" >*</span> </label>
                            <input type="number" name="" id="" />
                        </div>

                    )}
                </div>
            </div>
        </>
    )
}

export default Password