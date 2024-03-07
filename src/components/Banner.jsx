import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './css/Banner.css';


const Banner = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <section className="banner">
        <div className="container-fluid">
          <div class="positions">
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              infinite={true}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              itemClass="carousel-item-padding-40-px"
            >
              <div className="banner_content">
                <h4>play and learn</h4>
                <h1>best education for kids</h1>
                <button className="btn_pink">shop now </button>
              </div>
              <div className="banner_content">
                <h4>play and learnsssss</h4>
                <h1>best education for kids</h1>
                <button className="btn_pink">shop now </button>
              </div>
              <div className="banner_content">
                <h4>play and learn</h4>
                <h1>best education for kids</h1>
                <button className="btn_pink">shop now </button>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner