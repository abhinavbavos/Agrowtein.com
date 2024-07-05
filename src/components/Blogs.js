import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Navbar.css'

const Blogs = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-12-31') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{' '}
      </span>
    );
  });

  return (
    <>
      <Navbar />
      <div className="container text-center" style={{ marginTop: '50px', marginBottom: '50px' }}>
        <h1>Blogs</h1>
        <h2>We will update soon</h2>
        <div id="countdown" className="countdown">
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
