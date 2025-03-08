import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Fade from '../Animation/Fade';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

function Contact() {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <a className="cta-btn cta-btn--resume" href="/contact">
              {btn || "Let's Talk"}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
}

export default Contact;
