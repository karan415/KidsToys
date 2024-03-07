import React from 'react'
import image from './images/playground.png'
import image2 from './images/preschool2.png'
import image3 from './images/kids_clothing.png'
import image4 from './images/first_step.png'
import image5 from './images/mom_dad.png'
import './css/Kids.css'
const Kids_Section = () => {
    return (
        <>
            <section className="kids_section">
                <div className="container">
                <div className='kids_inner'>
                    <div className="row_box">
                        <div className="col">
                            <div className="inner_img">
                                <img src={image} alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="inner_img">
                                <img src={image2} alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="inner_img">
                                <img src={image3} alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="inner_img">
                                <img src={image4} alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="inner_img">
                                <img src={image5} alt="" />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Kids_Section