import React, { useState } from 'react';
import CatData from './CatogaryData';
import './css/catogary.css';
import Carousel from "react-multi-carousel";


const Catogary = () => {
    const [data, setData] = useState(CatData);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 993 },
            items: 5,
            slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 992, min: 501 },
            items: 3,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 500, min: 0 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <section className="catogary">
            <div className="container">
                <h4>Our Category</h4>
                <h2>CATEGORIES YOU'LL LOVE</h2>

                <div className=" catogary_box">
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        infinite={true}
                        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                        itemClass="carousel-item-padding-40-px flex_box"
                    >
                        {data.map((curElm, index) => (
                            <div className="col " key={index}>
                                <div className='col_20inner row_box'>
                                    <div className="img_box">
                                        <img src={curElm.image} alt="" />
                                    </div>
                                    <div className="content_box">
                                        <h5>{curElm.item}</h5>
                                        <h6>{curElm.quantity}</h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Catogary;
