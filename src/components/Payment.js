import React from 'react'
import card from './images/image 8.png'
import card1 from './images/image 9.png'
import card2 from './images/image 10.png'
import card3 from './images/image 11.png'

const Payment = () => {
    return (
        <>
            <div className="paymentbox">
                <form action="">
                <div className="col_full">
                    <input type="radio" name="" id="" />
                    <label htmlFor="">cash on delivery</label>
                    </div>
                    <div className="col_full">
                    <input type="radio" name="" id="" />
                    <label htmlFor="">
                    <div className="images_box flex_box">
                        <img src={card} alt="" />
                        <img src={card1} alt="" />
                        <img src={card2} alt="" />
                        <img src={card3} alt="" />
                    </div>
                    </label>
                    </div>
                    <div className="stripe">
                    <select name="" id="">
                        <option value="">credit card</option>
                        <option value="">debit card</option>
                        <option value="">debit card</option>
                    </select>
                    <div className="flex_box">
                    <div className="col_50">
                    <input type="date" name="" id="" placeholder='Expiary Date' />
                    </div>
                    <div className="col_50">
                    <input type="number" name="" id="" placeholder='CVV' /></div>
                    </div>
                    <input type="number" name="" id="" placeholder='enter your card number' />
                    <button type="submit" className='btn_pink w-100 w_100'>Pay now</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Payment