import React from "react";
import {
  ServiceCardContainer,
  ServiceCardtags,
  ServiceCardImage,
  ServiceCardTitle,
  ServiceCardDescription,
  ServiceCardButton,
  ServiceInfo,
} from "./serviceCardStyle";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({
  img,
  tags,
  title,
  description,
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
            <span key={index}>{tag}</span>
          ))}
        </ServiceCardtags>
        <ServiceCardTitle>{title}</ServiceCardTitle>
        <ServiceCardDescription>{description}</ServiceCardDescription>
      </ServiceInfo>
      <ServiceCardButton onClick={() => navigate("/consulta")}>{buttonLabel}</ServiceCardButton>
    </ServiceCardContainer>
  );
};

export default ServiceCard;
