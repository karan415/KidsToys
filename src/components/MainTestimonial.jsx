import React from 'react'
import ellipse from './images/Ellipse 2.png'
import star from './images/stars.png'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function MainTestimonial() {
    
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
return (
<>
<div class="positions">
<Carousel
swipeable={true}
draggable={true}
showDots={false}
responsive={responsive}
infinite={true}
removeArrowOnDeviceType={["desktop","tablet", "mobile"]}

itemClass="carousel-item-padding-40-px"
>
    <div className="flex_box">
        <div className="col_33">
            <div className="box1_inner">
                <h4>Client Feedback</h4>
                <h2>what our customers say</h2>
                <div className="customers">
                    <ul>
                        <li className='active'><img src={ellipse} alt=""/></li>
                        <li><img src={ellipse} alt=""/></li>
                        <li><img src={ellipse} alt=""/></li>
                        <li><img src={ellipse} alt=""/></li>
                    
                    </ul>
                </div>
            </div>
        </div>
        <div className="col_70">
            <div className="box2_inner">
                <div className="rating"><img src={star} alt=""/></div>
                <p> "I always tell my kids if you lay down, people will step over you. But if you keep scrambling, if
                    you keep going, someone will always, always give you a hand. Always. But you gotta keep dancing, you
                    gotta keep your feet moving."</p>
                <span>Anna</span>
                <span>designer</span>
            </div>

        </div>
    </div>
    <div className="flex_box">
    <div className="col_33">
        <div className="box1_inner">
            <h4>Client Feedback</h4>
            <h2>WHAT OUR CUSTOMERS SAY</h2>
            <div className="customers">
                <ul>
                    <li className='active'><img src={ellipse} alt=""/></li>
                    <li><img src={ellipse} alt=""/></li>
                    <li><img src={ellipse} alt=""/></li>
                    <li><img src={ellipse} alt=""/></li>
                
                </ul>
            </div>
        </div>
    </div>
    <div className="col_70">
        <div className="box2_inner">
            <div className="rating"><img src={star} alt=""/></div>
            <p> "I always tell my kids if you lay down, people will step over you. But if you keep scrambling, if
                you keep going, someone will always, always give you a hand. Always. But you gotta keep dancing, you
                gotta keep your feet moving."</p>
            <span>Anna</span>
            <span>designer</span>
        </div>

    </div>
</div>
<div className="flex_box">
<div className="col_33">
    <div className="box1_inner">
        <h4>Client Feedback</h4>
        <h2>WHAT OUR CUSTOMERS SAY</h2>
        <div className="customers">
            <ul>
                <li className='active'><img src={ellipse} alt=""/></li>
                <li><img src={ellipse} alt=""/></li>
                <li><img src={ellipse} alt=""/></li>
                <li><img src={ellipse} alt=""/></li>
            
            </ul>
        </div>
    </div>
</div>
<div className="col_70">
    <div className="box2_inner">
        <div className="rating"><img src={star} alt=""/></div>
        <p> "I always tell my kids if you lay down, people will step over you. But if you keep scrambling, if
            you keep going, someone will always, always give you a hand. Always. But you gotta keep dancing, you
            gotta keep your feet moving."</p>
        <span>Anna</span>
        <span>designer</span>
    </div>

</div>
</div>
    </Carousel>
    </div>
</>
)
}

export default MainTestimonial