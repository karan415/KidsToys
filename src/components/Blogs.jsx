import React, { useState } from 'react'
import BlogData from './BlogData'
import './css/Blog.css'
const Blogs = () => {
    const [blogData, setBlogData] = useState(BlogData)
    return (
        <>
            <section className="blogs">
                <div className="container">

                    <div className="blogs_inner">
                        <h4>from the blog</h4>
                        <h2>latest new</h2>
                        <div className="row_box">
                            {
                                blogData.map((curElm,index) => {
                                    return (
                                        <>
                                            <div className="col" id={curElm.id}>
                                                <div className="col_blogs flex_box">
                                                    <div className="col_33">
                                                        <div className="blog_img">
                                                            <img src={curElm.image} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="col_70">
                                                        <div className="blog_content">
                                                            <span className="small">{curElm.title}</span>
                                                            <h5>{curElm.heading}</h5>
                                                            <p>{curElm.description}</p>
                                                            <button className="btn_purple">{curElm.btn}</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blogs