import React, { useState } from 'react';

const BillingForm = () => {
    const [billingFormData, setBillingFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        country: '',
        state: '',
        streetAddress: '',
        city: '',
        zipCode: '',
        phone: '',
        email: ''
    });

    const [shippingFormData, setShippingFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        country: '',
        state: '',
        streetAddress: '',
        city: '',
        zipCode: '',
        phone: '',
        email: ''
    });

    const [useBillingAsShipping, setUseBillingAsShipping] = useState(false);

    const handleBillingFormSubmit = (e) => {
        e.preventDefault();
        // Handle submission of billing form data here
    };

    const handleShippingFormSubmit = (e) => {
        e.preventDefault();
        // Handle submission of shipping form data here
    };

    const handleCheckboxChange = (e) => {
        setUseBillingAsShipping(e.target.checked);
        if (e.target.checked) {
            // Copy billing form data to shipping form data
            setShippingFormData({ ...billingFormData });
        } else {
            // Reset shipping form data
            setShippingFormData({
                firstName: '',
                lastName: '',
                companyName: '',
                country: '',
                state: '',
                streetAddress: '',
                city: '',
                zipCode: '',
                phone: '',
                email: ''
            });
        }
    };

    return (
        <>
            <form onSubmit={handleBillingFormSubmit}>
                {/* Your billing form inputs */}
                <input type="checkbox" id="sameAsBilling" checked={useBillingAsShipping} onChange={handleCheckboxChange} />
                <label htmlFor="sameAsBilling">My shipping address is the same as my billing address.</label>
                <button type="submit">Next</button>
            </form>
            {!useBillingAsShipping && (
                <div className="shipping_form">
                    <form onSubmit={handleShippingFormSubmit}>
                        {/* Your shipping form inputs */}
                        <button type="submit">Continue</button>
                    </form>
                </div>
            )}
        </>
    );
};

export default BillingForm;
