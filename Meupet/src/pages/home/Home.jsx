import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { 
  Container, 
  SectionHero, 
  Content, 
  Title, 
  Subtitle, 
  Button, 
  DogImage, 
  ServicesSection, 
  ServiceCard, 
  ServiceImage, 
  ServicesTitle, 
  ServiceName, 
  ServiceDescription, 
  AppointmentsSection, 
  AppointmentsTitle, 
  AppointmentCard, 
  AppointmentImage, 
  AppointmentContent, 
  AppointmentInfo, 
  MoreButton 
} from './homeStyle';

import consultasImage from '../../assets/consultas.png';
import castracaoImage from '../../assets/castracao.png';
import vacinacaoImage from '../../assets/vacina.png';

export function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <Header />
      <SectionHero>
        <Content>
          <Title>Marque aqui o seu serviço</Title>
          <Subtitle>Cuidando e protegendo os nossos fiéis amigos</Subtitle>
          <Button>Agende a castração agora</Button>
        </Content>
        <DogImage />
      </SectionHero>
      <ServicesSection>
        <ServicesTitle>
          <span role="img" aria-label="paw">🐾</span> SERVIÇOS <span role="img" aria-label="paw">🐾</span>
        </ServicesTitle>
        <div>
          <ServiceCard>
            <ServiceImage src={consultasImage} alt="Consultas" />
            <ServiceName>Consultas</ServiceName>
            <ServiceDescription>Faça a marcação do exame de rotina do seu cão</ServiceDescription>
          </ServiceCard>
          <ServiceCard>
            <ServiceImage src={castracaoImage} alt="Castração" />
            <ServiceName>Castração</ServiceName>
            <ServiceDescription>Faça a marcação do exame de rotina do seu cão</ServiceDescription>
          </ServiceCard>
          <ServiceCard>
            <ServiceImage src={vacinacaoImage} alt="Vacinação" />
            <ServiceName>Vacinação</ServiceName>
            <ServiceDescription>Faça a marcação do exame de rotina do seu cão</ServiceDescription>
          </ServiceCard>
        </div>
      </ServicesSection>
      <AppointmentsSection>
        <AppointmentsTitle>MARCAÇÕES DE CONSULTAS, CASTRAÇÕES E VACINAS</AppointmentsTitle>
        <p>Clínicas parceiras e prestadores de serviços mais próximos de você.</p>
        <AppointmentCard onClick={() => navigate(`/appointments/1`)}>
          <AppointmentImage src="../../assets/clinic_image.png" alt="Clínica" />
          <AppointmentContent>
            <h3>Centro Médico Veterinário</h3>
            <AppointmentInfo>
              <p>📍 Várzea</p>
              <p>📅 3 Serviços inclusos</p>
              <p>📞 (81) 3440–0443</p>
              <p>🕒 Atendimento das 8h às 18h</p>
            </AppointmentInfo>
          </AppointmentContent>
        </AppointmentCard>
        <AppointmentCard onClick={() => navigate(`/appointments/1`)} >
          <AppointmentImage src="../../assets/clinic_image.png" alt="Clínica" />
          <AppointmentContent>
            <h3>Centro Médico Veterinário</h3>
            <AppointmentInfo>
              <p>📍 Várzea</p>
              <p>📅 3 Serviços inclusos</p>
              <p>📞 (81) 3440–0443</p>
              <p>🕒 Atendimento das 8h às 18h</p>
            </AppointmentInfo>
          </AppointmentContent>
        </AppointmentCard>
        <MoreButton>Mais</MoreButton>
      </AppointmentsSection>
      <Footer />
    </Container>
  );
}
