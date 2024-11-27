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

const ServiceCard = ({
  img,
  tags,
  title,
  description,
  buttonLabel,
  onClick,
}) => {
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
      <ServiceCardButton onClick={onClick}>{buttonLabel}</ServiceCardButton>
    </ServiceCardContainer>
  );
};

export default ServiceCard;
