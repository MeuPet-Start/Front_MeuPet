import React from "react";
import {
  ServiceCardContainer,
  ServiceCardtags,
  ServiceCardImage,
  ServiceCardTitle,
  ServiceCardDescription,
  ServiceCardButton,
  ServiceInfo,
  ServiceCardNeighborhoodLocaltion,
} from "./serviceCardStyle";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({
  img,
  tags,
  title,
  description,
  neighborhoodLocation,
  buttonLabel,
  onClick,
}) => {

  const navigate = useNavigate();


  return (
    <ServiceCardContainer>
      <ServiceCardImage src={img} alt={`${title} Imagem`} />
      <ServiceInfo>
        <ServiceCardtags>
          {tags.map((tag, index) => (
            <span key={index}>{tag.name}</span>
          ))}
        </ServiceCardtags>
        <ServiceCardTitle>{title}</ServiceCardTitle>
        <ServiceCardDescription>{description}</ServiceCardDescription>
        <ServiceCardNeighborhoodLocaltion>{neighborhoodLocation}</ServiceCardNeighborhoodLocaltion>
      </ServiceInfo>
      <ServiceCardButton onClick={() => navigate("/consulta")}>{buttonLabel}</ServiceCardButton>
    </ServiceCardContainer>
  );
};

export default ServiceCard;
