import React from 'react';
import { useCheckContext } from './CheckoutContext';

const BillingForm = () => {
    const { handleBillingFormSubmit, useShippingAsBilling, handleCheckboxChange, billingForm, handleInputChange,error } = useCheckContext();

    return (
        <>
            <form action="" onSubmit={handleBillingFormSubmit}>
                <h2>billing details</h2>
                <div className="flex_box">
                    <div className="col_50">
                        <label htmlFor="">First Name</label>
                        <input type="text" name="firstname" id="" value={billingForm.firstname} onChange={handleInputChange} />
                        <span>{error.firstname}</span>
                    </div>
                    <div className="col_50">
                        <label htmlFor="">Last Name</label>
                        <input type="text" name="lastname" id="" value={billingForm.lastname} onChange={handleInputChange} />
                        <span>{error.lastname}</span>
                    </div>
                </div>
                <div className="flex_box">
                    <div className="col_50">
                        <label htmlFor="">company name (optional)</label>
                        <input type="text" name="companyname" id="" value={billingForm.companyname} onChange={handleInputChange} />
                        
                    </div>
                    <div className="col_50">
                        <label htmlFor="">country / region*</label>
                        <input type="text" name="country" id="" value={billingForm.country} onChange={handleInputChange} />
                        <span>{error.country}</span>
                    </div>
                </div>
                <div className="flex_box">
                    <div className="col_50">
                        <label htmlFor="">state</label>
                        <input type="text" name="state" id="" value={billingForm.state} onChange={handleInputChange} />
                        <span>{error.state}</span>
                    </div>
                    <div className="col_50">
                        <label htmlFor="">street address</label>
                        <input type="text" name="street" id="" value={billingForm.street} onChange={handleInputChange} />
                        <span>{error.street}</span>
                    </div>
                </div>
                <div className="flex_box">
                    <div className="col_50">
                        <label htmlFor="">town/city</label>
                        <input type="text" name="town" id="" value={billingForm.town} onChange={handleInputChange} />
                        <span>{error.town}</span>
                    </div>
                    <div className="col_50">
                        <label htmlFor="">zip-code*</label>
                        <input type="text" name="zipcode" id="" value={billingForm.zipcode} onChange={handleInputChange} />
                        <span>{error.zipcode}</span>
                    </div>
                </div>
                <div className="flex_box">
                    <div className="col_50">
                        <label htmlFor="">phone</label>
                        <input type="number" name="phone" id="" value={billingForm.phone} onChange={handleInputChange} />
                        <span>{error.phone}</span>
                    </div>
                    <div className="col_50">
                        <label htmlFor="">email address</label>
                        <input type="email" name="email" id="" value={billingForm.email} onChange={handleInputChange} />
                        <span>{error.email}</span>
                    </div>
                </div>
                <button className="btn_pink">Next</button>
                <div className="column checkboxx">
                    <input type="checkbox" name="" checked={useShippingAsBilling} id="sameAsBilling" onChange={handleCheckboxChange} />
                    <label htmlFor="">MY SHIPPING ADDRESS IS THE SAME AS MY BILLING ADDRESS.</label>
                </div>
            </form>
        </>
    );
}

export default BillingForm
