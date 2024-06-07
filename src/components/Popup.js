import React from 'react';
import { Modal, Carousel } from 'react-bootstrap';
import navIcon3 from '../assets/svg/nav-icon3.svg';
import navIcon2 from '../assets/svg/nav-icon2.svg';

const Popup = ({ title, moreInfo, githubLink, liveWebsiteLink, images, onHide }) => {
  return (
    <Modal show={true} onHide={onHide} centered className="custom-popup">
      <Modal.Header closeButton>
        <Modal.Title className='display-6'>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: '60vh', overflowY: 'auto' }}>
      <div className='d-flex justify-content-between align-items-center'>
            {moreInfo && (<p className='h4'>Description:</p>)}<p></p>
            <div className='social-icon'>
                {liveWebsiteLink && <a href={liveWebsiteLink} target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Website" /></a>}
                {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="GitHub" /></a>}
            </div>
        </div>
        <div className="more-info-content" dangerouslySetInnerHTML={{ __html: moreInfo }}></div>
        <br></br>
        {images.length !== 0 &&
            (images.length === 1 ? (
                <div className='d-flex justify-content-center'>
                    <img
                    className="popupImages"
                    src={images[0]}
                    alt={`Slide 1`}
                    />
                </div>
            ) : (
                <Carousel>
                {images.map((image, index) => (
                    <Carousel.Item key={index} className="text-center">
                    <img
                        className="popupImages mx-auto"
                        src={image}
                        alt={`Slide ${index + 1}`}
                    />
                    </Carousel.Item>
                ))}
                </Carousel>
            ))}
      </Modal.Body>
    </Modal>
  );
};

export default Popup;
