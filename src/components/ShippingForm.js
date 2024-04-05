import React from 'react'
import { useCheckContext } from './CheckoutContext'

const ShippingForm = () => {
    const {handleShippingFormSubmit,useShippingAsBilling,shippingForm,billingForm,handleShippingInputChange,errors}=useCheckContext();
    return (
        <>
            <div className="shipping_form">
            <h2>shipping  details</h2>
                <form action="" onSubmit={handleShippingFormSubmit}>
                <div className="flex_box">
                    <div className="col_50">
                        <label htmlFor="">First Name</label>
                        <input type="text" name="firstname" id="" value={useShippingAsBilling ? billingForm.firstname : shippingForm.firstname} onChange={handleShippingInputChange} />
                         <span>{errors.firstname}</span>
                        </div>
                    <div className="col_50">
                        <label htmlFor="">Last Name</label>
                        <input type="text" name="lastname" id="" value={useShippingAsBilling ? billingForm.lastname : shippingForm.lastname} onChange={handleShippingInputChange}/>
                        <span>{errors.lastname}</span>
                        </div>
                </div>
                <div className="flex_box">
                    <div className="col_50">
                        <label htmlFor="">company name (optional)</label>
                        <input type="text" name="companyname" id="" value={useShippingAsBilling ? billingForm.companyname : shippingForm.companyname} onChange={handleShippingInputChange}/>
                        <span>{errors.companyname}</span>
                        </div>
                    <div className="col_50">
                        <label htmlFor="">country / region*</label>
                        <input type="text" name="country" id="" value={useShippingAsBilling ? billingForm.country : shippingForm.country} onChange={handleShippingInputChange}/>
                        <span>{errors.country}</span>
                        </div>
                </div>
                <div className="flex_box">
                    <div className="col_50">
                        <label htmlFor="">state</label>
                        <input type="text" name="state" id="" value={useShippingAsBilling ? billingForm.state : shippingForm.state} onChange={handleShippingInputChange}/>
                        <span>{errors.state}</span>
                        </div>
                    <div className="col_50">
                        <label htmlFor="">street address</label>
                        <input type="text" name="street" id="" value={useShippingAsBilling ? billingForm.street : shippingForm.street} onChange={handleShippingInputChange}/>
                        <span>{errors.street}</span>
                        </div>
                </div>
                <div className="flex_box">
                    <div className="col_50">
                        <label htmlFor="">town/city</label>
                        <input type="text" name="town" id="" value={useShippingAsBilling ? billingForm.town : shippingForm.town} onChange={handleShippingInputChange}/>
                        <span>{errors.town}</span>
                        </div>
                    <div className="col_50">
                        <label htmlFor="">zip-code*</label>
                        <input type="text" name="zipcode" id="" value={useShippingAsBilling ? billingForm.zipcode : shippingForm.zipcode} onChange={handleShippingInputChange}/>
                        <span>{errors.zipcode}</span>
                        </div>
                </div>
                <div className="flex_box">
                    <div className="col_50">
                        <label htmlFor="">phone</label>
                        <input type="number" name="phone" id="" value={useShippingAsBilling ? billingForm.phone : shippingForm.phone} onChange={handleShippingInputChange}/>
                        <span>{errors.phone}</span>
                        </div>
                    <div className="col_50">
                        <label htmlFor="">email address</label>
                        <input type="email" name="email" id="" value={useShippingAsBilling ? billingForm.email : shippingForm.email} onChange={handleShippingInputChange}/>
                        <span>{errors.email}</span>
                        </div>
                </div>
                <button className="btn_pink">Next</button>
                </form>
            </div>
        </>
    )
}

export default ShippingForm