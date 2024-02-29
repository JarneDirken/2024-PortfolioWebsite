import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import Popup from './Popup';
import infoButton from '../assets/svg/info-circle-svgrepo-com.svg';

export const ProjectCard = ({ title, description, imgUrl, moreInfo, githubLink, liveWebsiteLink, images }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleHidePopup = () => {
    setShowPopup(false);
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <a onClick={handleShowPopup} className='pe-auto'>
            <img src={infoButton} className='info-button' alt='info button'/>
          </a>
        </div>
      </div>
      {showPopup && (
        <Popup
          title={title}
          moreInfo={moreInfo}
          githubLink={githubLink}
          liveWebsiteLink={liveWebsiteLink}
          images={images}
          onHide={handleHidePopup}
        />
      )}
    </Col>
  );
};
