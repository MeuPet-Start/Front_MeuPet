import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "../card/card";
import axios from "axios";

const Carrossel = () => {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     // Requisição para obter os serviços
//     axios
//       .get("http://localhost:8080/api/services") // Atualize com sua rota de API
//       .then((response) => setServices(response.data))
//       .catch((error) => console.error("Erro ao carregar serviços:", error));
//   }, []);

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
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {services.map((service) => (
        <Card
          key={service.id}
          icon={service.icon}
          title={service.title}
          description={service.description}
          buttonLabel="Buscar Clínicas"
          onClick={() => alert(`Redirecionando para ${service.title}`)}
        />
      ))}
    </Slider>
  );
};

export default Carrossel;
