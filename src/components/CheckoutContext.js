import React, { createContext, useContext, useState } from "react";

const CheckContext = createContext();

export const useCheckContext = () => useContext(CheckContext);

const CheckoutProvider = (props) => {
    const [shippingForm, setShippingForm] = useState({
        firstname: "",
        lastname: "",
        companyname: '',
        country: "",
        state: "",
        street: "",
        town: "",
        zipcode: "",
        phone: "",
        email: "",
    });

    const [billingForm, setBillingForm] = useState({
        firstname: "",
        lastname: "",
        companyname: '',
        country: "",
        state: "",
        street: "",
        town: "",
        zipcode: "",
        phone: "",
        email: "",
    });

    const [useShippingAsBilling, setUseBillingAsShipping] = useState(false);
    const [errors, setErrors] = useState({});
    const [error, setError] = useState({});

    const handleShippingFormSubmit = (e) => {
        e.preventDefault();
        let errors = {};
        let formIsValid = true;
        if (!shippingForm.firstname) {
            formIsValid = false;
            errors["firstname"] = "This field is required";
        }
        if (!shippingForm.email) {
            formIsValid = false;
            errors["email"] = "This field is required";
        } else if (!/\S+@\S+\.\S+/.test(shippingForm.email)) {
            formIsValid = false;
            errors["email"] = "Invalid email address";
        }
        if (!shippingForm.lastname) {
            formIsValid = false;
            errors["firstname"] = "This field is required";
        }
        if (!shippingForm.phone) {
            formIsValid = false;
            errors["lastname"] = "This field is required";
        }
        if (!shippingForm.street) {
            formIsValid = false;
            errors["street"] = "This field is required";
        }
        if (!shippingForm.state) {
            formIsValid = false;
            errors["state"] = "This field is required";
        }
        if (!shippingForm.country) {
            formIsValid = false;
            errors["country"] = "This field is required";
        }
        if (!shippingForm.zipcode) {
            formIsValid = false;
            errors["zipcode"] = "This field is required";
        }
        if (!shippingForm.state) {
            formIsValid = false;
            errors["state"] = "This field is required";
        }
        if (!shippingForm.town) {
            formIsValid = false;
            errors["town"] = "This field is required";
        }
        if (!shippingForm.phone) {
            formIsValid = false;
            errors["phone"] = "This field is required";
        }


        setErrors(errors);

        if (formIsValid) {
            console.log("Shipping Form submitted successfully!");
            setErrors({});
            // Reset the form
            setShippingForm({
                firstname: "",
                lastname: "",
                companyname: "",
                country: "",
                state: "",
                street: "",
                town: "",
                zipcode: "",
                phone: "",
                email: "",
            });
        }
    };

    const handleBillingFormSubmit = (e) => {
        e.preventDefault();
        let error = {};
        let formIsValid = true;
        if (!billingForm.firstname) {
            formIsValid = false;
            error["firstname"] = "This field is required";
        }
        if (!billingForm.email) {
            formIsValid = false;
            error["email"] = "This field is required";
        } else if (!/\S+@\S+\.\S+/.test(billingForm.email)) {
            formIsValid = false;
            error["email"] = "Invalid email address";
        }
        if (!billingForm.lastname) {
            formIsValid = false;
            error["firstname"] = "This field is required";
        }
        if (!billingForm.phone) {
            formIsValid = false;
            error["lastname"] = "This field is required";
        }
        if (!billingForm.street) {
            formIsValid = false;
            error["street"] = "This field is required";
        }
        if (!billingForm.state) {
            formIsValid = false;
            error["state"] = "This field is required";
        }
        if (!billingForm.country) {
            formIsValid = false;
            error["country"] = "This field is required";
        }
        if (!billingForm.zipcode) {
            formIsValid = false;
            error["zipcode"] = "This field is required";
        }
        if (!billingForm.state) {
            formIsValid = false;
            error["state"] = "This field is required";
        }
        if (!billingForm.town) {
            formIsValid = false;
            error["town"] = "This field is required";
        }
        if (!billingForm.phone) {
            formIsValid = false;
            error["phone"] = "This field is required";
        }
        setError(error);

        if (formIsValid) {
            console.log("Shipping Form submitted successfully!");
            setError({});
            // Reset the form
            setBillingForm({
                firstname: "",
                lastname: "",
                companyname: "",
                country: "",
                state: "",
                street: "",
                town: "",
                zipcode: "",
                phone: "",
                email: "",
            });
        }

    };

    const handleCheckboxChange = (e) => {
        const isChecked = e.target.checked;
        setUseBillingAsShipping(isChecked);
        if (isChecked) {
            setShippingForm({ ...billingForm });
        } else {
            setShippingForm({
                firstname: "",
                lastname: "",
                companyname: '',
                country: "",
                state: "",
                street: "",
                town: "",
                zipcode: "",
                phone: "",
                email: "",
            });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBillingForm({
            ...billingForm,
            [name]: value,
        });
    };

    const handleShippingInputChange = (e) => {
        const { name, value } = e.target;
        setShippingForm({
            ...shippingForm,
            [name]: value,
        });
    };

    return (
        <CheckContext.Provider
            value={{
                shippingForm,
                setShippingForm,
                billingForm,
                setBillingForm,
                useShippingAsBilling,
                setUseBillingAsShipping,
                handleShippingFormSubmit,
                handleBillingFormSubmit,
                handleCheckboxChange,
                handleInputChange,
                handleShippingInputChange,
                errors,
                error
            }}
        >
            {props.children}
        </CheckContext.Provider>
    );
};

export default CheckoutProvider;
