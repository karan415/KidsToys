import React, { useState } from 'react';
import image from '../images/Prodcut_teddy.png';
import SingalData from './SingalData';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaHeart } from "react-icons/fa";
import ProductTabing from './ProductTabing';
import star from '../images/stars.png'
const ProductInfo = () => {
  const [ProductData, setProdtData] = useState(SingalData.defaultImg);
  const [currentImages, setCurrentImages] = useState(image);
  const [count, setCount] = useState(1)
  const changeImg = (imageUrl) => {
    setCurrentImages(imageUrl);
  };

  const showgrey = () => {
    setProdtData(SingalData.greyimg)
  };

  const showRed = () => {
    setProdtData(SingalData.redImg);
  };
  const showYellow = () => {
    setProdtData(SingalData.yellowImg);
  };
  const showPink = () => {
    setProdtData(SingalData.pinkImg);
  };

  return (
    <>
      <section className='singal_product_info'>
        <div className="container">
          <div className="flex_box gap_30 align_start">
            <div className="col_50">
              <div className="Product_relates">
                <div className="Product_img">
                  <img src={currentImages} alt="" />
                </div>
              </div>
              <div className="related_imgs">
                <div className="flex_box gap_20">
                  {ProductData.map((item, index) => (
                    <div className="col_25" id={item.id} key={index} onClick={() => changeImg(item.image)}>
                      <div className="product_imgs">
                        <img src={item.image} alt="" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='onlyDesk'><ProductTabing /></div>
            </div>
            <div className="col_50">
              <div className="product_description">
                <h2>grouped products</h2>
                <h5 className="light_pink">$19.50 – $25.20</h5>
                <div className="rating_box">
                  <img src={star} alt="" />
                </div>
                <div className="colors">
                <span className='bold'>colors</span>
                <div className="boxes flex_box">
                  <div className='box box_grey' onClick={showgrey}></div>
                  <div className="box box_red" onClick={showRed}></div>
                  <div className="box box_yellow" onClick={showYellow}></div>
                  <div className="box box_pink" onClick={showPink}></div>
                </div>
            </div>
                <div className='description'>
                  <p>Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra dignissim ut sed leo.
                    Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis quam, sit amet
                    consequat nulla felis pharetra lacus.</p>
                </div>
               
                <div className="flex_box border-bottom">
                
                  <div className="column">
                    <div className="quantity_box ">
                      <div className="item_less_more ">
                        <div className="add less flex_box">
                          <span className="decrease" onClick={() => setCount(count - 1)}>-</span>
                          <span className="number">{count}</span>
                          <span className="increase" onClick={() => setCount(count + 1)}>+</span>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <div className="column">
                    <p className="upper_case">BUZZ LIGHTYEAR TALKING FIGURE</p>
                  </div>
                  <div className="column content_end">
                    <div className='prize_box'>
                      <div className="prize"> <span className='bold'>$25.20</span></div>
                      <div className="stock">
                        <span> 100 in stock</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn_pink w-100">add to cart</button>
                <div className="wishlist flex_box">
                  <i className="like"><FaHeart/></i><span className='bold'>add to wishlist</span>
                </div>
               
                <div className="info_tags">
                  <h6><i class="sku tag"></i>SKU: <strong>A0010</strong></h6>
                  <h6><i class="catogary tag"></i>CATEGORY:<strong>Action Toys</strong></h6>
                  <h6><i class="tags tag"></i>TAGS:<strong> Boy, Girl </strong></h6>
                  <h6><i class="links tag"></i>SHARE LINK: <span className=" icons">
                    <ul className="inline_block">
                      <li><i><FaFacebookF /></i></li>
                      <li><i><FaInstagram /> </i></li>
                      <li><i><FaTwitter /></i></li>
                      <li><i><FaLinkedinIn /></i></li>
                    </ul>
                  </span>
                  </h6>
                </div>
                <div class="delivery_box">
                  <ul>
                    <li><i className='d_box d&r'></i>DELIVERY AND RETURN</li>
                    <li><i className='d_box shipping_info'></i>SHIPPING INFORMATION</li>
                    <li><i className='d_box compo_care'></i>COMPOSITION AND CARE</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='onlyMb'><ProductTabing /></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductInfo;
