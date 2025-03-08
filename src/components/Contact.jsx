'use client';

import React, { useState, useEffect } from 'react';
import Footer from './Footer/Footer';
import ContactForm from './Contact/ContactForm';
import { PortfolioProvider } from '../context/context';

import { footerData, contactFormData } from '../mock/data';

function Contact() {
  const [footer, setFooter] = useState({});
  const [contactForm, setContactForm] = useState({});

  useEffect(() => {
    setFooter({ ...footerData });
    setContactForm({ ...contactFormData });
  }, []);

  return (
    <PortfolioProvider value={{ footer, contactForm }}>
      <ContactForm />
      <Footer showScrollTop={false} />
    </PortfolioProvider>
  );
}

export default Contact;
