import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "../card/card";
import axios from "axios";

const Carrossel = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

  const handleCardClick = (title) => {
    navigate("/servicos", { state: { filterTag: title } });
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/services");
        setServices(response.data);
      } catch (error) {
        setError("Erro ao carregar os serviços");
        console.error("Erro ao carregar serviços:", error);
      }
    };

    fetchServices();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10px",
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
          onClick={() => handleCardClick(service.title)}
        />
      ))}
    </Slider>
  );
};

export default Carrossel;
