import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { FaSearch } from "react-icons/fa";
import Card from "../../components/card/card";
import {
  Container,
  SectionHero,
  Content,
  Title,
  HeroImage,
  SearchBarSection,
  SearchBarContainer,
  SearchBar,
  SearchInput,
  SearchIconLeft,
  CardContainer,
} from "./especialidadesStyle";

import { useState, useEffect } from "react";
const Especialidades = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const services = [
    {
      id: 1,
      icon: "https://cdn-icons-png.flaticon.com/512/2913/2913462.png", // Ícone fictício
      title: "Consultas",
      description: "Cuide da saúde do seu pet com atendimento veterinário especializado.",
    },
    {
      id: 2,
      icon: "https://cdn-icons-png.flaticon.com/512/616/616554.png", // Ícone fictício
      title: "Adoção",
      description: "Ajude um pet a encontrar um novo lar cheio de amor.",
    },
    {
      id: 3,
      icon: "https://cdn-icons-png.flaticon.com/512/4359/4359915.png", // Ícone fictício
      title: "Vacinas",
      description: "Garanta que seu pet esteja protegido com nossas vacinas especializadas.",
    },
    {
      id: 4,
      icon: "https://cdn-icons-png.flaticon.com/512/194/194279.png", // Ícone fictício
      title: "Pet Shop",
      description: "Tudo o que seu pet precisa em um só lugar.",
    },
    {
      id: 5,
      icon: "https://cdn-icons-png.flaticon.com/512/5063/5063243.png", // Ícone fictício
      title: "Tosa e Banho",
      description: "Deixe seu pet sempre limpo e bonito.",
    },
    {
      id: 6,
      icon: "https://cdn-icons-png.flaticon.com/512/2524/2524325.png", // Ícone fictício
      title: "Exames",
      description: "Exames laboratoriais para monitorar a saúde do seu pet.",
    },
    {
      id: 7,
      icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Ícone fictício
      title: "Cirurgias",
      description: "Procedimentos cirúrgicos seguros e especializados para seu pet.",
    },
    {
      id: 8,
      icon: "https://cdn-icons-png.flaticon.com/512/4741/4741997.png", // Ícone fictício
      title: "Emergências",
      description: "Atendimento veterinário de emergência 24 horas.",
    },
    {
      id: 9,
      icon: "https://cdn-icons-png.flaticon.com/512/3473/3473473.png", // Ícone fictício
      title: "Nutricionista",
      description: "Aconselhamento especializado para a dieta do seu pet.",
    },
    {
      id: 10,
      icon: "https://cdn-icons-png.flaticon.com/512/1154/1154193.png", // Ícone fictício
      title: "Cuidados Geriátricos",
      description: "Atendimento especializado para pets idosos, focando no bem-estar e qualidade de vida.",
    },
  ];

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCardClick = (title) => {
    navigate("/servicos", { state: { filterTag: title } });
  };

  return (
    <Container>
      <Header />
      <SectionHero>
        <Content>
          <Title>
            Mais que adoção, <br /> cuidado e conexão!
          </Title>
        </Content>
        <HeroImage />
      </SectionHero>

      <SearchBarSection>
        <SearchBarContainer>
          <SearchBar>
            <SearchInput
              type="text"
              placeholder="Buscar Especialidades"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <SearchIconLeft>
              <FaSearch />
            </SearchIconLeft>
          </SearchBar>
        </SearchBarContainer>
      </SearchBarSection>

      <CardContainer>
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <Card
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              buttonLabel="Marcar Serviço"
              onClick={() => handleCardClick(service.title)}
            />
          ))
        ) : (
          <p>Nenhum serviço encontrado</p>
        )}
      </CardContainer>

      <Footer />
    </Container>
  );
};

export default Especialidades;
