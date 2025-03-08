import React from 'react';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export function Head() {
  const { title, lang, description } = headData;

  return (
    <>
      <meta charSet="utf-8" />
      <title>{title || 'Devin Cooley Portfolio'}</title>
      <html lang={lang || 'en'} />
      <meta name="description" content={description || 'Devin Cooley Portfolio'} />
    </>
  );
}

function IndexPage() {
  return <App />;
}

export default IndexPage;
