import React, { useState, useEffect } from 'react';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { footerData } from '../mock/data';

function Story() {
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ footer }}>
      <h1>Story Section</h1>
      <Footer />
    </PortfolioProvider>
  );
}

export default Story;
