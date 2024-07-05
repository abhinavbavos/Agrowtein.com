import React from 'react';
import Topbar from './Topbar';
import Navbar from './Navbar';
import Features from './Features';
import Vendor from './Vendor';
import Footer from './Footer';

const FeaturesPage = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="features-header">
        <div className="overlay">
          <h1 className="text-white">Features</h1>
          <div className="breadcrumb">
            <a href="/" className="text-white no-underline"><strong>Home</strong></a>
            <i className="far fa-circle text-white px-2"></i>
            <a href="/features" className="text-white no-underline"><strong>Features</strong></a>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <Features limit={8} />
      </div>
      <Vendor />
      <Footer />
    </div>
  );
};

export default FeaturesPage;
