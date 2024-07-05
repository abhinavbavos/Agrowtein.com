import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import pumpImage from '../assets/images/pump 5.jpg';
import pineappleImage from '../assets/images/EV.jpg';

const Carousel = () => {
  return (
    <div id="header-carousel" className="owl-carousel owl-theme">
      <div className="carousel-item active">
        <img className="w-100" src={pumpImage} alt="Image" />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <div className="p-3" style={{ maxWidth: '900px' }}>
            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Innovation & Technology</h5>
            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Agventure: Innovative Water Pump</h1>
            <a href="/contact" className="btn btn-success py-md-3 px-md-5 me-3 animated slideInLeft" style={{ color: '#ffffff' }} onMouseOver={(e) => e.target.style.color = '#000'} onMouseOut={(e) => e.target.style.color = '#ffffff'}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img className="w-100" src={pineappleImage} alt="Image" />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <div className="p-3" style={{ maxWidth: '900px' }}>
            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Innovation & Technology</h5>
            <h1 className="display-1 text-white mb-md-4 animated zoomIn">PinePack Pro: Pineapple Sapling Bundling System</h1>
            <a href="/contact" className="btn btn-success py-md-3 px-md-5 me-3 animated slideInLeft" style={{ color: '#ffffff' }} onMouseOver={(e) => e.target.style.color = '#000'} onMouseOut={(e) => e.target.style.color = '#ffffff'}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img className="w-100" src={pumpImage} alt="Image" />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <div className="p-3" style={{ maxWidth: '900px' }}>
            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Innovation & Technology</h5>
            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Agventure: Innovative Water Pump</h1>
            <a href="/contact" className="btn btn-success py-md-3 px-md-5 me-3 animated slideInLeft" style={{ color: '#ffffff' }} onMouseOver={(e) => e.target.style.color = '#000'} onMouseOut={(e) => e.target.style.color = '#ffffff'}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
