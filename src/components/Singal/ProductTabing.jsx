import { useState } from "react";
import Description from '../Singal/Description'
import AdditionalInfo from '../Singal/AdditionalInfo'
import Reviews from "./Reviews";

const ProductTabing = () => {
const [activeTab, setActiveTab] = useState('description');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>

            <div className="tabing_box">
                <div className="action_btns flex_box">
                    <button className={activeTab === 'description' ? 'btn_pink active' : 'btn_pink'} onClick={() => handleTabChange('description')}>Description</button>
                    <button className={activeTab === 'additional' ? 'btn_pink active' : 'btn_pink'} onClick={() => handleTabChange('additional')}>Additional Information</button>
                    <button className={activeTab === 'reviews' ? 'btn_pink active' : 'btn_pink'} onClick={() => handleTabChange('reviews')}>Reviews</button>
                </div>
                <div className="data_display">
                    {activeTab === 'description' && (
                        <Description/>

                    )}
                    {activeTab === 'additional' && (
                       <AdditionalInfo/>

                    )}
                    {activeTab === 'reviews' && (
                        <Reviews/>
                    )}
                </div>
            </div>
        </>
    )
}

export default ProductTabing