import React from 'react';
import './LandingPage.css';
import defaultImage from './defaultImage.png';
import profileImage from './profileImage.png';

const LandingPage = ({ image, productName, description, additionalText }) => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="profile-icon"></div>
        <div className="navigation">
          <div className="nav-button1"></div>
          <div className="nav-button2"></div>
        </div>
      </header>
      <main className="main-content">
        <div className="image-section">
          <div className="large-image-container">
            <img src={defaultImage} className="product-image" />
          </div>
          <div>
          <img src={profileImage} alt="Profile" className="profile-image" />
          </div>
        </div>
        <div className="text-section">
          <h1 className="product-name">{productName || 'Product Name'}</h1>
          <p className="description">
        { 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
          </p>
          <p className="description">
        {'In volutpat vehicula quam, at rutrum metus vulputate .'}
      </p>
      <p className="description">
        {'Praesent diam quam , dolor sit amet'}
      </p>
        </div>

        <div className="button">
            
            </div>
      </main>


    </div>
   
  );
};

export default LandingPage;




