import React from 'react'
import MainTestimonial from './MainTestimonial'
import img1 from './images/testimonial_2.png'
import img2 from './images/testimonial_3.png'
import img3 from './images/testimonial_4.png'
import img4 from './images/testimonial_5.png'
import img5 from './images/testimonial_6.png'
import './css/Testimonial.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 5 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 601 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 600, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    }
};
const sliderImageUrl = [
    //First image url
    {
        url: img1,
    },
    {
        url: img2,
    },
    {
        url: img3,
    },
    {
        url: img4,
    },
    {
        url: img5,
    }
];

const Testimonial = () => {
    return (
        <>
            <section className="testimonial kids_section new_toys">
                <div className="container">
                    <div className="kids_testimonial">
                        <div className="">
                            <div className="parent ">
                                <Carousel
                                    responsive={responsive}
                                    swipeable={true}
                                    draggable={true}
                                    showDots={false}
                                    infinite={true}
                                    partialVisible={false}
                                    dotListClass="custom-dot-list-style"
                                >
                                    {sliderImageUrl.map((imageUrl, index) => {
                                        return (
                                            <div className="col slider" key={index}>
                                                <div className="testimonial_inner">
                                                    <img src={imageUrl.url} alt="movie" />
                                                </div>
                                            </div>

                                        );
                                    })}
                                </Carousel>
                            </div>
                            </div>
                            <div className="main_testimonilal">
                                <MainTestimonial />
                            </div>
                        </div>
                    </div>
            </section>
        </>
    );
};
export default Testimonial;