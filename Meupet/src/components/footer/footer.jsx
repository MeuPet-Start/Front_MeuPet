import React from 'react';
import { FooterContainer, FooterNav, FooterLinks, FooterIcons, FooterText, Divider } from './footerStyle';
import { FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterNav>
        <FooterLinks href="#">Home</FooterLinks>
        <Divider>|</Divider>
        <FooterLinks href="#">Adote</FooterLinks>
        <Divider>|</Divider>
        <FooterLinks href="#">Serviços</FooterLinks>
      </FooterNav>
      <FooterIcons>
        <p>Conecte-se com a gente</p>
        <div>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="mailto:contato@resgate-ai.com">
            <FaEnvelope />
          </a>
        </div>
      </FooterIcons>
      <FooterText>© 2024 Resgate-ai. Todos os direitos reservados.</FooterText>
    </FooterContainer>
  );
}

