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
  const [services, setServices] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/services"); // Substitua pela URL da sua API
        setServices(response.data);
      } catch (error) {
        setError("Erro ao carregar os serviços", error);
      }
    };
    fetchServices();
  }, []);

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
              img={service.img}
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
