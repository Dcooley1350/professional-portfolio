'use client';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import Contact from '../components/Contact';

export function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <title>Contact | Devin Cooley</title>
      <html lang="en" />
      <meta name="description" content="Contact Devin Cooley" />
    </>
  );
}

function ContactPage() {
  return <Contact />;
}

export default ContactPage;
