import React from 'react';
import './Landing.css';
import DotGrid from '../components/DotGrid';
import BlurText from '../components/BlurText';
import ShinyText from '../components/ShinyText';
import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom';
const LandingPage = () => {

  return (
    <div className="landing-page">
      {/* DotGrid Background */}
      <div className="dot-grid-background">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#989898"
          activeColor="#5227FF"
          proximity={140}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1}
        />
      </div>

      {/* Content */}
      <div className="content">
        {/* Navigation */}
        <Navbar/>

        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-badge">
            ✨ AI-Powered Finance Platform
          </div>

          <h1><BlurText text="Welcome to Finsyte!" delay={150} animateBy="words" direction="top" className="hero-title"/></h1>

          <p className="hero-description">
            <ShinyText text="Automate. Analyze. Ascend.
Your all-in-one AI-powered personal finance navigator." disabled={false} speed={1} className='custom-class' />
          </p>

          <div className="hero-buttons">
            <button className="cta-primary">Get Started Free →</button>
            <button className="cta-secondary">Watch Demo</button>
          </div>

          {/* Feature Highlights */}
          <div className="feature-highlights">
            <div className="feature-item">
              <span className="check-icon text-2xl">✓</span>
              <span className='text-2xl text-neutral-300'>Free 30-day trial</span>
            </div>
            <div className="feature-item">
              <span className="check-icon text-2xl">✓</span>
              <span className='text-2xl text-neutral-300'>No credit card required</span>
            </div>
            <div className="feature-item">
              <span className="check-icon text-2xl">✓</span>
              <span className='text-2xl text-neutral-300'>Bank-level security</span>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default LandingPage;