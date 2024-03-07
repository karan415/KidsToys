import React from 'react'

const BillingForm = () => {
    return (
        <>
            <form action="">
                <div className="flex_box">
                    <div className="col_50">
                        <label htmlFor="">First Name</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="col_50">
                        <label htmlFor="">Last Name</label>
                        <input type="text" name="" id="" />
                    </div>
                </div>
                <div className="flex_box">
                    <div className="col_50">
                        <label htmlFor="">company name (optional)</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="col_50">
                        <label htmlFor="">country / region*</label>
                        <input type="text" name="" id="" />
                    </div>
                </div>
                <div className="flex_box">
                    <div className="col_50">
                        <label htmlFor="">state</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="col_50">
                        <label htmlFor="">street address</label>
                        <input type="text" name="" id="" />
                    </div>
                </div>
                <div className="flex_box">
                    <div className="col_50">
                        <label htmlFor="">town/city</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="col_50">
                        <label htmlFor="">zip-code*</label>
                        <input type="text" name="" id="" />
                    </div>
                </div>
                <div className="flex_box">
                    <div className="col_50">
                        <label htmlFor="">phone</label>
                        <input type="number" name="" id="" />
                    </div>
                    <div className="col_50">
                        <label htmlFor="">email address</label>
                        <input type="email" name="" id="" />
                    </div>
                </div>
                <button className="btn_pink">continue</button>
                <div className="column checkboxx">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">MY BILLING ADDRESS IS THE SAME AS MY SHIPPING ADDRESS.</label>
                </div>
            </form>
        </>
    )
}

export default BillingForm