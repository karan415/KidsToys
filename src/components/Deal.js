
import {React,useState} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img from './images/Banner.png'
import img1 from './images/haeder_banner.png'
import pro from './images/teddy_girl.png'
import ProductData from './ProductData'
const Deal = () => {
    const [proData, setProData] = useState(ProductData);

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
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
    <section class="deal-section p-5">
        <div class="container text-center">
            <div class="positions">
            <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            infinite={true}
            itemClass="carousel-item-padding-40-px"
          >
          
             <div className="flex_box products">
             {
                 proData.map((curElm,indx) => {
                     return (
                         <>
                             <div className="col_25" key={indx} id={curElm.id}>
                                 <div className="product_box row_box ">
                                     <div className="product_img col">
                                         <img src={curElm.image} alt="" />
                                     </div>
                                     <div className="product_content col">
                                         <span>{curElm.product}</span>
                                         <i className="star"><img src={curElm.rating} alt=""/></i>
                                         <span><strong>{curElm.prize}</strong></span>
                                         <span className="border"><button className="btn_purple">{curElm.btn}</button></span>
                                     </div>
                                 </div>
                             </div>
                         </>
                     )
                 })
             }
             </div>
                </Carousel>
            </div>
        </div>
    </section>

</>
)
}

export default Deal