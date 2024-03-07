import React, { useState } from 'react';
import FacebookProducts from './FacebookProducts';
import InstagramProducts from './InstagramProducts';
import WhatsappProducts from './WhatsappProducts';
import TwitterProducts from './TwitterProducts';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const ShareOrder = () => {
  const shareComponents = {
    'facebook': <FacebookProducts />,
    'instagram': <InstagramProducts />,
    'whatsapp': <WhatsappProducts />,
    'twitter': <TwitterProducts />
  };

  const shareTabs = {
    'facebook': <FaFacebookF />,
    'instagram': <FaInstagram />,
    'whatsapp': <FaWhatsapp />,
    'twitter': <FaTwitter />
  };

  const [newtab, setNewTab] = useState('facebook');

  const handleTab = (tab) => {
    setNewTab(tab);
  };

  return (
    <>
      <div className="share_order editprofilebody">
        <div className="shareorder_body shadow">
          <h4>products shared on</h4>
          <div className="share_tabinglist">
            <ul>
              {Object.keys(shareTabs).map((tab) => (
                <li key={tab} className={newtab === tab ? 'active' : 'togglelist'} onClick={() => { handleTab(tab) }}>
                  {shareTabs[tab]} {tab}
                </li>
              ))}
            </ul>
          </div>
          <div className="sharetabingbody">
            {shareComponents[newtab]}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareOrder;
