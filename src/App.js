import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ProductsAndServices from './components/ProductsAndServices';
import FeaturesPage from './components/FeauturesPage';
import Services from './components/Services';
import TeamMembersPage from './components/TeamMembersPage';
import ContactUsPage from './components/ContactUsPage';
import Blogs from './components/Blogs';
import Quote from './components/Quote';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductsAndServices />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<TeamMembersPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/blogs" element={<Blogs />} /> {/* Added Blogs route */}
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </Router>
  );
}

export default App;
