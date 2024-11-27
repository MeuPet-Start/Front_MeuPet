import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import {
  Container,
  SectionHero,
  Content,
  Title,
  Subtitle,
  Button,
  DogImage,
  ServicesSection,
  ServicesTitle,
  ButtonService,
  AdotaPetSection,
  AdotaPetContent,
  AdotaPetTitle,
  AdotaPetSubtitle,
  AdotaPetButton,
  AdotaPetImage,
  AdotaPetInfo,
  CapibaSection,
  CapibaContent,
  CapibaTitle,
  CapibaDescription,
  CapibaButton,
  CapibaImage,
  CapibaInfo,
} from "./homeStyle";
import Carrossel from "../../components/carrossel/carrossel";

export function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <SectionHero>
        <Content>
          <Title>
            Mais que adoção,
            <br />
            cuidado e conexão!
          </Title>
          <Subtitle>Cuidando e protegendo os nossos fiéis amigos</Subtitle>
        </Content>
        <DogImage />
      </SectionHero>
      <ServicesSection>
        <ServicesTitle>NOSSAS ESPECIALIDADES</ServicesTitle>
        <Carrossel />
        <ButtonService onClick={() => navigate("/especialidades")}>
          Ver todos as Especialidades
        </ButtonService>
      </ServicesSection>
      <AdotaPetSection>
        <AdotaPetContent>
          <AdotaPetImage />
          <AdotaPetInfo>
            <AdotaPetTitle>
              Visite o <span>AdotaPET</span> e encontre seu parceiro
            </AdotaPetTitle>
            <AdotaPetSubtitle>
              Encontre seu novo melhor amigo de forma <br />
              prática e emocionante! Escolha e conheça seu <br />
              pet sem sair de casa. Transforme vidas e crie <br />
              histórias de amor e carinho.
            </AdotaPetSubtitle>
            <AdotaPetButton
              as="a"
              href="https://adotapet.recife.pe.gov.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Adotar agora!
            </AdotaPetButton>
          </AdotaPetInfo>
        </AdotaPetContent>
      </AdotaPetSection>
      <CapibaSection>
        <CapibaContent>
          <CapibaInfo>
            <CapibaTitle>Moeda Capiba</CapibaTitle>
            <CapibaDescription>
              A Moeda Capiba é a moeda do Conecta Recife e você pode ganhá-la em
              nossa plataforma ao realizar ações como adoção, consultas,
              vacinação e castração. Acumule moedas e troque por descontos em
              serviços, produtos ou benefícios exclusivos!
            </CapibaDescription>
            <CapibaButton onClick={() => navigate("/recompensas")}>
              Veja as Recompensas
            </CapibaButton>
          </CapibaInfo>
          <CapibaImage/>
        </CapibaContent>
      </CapibaSection>

      <Footer />
    </Container>
  );
}
