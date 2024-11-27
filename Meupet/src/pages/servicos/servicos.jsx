import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "../../components/serviceCard/serviceCard";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import {
  Container,
  ServicesTitle,
  ServicesDescription,
  ServicesContainer,
  ButtonService,
  ServicesSection,
  ServicesInfo,
  InputFilter,
  ContainerHeader,
} from "./servicosStyle";

const Servicos = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [filterTag, setFilterTag] = useState("");
  const [showAllServices, setShowAllServices] = useState(false);

  useEffect(() => {
    const fetchedServices = [
      {
        id: 1,
        img: "/path/to/image1.jpg",
        tags: ["Urgente", "Popular"],
        title: "Serviço 1",
        description: "Descrição detalhada do serviço 1",
      },
      {
        id: 2,
        img: "/path/to/image2.jpg",
        tags: ["Novo", "Promoção"],
        title: "Serviço 2",
        description: "Descrição detalhada do serviço 2",
      },
      {
        id: 3,
        img: "/path/to/image3.jpg",
        tags: ["Exclusivo"],
        title: "Serviço 3",
        description: "Descrição detalhada do serviço 3",
      },
      {
        id: 4,
        img: "/path/to/image3.jpg",
        tags: ["Exclusivo"],
        title: "Serviço 4",
        description: "Descrição detalhada do serviço 4",
      },
      {
        id: 5,
        img: "/path/to/image3.jpg",
        tags: ["Exclusivo"],
        title: "Serviço 5",
        description: "Descrição detalhada do serviço 5",
      },
    ];

    setServices(fetchedServices);
    setFilteredServices(fetchedServices);
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

          <InputFilter
            type="text"
            placeholder="Filtrar por tag"
            value={filterTag}
            onChange={handleFilterChange}
          />
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
