import React, { useState } from 'react'
import LoginForm from './LoginForm';
import Register from './Register';
import Header from './Header';
import Footer from './Footer';
import './css/Login.css'
import logo from './images/logo (2).png'
const Login = () => {
    const[activeTab,setActiveTab]=useState('login');
    const handleTabChange=(tab)=>{
        setActiveTab(tab);
    }
    return (
        <>
        <Header/>
            <section className="myaccount">
                <div className="container">
                <div className="white_background">
                    <div className="formloginwithregister">
                    <div className="logo flex_box">
                    <img src={logo} alt="" />
                    </div>
                        <div className="tabing_form flex_box">
                            <div className="login col_50">
                                <button className={activeTab === 'login' ? 'btn_pink active w-100' : 'btn_pink w-100'} onClick={() => handleTabChange('login')}>Login</button>
                            </div>
                            <div className="register col_50">
                                <button className={activeTab === 'register' ? 'btn_purple w-100' : 'btn_pink w-100'} onClick={() => handleTabChange('register')}>Sign up</button>
                            </div>
                        </div>
                        <div className="tabingitems">
                        {activeTab === 'login' && (
                            <LoginForm/>
    
                        )}
                        {activeTab === 'register' && (
                           <Register/>
    
                        )}
                        
                        </div>
                        
                    </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Login