import React from 'react';
import { Helmet } from 'react-helmet';
import Contact from '../components/Contact';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Devin Cooley Portfolio: Q-and-A'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Devin Cooley Portfolio: Q-and-A'} />
      </Helmet>
      <Contact />
    </>
  );
};
