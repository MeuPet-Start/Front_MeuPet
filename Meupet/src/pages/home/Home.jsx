import React from 'react';
import Header from '../../components/header';
import { Container, Section, Title, Subtitle, Button, DogImage } from './homeStyle';

export function Home() {
  return (
    <Container>
      <Header />
      <Section>
        <Title>CASTRAÇÃO</Title>
        <Subtitle>Castrar seu animal é mais fácil e acessível do que você pensa!</Subtitle>
        <Button>Agende a castração agora</Button>
        {/* <DogImage src={} alt="Dog" /> */}
      </Section>
    </Container>
  );
}

