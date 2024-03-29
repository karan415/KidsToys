import React from 'react';
import image from './images/playground.png';
import image2 from './images/preschool2.png';
import image3 from './images/kids_clothing.png';
import image4 from './images/first_step.png';
import image5 from './images/mom_dad.png';
import './css/Kids.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Kids_Section = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 701 },
            items: 4,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 700, min: 0 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const images = [
        { img: image },
        { img: image2 },
        { img: image3 },
        { img: image4 },
        { img: image5 }
    ];

    return (
        <section className="kids_section">
            <div className="container">
                <div className='kids_inner'>
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        infinite={true}
                        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                        itemClass="carousel-item-padding-40-px "
                    >
                        {images.map((curElm, index) => (
                            <div className="col kidsproduct" key={index}>
                                <img src={curElm.img} alt="" />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Kids_Section;
