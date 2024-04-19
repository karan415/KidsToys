import React from 'react';
import BlogData from './BlogData';
import Footer from '../Footer';
import Header from '../Header';

const Blog = () => {
  return (
    <>
      <Header />
      <section className='py_5'>
        <div className="container">

                <div className='grid-container'>
              {BlogData.map((curElm, index) => {
                return (
                  <div className="grid-item border1 roundes over-hide mb-4" key={index}>
                    <div className="">
                      <img src={curElm.blogimg} alt="" />
                    </div>
                    <div className="">
                      <div className="contentblog padding20">
                      <div className="flex_box content-between mb-4">
                        <div className="span fw_bold  pop">{curElm.date[0].month} /<span className='fw_bold  pop'>{curElm.date[0].date} /</span>{curElm.date[0].year}</div>
                        <span className='text-capitalize  pop'>{curElm.time}</span>
                        </div>
                        <h4 className='text-left fw_bold dark'>{curElm.title}</h4>
                        <p className='dark'>{curElm.description}</p>
                        <span className='fw_bold fs_5  pop '>By {curElm.admin}</span>
                        <button className="btn btn-primary mb-4 pop">Read More</button>
                      </div>
                    </div>
                  </div>
                );
              })}
              </div>
          
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;