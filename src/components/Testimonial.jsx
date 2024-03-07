import React from 'react'
import MainTestimonial from './MainTestimonial'
import img1 from './images/testimonial_2.png'
import img2 from './images/testimonial_3.png'
import img3 from './images/testimonial_4.png'
import img4 from './images/testimonial_5.png'
import img5 from './images/testimonial_6.png'
import './css/Testimonial.css'
const Testimonial = () => {
return (
<>
    <section className="testimonial kids_section new_toys">
        <div className="container">
            <div className="kids_testimonial">
                <div className="row_box">
                    <div className="col">
                        <div className="testimonial_inner">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="testimonial_inner">
                            <img src={img2}alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="testimonial_inner">
                            <img src={img3} alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="testimonial_inner">
                            <img src={img4} alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="testimonial_inner">
                            <img src={img5} alt="" />
                        </div>
                    </div>
                </div>
                <div className="main_testimonilal">
                   <MainTestimonial/>
                </div>
            </div>
        </div>
    </section>
</>
)
}

export default Testimonial