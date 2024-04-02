import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './css/Banner.css';
import bannerImg1 from './images/Banner.png';
import bannerImg2 from './images/Banner.png';
import bannerImg3 from './images/Banner.png';

const Banner = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const slides = [
    { image: bannerImg1, content: { title: 'Play And Learn', description: 'BEST EDUCATION FOR KIDS' } },
    { image: bannerImg2, content: { title: 'Play And Learn', description: 'BEST EDUCATION FOR KIDS' } },
    { image: bannerImg3, content: { title: 'Play And Learn', description: 'BEST EDUCATION FOR KIDS' } },
  ];
  

  const handleSlideChange = (_,newIndex) => {
    const currentIndex = newIndex.currentSlide;
    setCurrentSlideIndex(currentIndex);
  };
  

  return (
    <div className="positions">
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      infinite={true}
      customTransition='transform 1000ms ease-in-out'
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="carousel-item-padding-40-px"
      afterChange={handleSlideChange}
      
    >
    {slides.map((slide, index) => (
    <section className="banner"  style={{ backgroundImage: `url(${slide.image})` }}>
      <div className="container-fluid">
              <div
                key={index}
                className="banner-slide"
              >
                <div className="banner_content">
                  <h4>{slide.content.title}</h4>
                  <h1>{slide.content.description}</h1>
                  <button className="btn_pink">Shop Now</button>
                </div>
              </div>
           
         
        </div>
     
    </section>
    ))}
    </Carousel>
    </div>
  );
};

export default Banner;
