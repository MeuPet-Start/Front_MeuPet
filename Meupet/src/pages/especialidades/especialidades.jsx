import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { FaSearch } from "react-icons/fa";
import Card from "../../components/card/card";
import {
  Container,
  SectionHero,
  HeroContent,
  HeroTitle,
  HeroImage,
  SearchBarSection,
  SearchBarContainer,
  SearchBar,
  SearchInput,
  SearchIconLeft,
  SearchIconRight,
  CardContainer,
} from "./especialidadesStyle";

const Especialidades = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <SectionHero>
        <HeroContent>
          <HeroTitle>
            Mais que adoção, <br /> cuidado e conexão!
          </HeroTitle>
          <HeroImage />
        </HeroContent>
      </SectionHero>

      <SearchBarSection>
        <SearchBarContainer>
          <SearchBar>
            <SearchIconLeft>
              <FaSearch />
            </SearchIconLeft>
            <SearchInput type="text" placeholder="Buscar Especialidades" />
          </SearchBar>
          <SearchIconRight>
            <FaSearch />
          </SearchIconRight>
        </SearchBarContainer>
      </SearchBarSection>

      <CardContainer>
        {[
          {
            id: 1,
            icon: "https://cdn-icons-png.flaticon.com/512/2913/2913462.png",
            title: "Consultas",
            description: "Cuide da saúde do seu pet com atendimento veterinário especializado.",
            buttonLabel: "Buscar Clínicas",
          },
          {
            id: 2,
            icon: "https://cdn-icons-png.flaticon.com/512/616/616554.png",
            title: "Adoção",
            description: "Ajude um pet a encontrar um novo lar cheio de amor.",
            buttonLabel: "Ver Pets",
          },
          {
            id: 3,
            icon: "https://cdn-icons-png.flaticon.com/512/2913/2913462.png", 
            title: "Vacinas",
            description: "Garanta que seu pet esteja protegido com nossas vacinas especializadas.",
            buttonLabel: "Buscar Clínicas",
          },
          {
            id: 4,
            icon: "https://cdn-icons-png.flaticon.com/512/194/194279.png", 
            title: "Pet Shop",
            description: "Tudo o que seu pet precisa em um só lugar.",
            buttonLabel: "Buscar Pet Shop",
          },
          {
            id: 5,
            icon: "https://cdn-icons-png.flaticon.com/512/5063/5063243.png", 
            title: "Tosa e Banho",
            description: "Deixe seu pet sempre limpo e bonito.",
            buttonLabel: "Agendar",
          },
        ].map((service) => (
          <Card
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
            buttonLabel={service.buttonLabel}
            onClick={() => navigate("/clinicas")}
          />
        ))}
      </CardContainer>

      <Footer />
    </Container>
  );
}

export default Especialidades;
