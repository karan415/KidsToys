import React, { useState } from 'react'
import FData from './FacebookData'

const FacebookProducts = () => {
    const [item, setItem] = useState(FData)
    return (
        <div className="productstlist">
            <div className="flex_box">{
                item.map((curElm,index) => {
                    return (
                        <>
                            <div className="col_25" key={index}>
                                <div className="bg_pink">
                                    <img src={curElm.img} alt="" />
                                </div>
                                <h5>{curElm.title}</h5>
                            </div>
                        </>
                    )
                })
            }

            </div>
        </div>
    )
}

export default FacebookProducts