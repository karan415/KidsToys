import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const HeaderBanner = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(getActiveTab(location.pathname));


    function getActiveTab(pathname) {
        switch (pathname) {
            case '/':
                return 'Home';
            case '/products':
                return 'Products';
            case '/cart':
                return 'cart';
            case '/list':
                return 'shop';
                case '/cart':
                    return 'cart';

            default:
                return '';
        }
    }

    // Update active tab when location changes
    React.useEffect(() => {
        setActiveTab(getActiveTab(location.pathname));
    }, [location]);

    return (
        <section className="header_banner">
            <div className="container-fluid">
                <div className="header_banner_bg">
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link> /</li>
                            <li><Link to={{ activeTab }}>{activeTab}</Link></li>
                        </ul>
                    </nav>
                    <div className="active_tab"></div>
                </div>
            </div>
        </section>
    );
}

export default HeaderBanner;
