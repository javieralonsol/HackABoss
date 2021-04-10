import React from 'react';
import { Logotipo } from './Logotipo';
import { RedesSociales } from './RedesSociales';
import { MenuFooter } from './MenuFooter';

export const Footer = (props) => {
  // console.log('Pintando Footer');

  return (
    <footer>
      <MenuFooter />
      <Logotipo />
      <RedesSociales />
    </footer>
  );
};
