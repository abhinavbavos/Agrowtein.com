import React from 'react';
import Topbar from './Topbar';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import Team from './Team';
import Vendor from './Vendor';
import Footer from './Footer';
// import './About.css'; // Custom styles for the About page

const About = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <AboutUs />
      <Team />
      <Vendor />
      <Footer />
    </div>
  );
};

export default About;
