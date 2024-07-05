import React from 'react';
import Topbar from './Topbar';
import Navbar from './Navbar';
import Team from './Team';
import Vendor from './Vendor';
import Footer from './Footer';

const TeamMembersPage = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="team-header">
        <div className="overlay">
          <h1 className="text-white">Team Members</h1>
          <div className="breadcrumb">
            <a href="/" className="text-white no-underline"><strong>Home</strong></a>
            <i className="far fa-circle text-white px-2"></i>
            <a href="/team" className="text-white no-underline"><strong>Team Members</strong></a>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <Team />
      </div>
      <Vendor />
      <Footer />
    </div>
  );
};

export default TeamMembersPage;
