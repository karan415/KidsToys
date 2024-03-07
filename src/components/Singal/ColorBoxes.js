import React, { useState } from 'react'

const ColorBoxes = () => {
    const [colorChange ,setColorChange]=useState('grey')
    const handleTabChange = (tab) => {
        setColorChange(tab);
    };
    return (
        <>
            <div className="colors">
                <span className='bold'>colors</span>
                <div className="boxes flex_box">
                    <div className={colorChange === 'grey' ? 'box box_grey active' : 'btn_pink'} onClick={() => handleTabChange('grey')}></div>
                    <div className="box box_red"></div>
                    <div className="box box_yellow"></div>
                    <div className="box box_blue"></div>
                    <div className="box box_pink"></div>
                </div>
            </div>
            </>
    )
}

export default ColorBoxes