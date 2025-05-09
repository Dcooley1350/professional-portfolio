'use client';

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

function Footer({ showScrollTop = true }) {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        {showScrollTop && (
          <span className="back-to-top">
            <Link to="hero" smooth duration={1000}>
              <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
            </Link>
          </span>
        )}
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">{new Date().getFullYear()} - Devin Cooley</p>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  showScrollTop: PropTypes.bool,
};

export default Footer;
