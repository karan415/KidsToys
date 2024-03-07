import React from 'react'
import BillingForm from './BillingForm'
import OrderDetails from './OrderDetails'
import Payment from './Payment'
import './css/Checkout.css'
import Header from './Header'
import HeaderBanner from './HeaderBanner'
import Footer from './Footer'
const Checkout = () => {
    return (
        <>
        <Header/>
        <HeaderBanner/>
            <section className="checkout_page">
                <div className="container">
                    <div className="flex_box">
                        <div className="col_60">
                            <div className="billing_form">
                                <div className="billing_details">
                                    <h2>billing details</h2>
                                    <BillingForm />
                                </div>
                            </div>
                            <div className="column">
                                <div className="pay_method">
                                    <h2>payment type</h2>
                                    <Payment />
                                </div>
                            </div>
                        </div>
                        <div className="col_40">
                            <div className="order_details">
                                <h2>order details</h2>
                                <OrderDetails />
                                <div className="coupenbox">
                                    <form action="">
                                        <label htmlFor="">have coupen?</label>
                                        <input type="text" placeholder='coupen code' />
                                        <input type="submit" value="Apply" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Checkout