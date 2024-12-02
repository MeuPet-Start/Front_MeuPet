import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "../card/card";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";


const Carrossel = () => {

  const navigate = useNavigate();

  const handleCardClick = (title) => {
    navigate("/servicos", { state: { filterTag: title } });
  };

  const services = [
    {
      id: 1,
      icon: "https://cdn-icons-png.flaticon.com/512/2913/2913462.png", // Ícone fictício
      title: "Castração",
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
