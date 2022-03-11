import React from 'react';
import ContactSection from '../components/ContactSection';
import Map from '../components/Map';

export const Contact = ({setGame}) => {
  setGame(false);
  return (
    <>
      <ContactSection />
      <Map />
    </>
  );
}
