import React, { useState } from 'react'
import CatData from './CatogaryData'
import './css/catogary.css'
const Catogary = () => {
    const [data, setData] = useState(CatData)
    return (
        <>
            <section className="catogary">
                <div className="container">
                <h4>Our Category</h4>
                 <h2>CATEGORIES YOU'LL LOVE</h2>
                    <div className="flex_box catogary_box">
                        {data.map((curElm,index) => {
                            return (
                                <>
                                    <div className="col_20 " key={curElm.id}>
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
                                </>
                            )
                        })}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Catogary