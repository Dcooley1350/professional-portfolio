'use client';

import React from 'react';
import Story from '../components/Story';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export function Head() {
  const { title, lang, description } = headData;

  return (
    <>
      <meta charSet="utf-8" />
      <title>{title || 'Devin Cooley Portfolio: Story'}</title>
      <html lang={lang || 'en'} />
      <meta name="description" content={description || 'Devin Cooley Portfolio: Story'} />
    </>
  );
}

function StoryPage() {
  return <Story />;
}

export default StoryPage;
