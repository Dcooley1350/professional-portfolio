'use client';

import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from '../Animation/Fade';
import validateData from './ValidateFormData';
import PortfolioContext from '../../context/context';

function ContactForm() {
  const { contactForm } = useContext(PortfolioContext);
  const { backendUrl } = contactForm;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const handleSubmit = (e) => {
    setValidationErrors([]);
    e.preventDefault();

    const data = { email, name, message };
    const errorList = validateData(data);
    if (errorList.length > 0) {
      setValidationErrors(errorList);
      return;
    }
    setIsLoading(true);

    fetch(backendUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error();
        }
        setStatus('success');
        setIsLoading(false);
      })
      .catch(() => {
        setStatus('error');
        setIsLoading(false);
      });
  };

  return (
    <section id="contact-form" className="jumbotron">
      <Container>
        {!status && (
          <>
            <Fade top duration={1000} delay={800} distance="30px">
              <h1 className="contact-form-title">Contact</h1>
            </Fade>
            <Fade bottom duration={1000} delay={800} distance="30px">
              <form action={backendUrl} method="post" target="_blank">
                <div className="mb-3 pt-0">
                  <input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="textfield px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                  />
                </div>
                <div className="mb-3 pt-0">
                  <input
                    type="email"
                    placeholder="Your email"
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="textfield px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                  />
                </div>
                <div className="mb-3 pt-0">
                  <textarea
                    placeholder="Your message"
                    name="message"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    className="textfield messagefield px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                  />
                </div>
                <div className="mb-3 pt-0">
                  {isLoading === false ? (
                    <span
                      className="cta-btn cta-btn--sendmessage"
                      onClick={handleSubmit}
                      onKeyPress={handleSubmit}
                      role="button"
                      tabIndex={0}
                    >
                      Send a message
                    </span>
                  ) : (
                    <div
                      className="spinner-border"
                      style={{ width: '3rem', height: '3rem' }}
                      role="status"
                    >
                      <span className="sr-only">Loading...</span>
                    </div>
                  )}
                </div>
              </form>
            </Fade>
            {validationErrors.length > 0 && (
              <div className="contact-form-errors">
                {validationErrors.map((error) => (
                  <p key={error}>- {error}</p>
                ))}
              </div>
            )}
          </>
        )}
        {status === 'success' && (
          <>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <h1 className="contact-form-success">
                Thanks for reaching out, <span className="contact-form-success-name">{name}</span>.
              </h1>
            </Fade>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1200} distance="30px">
              <h1 className="contact-form-success-sub">I&apos;ll be in touch.</h1>
            </Fade>
            <Fade duration={1000} delay={2000}>
              <a className="cta-btn cta-btn--resume" href="/">
                Back Home
              </a>
            </Fade>
          </>
        )}
        {status === 'error' && (
          <>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <h1 className="contact-form-success">
                Apologies, there was an error sending your message.
              </h1>
            </Fade>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1200} distance="30px">
              <h1 className="contact-form-success-sub">Shoot me a message on Linked In.</h1>
            </Fade>
            <Fade duration={1000} delay={2000}>
              <a className="cta-btn cta-btn--resume" href="/">
                Back Home
              </a>
            </Fade>
          </>
        )}
      </Container>
    </section>
  );
}

export default ContactForm;
