import React, { useState, useEffect } from 'react';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { footerData } from '../mock/data';

function Contact() {
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ footer }}>
      <h1>Contact Section</h1>
      <Footer />
    </PortfolioProvider>
  );
}

export default Contact;
