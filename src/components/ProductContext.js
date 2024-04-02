import React, { createContext, useState } from "react";
import ProductData from './ProductData';

const proContext = createContext();
const ProProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState('12month');
    
    const handleTab = (tab) => {
        setActiveTab(tab);
    };

    // Fetch data based on activeTab
    const AllData = ProductData[activeTab] || [];

    return (
        <proContext.Provider value={{ activeTab,setActiveTab, handleTab, AllData }}>
            {children}
        </proContext.Provider>
    );
};

export { proContext, ProProvider };
