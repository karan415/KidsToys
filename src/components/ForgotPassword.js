import React from 'react'
import Header from './Header';
import Footer from './Footer';
const ForgotPassword = () => {
    return (
        <>
            <Header />
            <section className="myaccount">
                <div className="container">
                    <div className="white_background">
                        <div className="formloginwithregister">
                            <div className="bg_white">
                                <p>Lost your password? Please enter your mobile number to receive OTP or email address to get a link to create a new password.</p>
                            </div>
                            <form action="">
                                <div className="columnfull">
                                    <label htmlFor="">Email <span className="pink">*</span> </label>
                                    <input type="text" name="" id="" />
                                </div>
                                <button type="button" className='btn_pink w-100'>reset password</button>
                                </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ForgotPassword