import React from 'react';
import { Logo } from '../Logo';
import { FooterInfo, FooterLogo, FooterNav } from './styles';

export const FooterContent = () => {
  return (
    <>
      <FooterInfo>
        <FooterLogo>
          <Logo />
          <h6>Rpc</h6>
        </FooterLogo>
        <FooterNav>
          <span>&copy; Copyright 2022 - Lucas Braz Dutra</span>
          <ul>
            <li> Principais editoriais </li>
            <li>politica de privacidade </li>
            <li>minha conta </li>
            <li>anuncie conosco </li>
          </ul>
        </FooterNav>
      </FooterInfo>
    </>
  );
};
