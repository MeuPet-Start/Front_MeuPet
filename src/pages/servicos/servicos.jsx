import React, { useEffect, useState } from "react";
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
  SearchBar,
  SearchInput,
  SearchIconLeft,
  ContainerHeader,
} from "./servicosStyle";

import { useLocation } from "react-router-dom";
import { api } from "../../services/api";
import clinicImg from "../../assets/hovet.png";

const Servicos = () => {
  const { state } = useLocation();
  const [clinic, setClinic] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [filterTag, setFilterTag] = useState(state?.filterTag || "");
  const [showAllServices, setShowAllServices] = useState(false);

  useEffect(() => {
    if (location.state?.filterTag) {
      setFilterTag(location.state.filterTag);
    }
  }, [location.state]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await api.get("/agendamento/partner/servico");
        console.log(response.data);
        setClinic(response.data);
        setFilteredServices(response.data);
      } catch (error) {
        console.error("Erro ao buscar os serviços:", error);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    const filtered = clinic.filter((clinic) =>
      clinic.servicoPrestados.some((tag) =>
        tag.name.toLowerCase().includes(filterTag.toLowerCase())
      )
    );
    setFilteredServices(filtered);
  }, [filterTag, clinic]);

  const handleFilterChange = (event) => {
    const { value } = event.target;
    setFilterTag(value);
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

          <ServicesContainer>
            {clinic
              .slice(0, showAllServices ? filteredServices.length : 4)
              .map((clinic) => (
                <ServiceCard
                  id={clinic.id}
                  key={clinic.name}
                  img={clinicImg}
                  clinicName={clinic.name}
                  tags={clinic.servicoPrestados}
                  address={
                    clinic.streetAndNumber + ", " + clinic.neighborhood ||
                    "Endereço clínica"
                  }
                  buttonLabel="Marcar Serviço"
                  onClick={() => alert("Navegar para detalhes do serviço")} // Exemplo de ação
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
