import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "../../components/serviceCard/serviceCard";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { FaSearch } from "react-icons/fa";
import {
  Container,
  ServicesTitle,
  ServicesDescription,
  ServicesContainer,
  ButtonService,
  ServicesSection,
  ServicesInfo,
  SearchBarSection,
  SearchBarContainer,
  SearchBar,
  SearchInput,
  SearchIconLeft,
  ContainerHeader,
} from "./servicosStyle";

const Servicos = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [filterTag, setFilterTag] = useState("");
  const [showAllServices, setShowAllServices] = useState(false);

  useEffect(() => {
    if (location.state?.filterTag) {
      setFilterTag(location.state.filterTag);  
    }
  }, [location.state]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await api.get("/api/services"); // Ajuste a URL conforme o seu backend

        setServices(response.data);
        setFilteredServices(response.data);
      } catch (error) {
        console.error("Erro ao buscar os serviços:", error);
      }
    };

    fetchServices();
  }, []);

  const handleFilterChange = (event) => {
    const { value } = event.target;
    setFilterTag(value);

    const filtered = services.filter((service) =>
      service.tags.some((tag) =>
        tag.toLowerCase().includes(value.toLowerCase())
      )
    );
    setFilteredServices(filtered);
  };

  const handleShowAllServices = () => {
    setShowAllServices((prevState) => !prevState);
  };

  return (
    <Container>
      <ContainerHeader>
        <Header />
      </ContainerHeader>
      <ServicesSection>
        <ServicesInfo>
          <ServicesTitle>MARCAÇÕES DE SERVIÇOS</ServicesTitle>
          <ServicesDescription>
            Clínicas parceiras e prestadores de serviços mais próximos de você!
          </ServicesDescription>
          <SearchBarSection>
            <SearchBarContainer>
              <SearchBar>
                <SearchInput
                  type="text"
                  placeholder="Buscar Especialidades"
                  value={filterTag}
                  onChange={handleFilterChange}
                />
                <SearchIconLeft>
                  <FaSearch />
                </SearchIconLeft>
              </SearchBar>
            </SearchBarContainer>
          </SearchBarSection>
          <ServicesContainer>
            {filteredServices
              .slice(0, showAllServices ? filteredServices.length : 4)
              .map((service) => (
                <ServiceCard
                  key={service.id}
                  img={service.img}
                  tags={service.tags}
                  title={service.title}
                  description={service.description}
                  buttonLabel="Marcar Serviço"
                  onClick={() => alert("Navegar para detalhes do serviço")}
                />
              ))}
          </ServicesContainer>

          <ButtonService onClick={handleShowAllServices}>
            {showAllServices
              ? "Carregar menos serviços"
              : "Carregar mais serviços"}
          </ButtonService>
        </ServicesInfo>
      </ServicesSection>
      <Footer />
    </Container>
  );
};

export default Servicos;
