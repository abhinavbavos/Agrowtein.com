import React from 'react';
import Topbar from './Topbar';
import Navbar from './Navbar';
import Services from './Services';
import Vendor from './Vendor';
import Footer from './Footer';
// import './ProductsAndServices.css'; // Custom styles for the Products and Services page

const ProductsAndServices = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="products-header">
        <div className="overlay">
          <h1 className="text-white">Products and Services</h1>
          <div className="breadcrumb">
            <a href="/" className="text-white no-underline"><strong>Home</strong></a>
            <i className="far fa-circle text-white px-2"></i>
            <a href="/products" className="text-white no-underline"><strong>Products and Services</strong></a>
          </div>
        </div>
      </div>
      <Services />
      <Vendor />
      <Footer />
    </div>
  );
};

export default ProductsAndServices;
