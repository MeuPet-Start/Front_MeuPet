import React from "react";
import {
  FooterContainer,
  FooterNav,
  FooterLinks,
  FooterIcons,
  FooterText,
  Divider,
} from "./footerStyle";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useUserType } from "../../hooks/useUserType";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const { userType } = useUserType();
  const navigate = useNavigate();
  return (
    <FooterContainer>
      <FooterNav>
        <FooterLinks onClick={() => navigate("/")}>Home</FooterLinks>
        <FooterLinks
          as="a"
          href="https://adotapet.recife.pe.gov.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Adote
        </FooterLinks>

        <FooterLinks onClick={() => navigate("/servicos")}>
          Serviços
        </FooterLinks>
        {userType === "user" && (
          <FooterLinks onClick={() => navigate("/historico")}>
            Consultas
          </FooterLinks>
        )}
        {userType === "clinic" && (
          <FooterLinks onClick={() => navigate("/agenda")}>
            Consultas
          </FooterLinks>
        )}
      </FooterNav>
      <FooterIcons>
        <p>Conecte-se com a gente</p>
        <div>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a href="mailto:contato@sospatinha.com">
            <FaEnvelope />
          </a>
        </div>
      </FooterIcons>
      <FooterText>© 2024 S.O.S Patinha. Todos os direitos reservados.</FooterText>
    </FooterContainer>
  );
}
