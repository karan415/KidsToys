import React, { useState } from 'react'
import NewData from './NewToyData'
import './css/Newtoy.css'
const NewToys = () => {
    const [data, setData] = useState(NewData)
    return (
        <>
            <section className="new_toys">
                <div className="container">
                    <div className="flex_box">
                        {
                            data.map((curElm,index) => {
                                return (
                                    <>
                                        <div className="col_50" id={curElm.id}>
                                            <div className="col50_inner">
                                                <div className="top_box">
                                                    <img src={curElm.image} alt="" />
                                                </div>
                                                <div className="bottom_box">
                                                    <h3>{curElm.text}</h3>
                                                    <span>{curElm.description}</span>
                                                    <span className='toys'><button className="btn_purple">{curElm.button}</button></span>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default NewToys