import React, { useState, useEffect } from 'react';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { footerData } from '../mock/data';

function QandA() {
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ footer }}>
      <h1>QandA Section</h1>
      <Footer />
    </PortfolioProvider>
  );
}

export default QandA;
