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

import { useState } from "react";

const Especialidades = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  const [services, setServices] = useState([
    {
      id: 1,
      icon: "https://cdn-icons-png.flaticon.com/512/2913/2913462.png",
      title: "Consultas",
      description:
        "Cuide da saúde do seu pet com atendimento veterinário especializado.",
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
      description:
        "Garanta que seu pet esteja protegido com nossas vacinas especializadas.",
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
  ]);
  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
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
              img={service.img}
              title={service.title}
              description={service.description}
              buttonLabel="Marcar Serviço"
              onClick={() => alert("Navegar para detalhes do serviço")}
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
