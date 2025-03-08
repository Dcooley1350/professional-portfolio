'use client';

import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Fade from '../Animation/Fade';
import PortfolioContext from '../../context/context';

function Header() {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  // Initialize state with correct values based on window width
  // Use a function to calculate the initial state
  const [isDesktop, setIsDesktop] = useState(() => {
    // Check if window is defined (for SSR)
    if (typeof window !== 'undefined') {
      return window.innerWidth > 769;
    }
    return false;
  });

  const [isMobile, setIsMobile] = useState(() => {
    // Check if window is defined (for SSR)
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 769;
    }
    return false;
  });

  useEffect(() => {
    // This effect now just handles window resize events
    const handleResize = () => {
      if (window.innerWidth > 769) {
        setIsDesktop(true);
        setIsMobile(false);
      } else {
        setIsMobile(true);
        setIsDesktop(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title}
            <span className="text-color-main">{name}</span>
            <br />
            {subtitle}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
}

export default Header;
